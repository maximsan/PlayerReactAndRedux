import React from "react";
import VideoList from "./videoList";

const VideoListItem = ({ video }) => {
  const imgURL = video.snippet.thumbnails.default.url;

  return (
    <li className="list-group-item">
      <div className="media">
       
          <img className="img-fluid rounded" src={imgURL} />
       
        <div className="media-body ml-4">
          <div className="mt-0">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
