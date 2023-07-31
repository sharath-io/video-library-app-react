import { useContext } from 'react';

import './home.css';
import { DataContext } from '../../contexts/dataContext';
import { CategoryCard } from '../../Components';

export function Home(){
    const {state} = useContext(DataContext);
    return (
        <div>
            <h1>Home Page</h1>
            <ul className='categories-container'>
                {
                    state.categories.map(list => <li>
                        <CategoryCard list={list}/>
                    </li>)
                }
            </ul>
        </div>
    )
}