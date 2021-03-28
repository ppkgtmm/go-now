import React from "react";
export default function UpNav(props) {
  const buttonClass =
    "text-white hover:bg-white hover:bg-opacity-10 rounded-xl";
  return (
    <ul className="relative flex md:hidden bg-black flex-col">
      <a className="text-white hover:bg-white hover:bg-opacity-10">2</a>
      <a className="text-white hover:bg-white hover:bg-opacity-10">2</a>
      <a className="text-white hover:bg-white hover:bg-opacity-10">2</a>
    </ul>
  );
}
