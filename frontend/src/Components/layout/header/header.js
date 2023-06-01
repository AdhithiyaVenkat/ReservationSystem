import React, {useContext, useEffect} from "react";

const Header = () => {
  return (
    <>
      <div className="relative bg-white">
        <div
          className="pointer-events-none absolute inset-0 z-30 shadow"
          aria-hidden="true"
        ></div>
        <div className="relative z-20">
          <div className="mx-auto flex max-w-7xl items-center justify-between py-5 px-6 sm:py-4 md:justify-start md:space-x-10 lg:px-8">
            <div className="flex gap-5">
              <a href="/" className="flex">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
              </svg>
              </a>
              <span className="font-lobster">GRRR-EAT</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
