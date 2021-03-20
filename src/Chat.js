import React, { useState,useEffect } from "react";
import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import SearchIcon from "@material-ui/icons/Search";
import "./Chat.css";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import MicIcon from "@material-ui/icons/Mic";
import {  useParams } from "react-router-dom";
import db from "./firebase";

function Chat(props) {
  // const { message } = props;
  const [input, setInput] = useState("");
  const [roomName, setRoomName] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    if(roomId){
      db.collection('rooms').doc(roomId).onSnapshot(
        (snapshot)=>{
          setRoomName(
            snapshot.data().name
          )
        }
      )
    }
    // return () => {
    // }
  }, [roomId])

  const sendMessage = async (e) => {
    e.preventDefault();
     
  };

  console.log(roomName);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          alt="Remy Sharp"
          src="https://www.classicroses.co.uk/media/catalog/product/cache/6e9e0330b981bee0eba0610998958c79/h/a/handel_bm_2016_18_1000px.jpg"
        />
        <div className="chat__info">
          <h2>{roomName}</h2>
          <p>some date or ...</p>
        </div>
        <div className="chat__headerRight">
          <IconButton>
            <SearchIcon />
          </IconButton>
          <IconButton>
            <AttachFileIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="chat__body">
            <p
              className={`chat__message && chat__reaciver `}
            >
              <span className="chat__name">name </span>
              asasas
              <span className="chat__timesamp ">4imeee </span>
            </p>
          );
      </div>
      <div className="chat__footer">
        <InsertEmoticonIcon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="type here ...."
          />
          <button tybe="sumit" onClick={sendMessage}>
            send message
          </button>
        </form>
        <MicIcon />
      </div>
    </div>
  );
}

export default Chat;
