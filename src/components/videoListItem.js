import React from "react";
import VideoList from "./videoList";

const VideoListItem = ({ video, onVideoSelect }) => {
  //   const video = props.video;
  //   const onVideoSelect = props.onVideoSelect;
  const imgURL = video.snippet.thumbnails.default.url;

  // this.handleOnClick = this.handleOnClick.bind(this);

  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item mb-2">
      <div className="video-list media">
        <div className="video-item">
          <img className="img-fluid rounded" src={imgURL} />
        </div>
        <div className="media-body ml-4">
          <div className="mt-0">{video.snippet.title}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;

{
  /* <li onClick={() => onVideoSelect(video)} className="list-group-item mb-2"> */
}
