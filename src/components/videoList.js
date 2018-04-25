import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = props => {
  const videoItems = props.videos.map((index, video) => {
    return (
      <li key="index">
        <VideoListItem video={video} />
      </li>
    );
  });

  return <ul className="col-md-4 list-group">{videoItems}</ul>;
};

export default VideoList;
