// import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import './videoCard.css';
import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { DataContext } from '../../contexts/dataContext';
// import { MdPlaylistAdd } from "react-icons/md";
// import { MdEditNote } from "react-icons/md";
// import { MdDelete } from "react-icons/md";
// import { MdModeEdit } from "react-icons/md";

export function VideoCard({video}){
    //  const navigate = useNavigate();
    const {state, dispatch} = useContext(DataContext);
     const {_id,thumbnail,creator,title, views} = video;
     
     const isVideoInWatchLater = (videoId)=> state.watchlater.find(video => video._id === videoId) ? true: false
     return (
         <div className='video-card'>
             <div className='video-thumbnail'>
              <img src={thumbnail} alt={title} className='video-thumbnail-img'/>
              {
                isVideoInWatchLater(_id)
                 ? <MdWatchLater  className='watchlater-icon' onClick={()=> 
                    dispatch({type:'REMOVE_FROM_WATCHLATER', payload:_id})}/>
                 : <MdOutlineWatchLater  className='watchlater-icon' onClick={()=> 
                    dispatch({type:'ADD_TO_WATCHLATER', payload:_id})}/>
              }
              
             </div>
             <div className='video-details'>
              <img className='avatar'src='https://fastly.picsum.photos/id/1029/40/40.jpg?hmac=LQoekcXS-l0jeIeZavLuiimI486jd_6kz7bzxQK_snk' alt={title}/>
              <div className='video-info'>
                <p>{title}</p>
                <p>{views} | {creator}</p>
              </div>
             </div>
         </div>
     )
}