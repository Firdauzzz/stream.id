import React from "react";
import { supabase } from "../utils/supabaseClient";
import { useRouter } from "next/navigation";

const Header: React.FC<{ user?: any }> = ({ user }) => {
  const router = useRouter();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push("/");
  };

  return (
    <header className="flex items-center justify-between px-4 py-2 border-gray-200 sticky top-0 z-30 w-full bg-white">
      <div className="flex items-center gap-2">
        <img src="/streem.png" alt="Streem Logo" className="w-8 h-8 object-contain" />
        <span className="ml-2 text-xl font-bold text-green-700">Streem</span>
      </div>
      <div className="flex gap-4 items-center font-semibold">
        <a href="#" className="text-blue-600">For you</a>
        <a href="#" className="text-gray-600">Following</a>
      </div>
      <div className="flex gap-4 items-center">
        {user && (
          <>
            <button
              onClick={handleLogout}
              className="px-3 py-1 rounded bg-red-500 text-white hover:bg-red-400 transition-colors"
              title="Logout"
            >
              Logout
            </button>
            {user.user_metadata?.avatar_url && (
              <img src={user.user_metadata.avatar_url} alt="User Avatar" className="w-8 h-8 rounded-full border ml-2" />
            )}
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
