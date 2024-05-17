import React from "react";

function Header() {
  return (
    <div className="header py-4 flex justify-between items-center bg-black w-full">
      <h1 className="text-3xl font-bold ml-[490px] text-white">Fitness Blog</h1>
      <nav className="mr-3">
        <ul className="flex">
          <li className="mr-4">
            <a href="/" className="text-white hover:text-gray-800">
              Home
            </a>
          </li>
          <li>
            <a href="/contact" className="text-white hover:text-gray-800">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
