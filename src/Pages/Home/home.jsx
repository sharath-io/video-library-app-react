import { useContext } from 'react';

import './home.css';
import { DataContext } from '../../contexts/dataContext';

export function Home(){
    const {state} = useContext(DataContext);
    return (
        <div>
            <h1>Home Page</h1>
            <ul className='categories-container'>
                {
                    state.categories.map(list => <li>
                        <img src={list.thumbnail} alt={list.category}/>
                        <p>{list.category}</p>
                    </li>)
                }
            </ul>
        </div>
    )
}