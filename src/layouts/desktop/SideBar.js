import React from "react";
import Buttons from "./Buttons";
export default function SideBar() {
  return (
    <div className="sidebar hidden md:block bg-black absolute top-44px md:w-72 left-0 h-screen z-40">
      <div className="bg-black">
        <div className="py-20 px-8">
          <h1 className="text-white text-4xl">Travel Now</h1>
          <h2 className="text-emerald-200 text-lg mt-4">
            simple blog help planning vacation
          </h2>
          <Buttons />
        </div>
      </div>
    </div>
  );
}
