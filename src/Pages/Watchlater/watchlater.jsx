import { useContext } from 'react';

import './watchlater.css';
import { DataContext } from '../../contexts/dataContext';
import { VideoCard } from '../../Components';

export function Watchlater(){
    const {state} = useContext(DataContext);
    return (
        <div>
            <h1>Watchlater Page</h1>
            <ul className='video-container'>
                {
                    state.watchlater?.map(list => <li key={list._id}>
                        <VideoCard video={list} />
                    </li>)
                }
            </ul>
        </div>
    )
}