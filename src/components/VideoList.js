import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos, onVideoSelect }) => {

    const renderedList = videos.map(video => {
        return <VideoItem video={video} onVideoSelect={onVideoSelect} key={ video.snippet.title }/>
    });

    return(
        <div className="ui relaxed divided list">
            {renderedList}
        </div>
    )
}


export default VideoList;


