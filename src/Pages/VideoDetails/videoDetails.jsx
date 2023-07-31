import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import './videoDetails.css';
import { DataContext } from '../../contexts/dataContext';
import {  VideoDetailsCard } from '../../Components';

export function VideoDetails(){
    const {videoId} = useParams();
    const {state} = useContext(DataContext);
    const selectedVideo = state.videos.find(video => video._id === Number(videoId));

    return (
        <div>
            <VideoDetailsCard video={selectedVideo}/>
        </div>
    )
}