import React from "react";
import { auth, provider } from "./firebase";
import "./login.css";
import { actionType } from "./reducer";
import { useStateValue } from "./stateProvider";

export default function Login() {
  const [user, dispatch] = useStateValue();

  const Signin = () => {
    auth.signInWithPopup(provider).then((result) => {
      dispatch({
        type: actionType.SET_USER,
        user: result.user,
      });
    });
  };
  return (
    <div className="login">
      <div className="login_container">
        <img
          className="login_image"
          src="https://i.pinimg.com/originals/99/0b/7d/990b7d2c2904f8cd9bc884d3eed6d003.png"
          alt="whatapp "
        />
        <h1>sign to whatapp</h1>
        <button onClick={Signin} className="login_button" type="sumit">
          sign with google
        </button>
      </div>
    </div>
  );
}
