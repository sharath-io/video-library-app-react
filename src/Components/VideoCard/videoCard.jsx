import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

import './videoCard.css';
import { DataContext } from '../../contexts/dataContext';
import {isVideoInWatchlater} from '../../utils/isVideoInWatchlater';

export function VideoCard({video}){
     const navigate = useNavigate();
    const {state, dispatch} = useContext(DataContext);
     const {_id,thumbnail,creator,title, views} = video;
     
       return (
         <div className='video-card cursr'  onClick={()=> navigate(`/videoDetails/${_id}`)}>
             <div className='video-thumbnail'>
              <img src={thumbnail} alt={title} className='video-thumbnail-img'/>
              {
                isVideoInWatchlater(state.watchlater,_id)
                 ? <MdWatchLater  className='watchlater-icon' onClick={(e)=> {
                    e.stopPropagation()
                    dispatch({type:'REMOVE_FROM_WATCHLATER', payload:_id})
                  }}/>
                 : <MdOutlineWatchLater  className='watchlater-icon' onClick={(e)=> {
                  e.stopPropagation()
                  dispatch({type:'ADD_TO_WATCHLATER', payload:_id})}
                 } />
              }
              
             </div>
             <div className='video-details'>
              <img className='avatar' src='https://fastly.picsum.photos/id/1029/40/40.jpg?hmac=LQoekcXS-l0jeIeZavLuiimI486jd_6kz7bzxQK_snk' alt={title}/>
              <div className='video-info'>
                <p>{title}</p>
                <p>{views} | {creator}</p>
              </div>
             </div>
         </div>
     )
}