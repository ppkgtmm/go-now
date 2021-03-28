import React from "react";
import "./style/index.css";
import SideBar from "./layouts/desktop/SideBar";
import RandomContent from "./RandomContent";
import { useSelector } from "react-redux";
import UpNavMobile from "./layouts/mobile/UpNavMobile";
import { connect } from "react-redux";
import UpNavDesktop from "./layouts/desktop/UpNavDesktop";

const selectPlaces = (state) => state.places;
const selectRandom = (state) => state.randomize;
const selectToggleState = (state) => state.toggle;

const mapStateToProps = (state) => {
  return {
    randomize: state.randomize,
    toggle: state.toggle
  };
};
const Randomize = (props) => {
  const places = useSelector(selectPlaces);
  const randomNumber = useSelector(selectRandom);
  const toggleState = useSelector(selectToggleState)
  const renderSideBar = () => {
    return toggleState ? <SideBar /> : null
  }
  return (
    <div className="randomize relative  h-auto">
      <UpNavMobile upper={places.length} toggle={toggleState}/>
      <UpNavDesktop upper={places.length} />
      {renderSideBar()}
      <RandomContent
        name={places[randomNumber].name}
        content={places[randomNumber].content}
        url={places[randomNumber].url}
      />
    </div>
  );
};
connect(mapStateToProps)(Randomize);

export default Randomize;
