// Header.tsx
import React, { useState } from "react";
import { headerData } from "../../../assets/api/api";
import { BiMenuAltLeft ,BiX} from "react-icons/bi";
const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="z-50 fixed tracking-widest">
      <button
        className="lg:hidden bg-slate-800 text-white text-center text-2xl inline-block h-14 w-14 rounded-full m-4"
        onClick={toggleMenu}
      >
        {menuOpen ? <BiX size={35} className="mx-auto" /> : <BiMenuAltLeft size={35} className="mx-auto" />}
      </button>
      <nav className="container mx-auto flex items-center">
        <div
          className={`lg:flex py-2 px-4 space-x-4 ${
            menuOpen
              ? "fixed top-0 left-0 h-screen w-screen -z-10 flex justify-center items-center"
              : "hidden"
          } px-4 header-gradient`}
        >
          <ul
            className={`lg:flex space-x-4 ${
              menuOpen ? "inline-block" : "hidden"
            } `}
          >
            {headerData.map((i) => (
              <li
                className="text-center lg:text-lg text-3xl tracking-wider leading-loose "
                key={i}
              >
                <a href="#" className="text-white hover:text-black">
                  {i}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Header;
