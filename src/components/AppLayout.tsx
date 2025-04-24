"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ComposeBox from "./ComposeBox";
import Feed from "./Feed";
import { supabase } from "../utils/supabaseClient";

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Cek user login saat komponen mount
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
      setLoading(false);
    };
    getUser();
    // Listen perubahan auth Supabase
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />
      <div className="flex-1 max-w-2xl mx-auto border-x border-gray-200 min-h-screen flex flex-col">
        <Header />
        {/* Hanya tampilkan ComposeBox jika user sudah login */}
        {!loading && user && <ComposeBox />}
        {/* Jika belum login, tampilkan pesan */}
        {!loading && !user && (
          <div className="p-4 text-center text-gray-500 font-semibold">
          Please <a href="/signup" className="text-blue-600 underline">sign up</a> or <a href="/signin" className="text-blue-600 underline">sign in</a> to post a message.
        </div>
        )}
        <Feed />
        {children}
      </div>
    </div>
  );
};

export default AppLayout;