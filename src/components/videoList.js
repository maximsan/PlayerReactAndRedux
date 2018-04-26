import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = props => {
  const videoItems = props.videos.map(video => {
    return (
      <VideoListItem
        onVideoSelect={props.onVideoSelect}
        key={video.etag}
        video={video}
      />
    );
  });

  return (
    <ul className="col-4 mt-2 list-group">{videoItems}</ul>
  );
};

export default VideoList;
