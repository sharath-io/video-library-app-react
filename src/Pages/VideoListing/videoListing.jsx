import { useContext } from 'react';
import { useParams } from 'react-router-dom';

import './videoListing.css';
import { DataContext } from '../../contexts/dataContext';
import { VideoCard } from '../../Components';

export function VideoListing(){
    const {categoryName} = useParams();
    const {state} = useContext(DataContext);
     const selectedCategoryVideos = state?.videos?.filter(video=> video.category===categoryName);
    return (
          <div>
            <h1>{categoryName}</h1>
          
            <ul className='video-container'>
                {
                    selectedCategoryVideos.map(video => <li key={video._id}>  
                        <VideoCard video={video}/>
                    </li>)
                }
            </ul>
         </div>
    )
}