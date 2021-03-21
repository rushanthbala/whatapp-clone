import React, { useEffect, useState } from "react";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import "./slidebar.css";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Avatar, IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ContacksChat from "./ContacksChat";
import db from "./firebase";
import { useStateValue } from "./stateProvider";

function Slidebar() {
  const [rooms, setRooms] = useState([]);
  const [{ user }] = useStateValue();
  const newGroup = () => {
    const roomName = prompt("write a name");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    db.collection("rooms").onSnapshot((snapshot) => {
      setRooms(
        snapshot.docs.map((doc) => ({
          // doc.data() is never undefined for query doc snapshots
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar
          alt="Remy Sharp"
          src={user?.photoURL}
          // src="https://www.classicroses.co.uk/media/catalog/product/cache/6e9e0330b981bee0eba0610998958c79/h/a/handel_bm_2016_18_1000px.jpg"
        />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__searchbar">
        <div className="sidebar__searchContainer">
          <SearchIcon />
          <input placeholder="search somethink" type="text" />
        </div>
      </div>
      <div onClick={newGroup}>
        <h1>add new group</h1>
      </div>
      <div className="sidebar__contacks">
        {rooms.map((room, i) => {
          return (
            <ContacksChat
              key={i}
              name={room.data.name}
              // message={room.data.name}
              id={room.id}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Slidebar;
