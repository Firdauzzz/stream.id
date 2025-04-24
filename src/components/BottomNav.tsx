import React, { useRef, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHashtag, faBell, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { useRouter } from "next/navigation";

const iconClass = "w-8 h-8";
const btnClass = "flex flex-col items-center focus:outline-none transition-colors duration-150 hover:bg-gray-100 active:bg-gray-200 rounded-lg px-3 py-1";

const BottomNav: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (currentScroll > lastScroll.current && currentScroll > 40) {
        setHidden(true); // Scroll down, hide
      } else {
        setHidden(false); // Scroll up, show
      }
      lastScroll.current = currentScroll;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fungsi ketika tombol plus ditekan
  const handlePlusClick = () => {
    router.push("/signin"); // Ganti ke /compose jika user sudah login
  };

  return (
    <>
      <nav
        className={`fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-4 z-20 md:hidden text-gray-700 text-lg transition-transform duration-300 ${hidden ? 'translate-y-full' : 'translate-y-0'}`}
        style={{ fontSize: '1.25rem', minHeight: '70px' }}
      >
        <button className={btnClass}>
          <FontAwesomeIcon icon={faHouse} className={iconClass} />
        </button>
        <button className={btnClass}>
          <FontAwesomeIcon icon={faHashtag} className={iconClass} />
        </button>
        <button className={btnClass}>
          <FontAwesomeIcon icon={faBell} className={iconClass} />
        </button>
        <button className={btnClass}>
          <FontAwesomeIcon icon={faUser} className={iconClass} />
        </button>
      </nav>
      {/* Tombol Plus mengapung di atas BottomNav, di atas logo profile */}
      <button
        onClick={handlePlusClick}
        className="fixed md:hidden rounded-full bg-green-500 hover:bg-green-600 active:bg-green-700 shadow-lg flex items-center justify-center z-30"
        style={{
          right: 24,
          bottom: 80,
          width: 56,
          height: 56,
          transition: 'transform 0.3s',
          transform: hidden ? 'translateY(120px)' : 'translateY(0)'
        }}
        aria-label="Buat Tweet"
      >
        <FontAwesomeIcon icon={faPlus} className="w-8 h-8 text-white" />
      </button>
    </>
  );
};

export default BottomNav;
