import { useContext, useState } from 'react';
import './explore.css';
import { VideoCard } from '../../Components';
import { DataContext } from '../../contexts/dataContext';

export function Explore(){
    const {state} = useContext(DataContext);
    const [searchInput, setSearchInput] = useState('');

    const displayVideos = searchInput.length >0
    ? state.videos.filter(({title}) => title.toLowerCase().includes(searchInput.toLowerCase()))
    : state.videos

    return (
        <div>
            <h1>Explore Page</h1>
            <input type='text' placeholder='search videos by title' className='search-input' onChange={(e)=> setSearchInput(e.target.value)}/>
            <ul className='video-container'>
                {
                    displayVideos?.map(list => <li key={list._id}>
                        <VideoCard video={list} />
                    </li>)
                }
            </ul>
        </div>
    )
}