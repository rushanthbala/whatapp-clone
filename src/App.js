import React, { useState } from "react";
import Chat from "./Chat";
import Slidebar from "./Slidebar";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./login";
function App() {
  const [user, setUser] = useState([""]);
  // const { roomId } = useParams();

  return (
    <div className="app">
      {user ? (
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
