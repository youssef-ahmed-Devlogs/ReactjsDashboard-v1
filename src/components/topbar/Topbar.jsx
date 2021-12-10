import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";

function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Devlogs Admin</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContaienr">
            <NotificationsNone />
            <span className="topIconBag">2</span>
          </div>
          <div className="topbarIconContaienr">
            <Language />
          </div>
          <div className="topbarIconContaienr">
            <Settings />
          </div>
          <img
            src="https://i.picsum.photos/id/64/300/300.jpg?hmac=tIqPMmxrlIvlgHwBqR7lzPQyHO-KElXvhXwtKuyPse4"
            alt=""
            className="topAvatar"
          />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
