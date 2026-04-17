import React from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-6 bg-gradient-to-br from-[#f5f7fa] to-[#8db49e]">

      {/* BIG 404 */}
      <h1 className="text-[80px] sm:text-[120px] font-extrabold text-[#244D3F] leading-none">
        404
      </h1>

      {/* TITLE */}
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mt-2">
        Page Not Found
      </h2>

      {/* DESCRIPTION */}
      <p className="text-gray-500 text-center max-w-md mt-3">
        Sorry, the page you are looking for doesn't exist or has been moved.
      </p>

      {/* BUTTON */}
      <Link
        to="/"
        className="mt-6 bg-[#244D3F] text-white px-6 py-3 rounded-full shadow-lg hover:bg-[#1e3a2f] transition"
      >
         Go Back Home
      </Link>

      {/* DECORATIVE CIRCLES */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-[#244D3F]/10 rounded-full blur-2xl"></div>
      <div className="absolute bottom-10 right-10 w-28 h-28 bg-[#244D3F]/20 rounded-full blur-3xl"></div>

    </div>
  );
};

export default NotFound;