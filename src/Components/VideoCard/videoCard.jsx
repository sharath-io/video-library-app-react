// import { useNavigate } from 'react-router-dom';
import './videoCard.css';

export function VideoCard({video}){
    //  const navigate = useNavigate();
     const {thumbnail,creator,title, views} = video;
     
     return (
         <div className='video-card'>
             <img src={thumbnail} alt={title}/>
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