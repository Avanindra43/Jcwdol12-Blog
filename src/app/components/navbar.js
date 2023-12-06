// Navbar.js

import Image from "next/image";

function Navbar() {
  return (
    <nav className="bg-white text-[#18a0fb] py-4">
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <Image src="/Logo 2 .svg" alt="logo" width={80} height={80} />
        </a>

        <div className="hidden md:flex items-center space-x-6">
          <a href="#" className="hover:text-gray-300">
            Home
          </a>
          <a href="/about" className="hover:text-gray-300">
            About
          </a>
          <a href="#" className="hover:text-gray-300">
            Services
          </a>
          <a href="#" className="hover:text-gray-300">
            Contact
          </a>
        </div>

        <div className="flex items-center border-1 ">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border border-[#18a0fb] rounded-md "
          />
          <button className="text-white"></button>
        </div>

        <div className="md:hidden">
          <button id="mobile-menu-button" className="text-white">
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
