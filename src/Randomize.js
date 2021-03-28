import React, { useState } from "react";
import "./style/index.css";
import SideBar from "./SideBar";
import RandomContent from "./RandomContent";
import { Hamburger } from "./icons/Hanburger";
import { Close } from "./icons/Close";
import { useDispatch, useSelector } from "react-redux";
import UpNav from "./layouts/UpNav";
import { connect } from 'react-redux';

// class Randomize extends React.Component {
//   constructor(props) {
//     super(props);
//     let info = [];
//     this.props.seasons.map((season, i) => {
//       data[season].map((item, j) => {
//         info.push(item);
//       });
//     });
//     this.state = {
//       index:
//         Math.floor(Math.random() * Math.floor(info.length + 2)) % info.length,
//       data: info,
//       sideActive: false,
//     };
//     this.handleRandom = this.handleRandom.bind(this);
//   }
//   handleRandom = () => {
//     this.setState({
//       index:
//         Math.floor(Math.random() * Math.floor(this.state.data.length)) %
//         this.state.data.length,
//     });
//   };
//   open = () => {
//     this.setState({
//       sideActive: true,
//     });
//   };
//   close = () => {
//     this.setState({
//       sideActive: false,
//     });
//   };
//   render() {

//   }
// }

const selectPlaces = state => state.places
const selectSideState = state => state.toggle
const selectRandom = state => state.randomize

const mapStateToProps = (state) => {
  return {
    randomize: state.randomize
  }
}
const Randomize = (props) => {
  const dispatch = useDispatch()
  const places = useSelector(selectPlaces);
  const randomNumber = useSelector(selectRandom)
  const [sideActive, setActive] = useState(useSelector(selectSideState) || false)
  const handleOnRandomize = () => {
    dispatch({type: 'randomize', length: places.length })
  }
  return (
    <div className="randomize relative h-auto">
      <nav className="bg-black h-auto" id="tablet-desktop-menu">
        <div className="flex p-2.5 items-center justify-between">
          {!sideActive ? (
            <button onClick={() => setActive(true)}>
              <Hamburger />
            </button>
          ) : (
            <button onClick={() => setActive(false)}>
              <Close />
            </button>
          )}
          <button
            className="hidden md:block text-white border border-white rounded px-4 py-1 outline-none hover:bg-white hover:text-black"
            onClick={handleOnRandomize}
          >
            randomize
          </button>
        </div>
      </nav>
      {sideActive ? <SideBar /> : null}
      {sideActive ? <UpNav/> : null}
      <RandomContent
        name={places[randomNumber].name}
        content={places[randomNumber].content}
        url={places[randomNumber].url}
      />
    </div>
  );
};
connect(mapStateToProps)(Randomize)

export default Randomize;
