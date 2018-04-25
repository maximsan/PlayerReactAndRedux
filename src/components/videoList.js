import React from "react";
import VideoListItem from "./videoListItem";

const VideoList = props => {
  const videoItems = props.videos.map((video) => {
    return (
        <VideoListItem key={video.etag} video={video} />
    );
  });

  return <ul className="col-xl-12 col-lg-10 col-md-8  list-group">{videoItems}</ul>;
};

export default VideoList;
