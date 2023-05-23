import React from "react";
import ReactPlayer from "react-player";
import "./style.scss";

const VideoPopup = ({ show, setShow, videoId, setVideoId }) => {
  const hidePopup = () => {
    setShow(false);
    setVideoId(null);
  };

  return (
    <div className={`video_popup ${show ? "visible" : ""}`}>
      <div className="opacity_layer" onClick={hidePopup}></div>
      <div className="video_player">
        <span className="close_btn" onClick={hidePopup}>
          Close
        </span>
        <ReactPlayer
          origin="true"
          allow="fullscreen"
          url={`https://www.youtube.com/watch?v=${videoId}`}
          controls
          width="100%"
          height="100%"
        />
      </div>
    </div>
  );
};

export default VideoPopup;
