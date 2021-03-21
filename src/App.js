import React, { useState } from "react";
import Chat from "./Chat";
import Slidebar from "./Slidebar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import { useStateValue } from "./stateProvider";

function App() {
  const [ {user} , dispatch] = useStateValue()
  // const { roomId } = useParams();
console.log(user)
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <div className="app__body">
          <Router>
            {/* <Switch> */}
            <Route path="/">
              <Slidebar />
            </Route>
            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>

            {/* </Switch> */}
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
