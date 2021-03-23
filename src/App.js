import React from 'react'
import './style/index.css';
import {BrowserRouter as Router,Route} from "react-router-dom";
import Season from "./Season";
import Randomize from "./Randomize";
function App(){
      const seasons = ["spring","summer","autumn","winter"];
      return (
     <div className="App">
       <Router basename='/'>
          <Route exact path="/">
              <Randomize seasons={seasons}/>
          </Route>
          <Route exact path="/spring">
            <Season season={seasons[0]}/>
          </Route>
          <Route exact path="/summer">
              <Season season={seasons[1]}/>
          </Route> 
          <Route exact path="/autumn">
              <Season season={seasons[2]} />
          </Route> 
          <Route exact path="/winter">
              <Season season={seasons[3]} />
          </Route>
      </Router>
    </div>
    )
}

export default App;