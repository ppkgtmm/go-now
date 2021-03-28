import React from "react";
import Button from "./button/Button";
const seasons = ["spring", "summer", "autumn", "winter"];
function Buttons() {
  return (
    <ul className="nav-list flex flex-col justify-evenly items-end w-28 ml-auto">
      {seasons.map((season) => (
        <li className="my-1 w-full">
          <Button link={season}>{season}</Button>
        </li>
      ))}
    </ul>
  );
}
export default Buttons;
