"use client";

import React, { useEffect, useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import ComposeBox from "./ComposeBox";
import Feed from "./Feed";
import BottomNav from "./BottomNav"; // tambahkan import BottomNav
import { supabase } from "../utils/supabaseClient";

const AppLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data?.user || null);
      setLoading(false);
    };
    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });
    return () => {
      listener?.subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header user={user} />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 max-w-2xl mx-auto border-x border-gray-200 flex flex-col bg-white">
          {!loading && user && <ComposeBox />}
          {!loading && !user && (
            <div className="p-4 text-center text-gray-500 font-semibold">
              Untuk posting, silakan{" "}
              <a href="/signin" className="text-blue-600 underline">Sign In</a>{" "}
              atau{" "}
              <a href="/signup" className="text-blue-600 underline">Sign Up</a>
            </div>
          )}
          <Feed />
          {children}
        </main>
      </div>
      {/* BottomNav hanya tampil di mobile */}
      <BottomNav />
    </div>
  );
};

export default AppLayout;