import React from "react";
import Chat from "./Chat";
import Slidebar from "./Slidebar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
import { useStateValue } from "./stateProvider";

function App() {
  const [{ user }] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app__body">
          <Router>
            <Route path="/">
              <Slidebar />
            </Route>
            <Route exact path="/rooms/:roomId">
              <Chat />
            </Route>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
