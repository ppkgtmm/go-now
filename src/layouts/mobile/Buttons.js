import React from "react";
import { useDispatch } from "react-redux";
import Button from "../../button/Button";
import buttonsData from "../../data/buttons.json";

export default function Buttons(props) {
  const buttonClass =
    "text-white hover:bg-white hover:text-black px-4 py-2 text-center block text-md w-full";
  const dispatch = useDispatch();
  const updateRandomPlace = () => {
    dispatch({ type: "randomize", length: props.upper });
  };
  return (
    <ul className="relative flex md:hidden bg-black flex-col items-stretch w-full">
      {buttonsData.map((buttonData, index) => (
        <li key={index} className="block w-full">
          <Button buttonClass={buttonClass} link={buttonData.path}>
            {buttonData.text || buttonData.path}
          </Button>
        </li>
      ))}
      <li className="block">
        <button className={buttonClass} onClick={updateRandomPlace}>
          randomize
        </button>
      </li>
    </ul>
  );
}
