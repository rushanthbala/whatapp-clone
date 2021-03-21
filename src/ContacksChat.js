import React, { useEffect, useState } from "react";
import { Avatar } from "@material-ui/core";
import "./ContacksChat.css";
import { Link } from "react-router-dom";
import db from "./firebase";
function ContacksChat(props) {
  const { name, id } = props;
  const [message, setMessage] = useState([]);

  useEffect(() => {
    if (id){
      db.collection("rooms")
      .doc(id)
      .collection("messages")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setMessage(snapshot.docs.map((doc) => doc.data()))
      );
    }
  }, []);
  return (
    <Link to={`/rooms/${id}`}>
      <div className="ContacksChat">
        <Avatar
          alt="Remy Sharp"
          src="https://www.classicroses.co.uk/media/catalog/product/cache/6e9e0330b981bee0eba0610998958c79/h/a/handel_bm_2016_18_1000px.jpg"
        />
        <div className="ContacksChat__info">
          <h2>{name}</h2>
          <p>{message[0]?.message}</p>
        </div>
      </div>
    </Link>
  );
}

export default ContacksChat;
