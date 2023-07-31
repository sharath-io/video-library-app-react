import { createContext, useReducer } from "react";
import {categories as categoriesData} from '../data/categories';
import {videos as videosData} from '../data/videos';
export const DataContext = createContext();

const reducerFunction =(state,action) =>{
    switch(action.type){
        case 'ADD_TO_WATCHLATER' : return {...state,watchlater:[...state.watchlater,state.videos.find(video => video._id === action.payload)]}
        case 'REMOVE_FROM_WATCHLATER': return {...state,watchlater:state.watchlater.filter(video => video._id!==action.payload)}
        default: return state;
    }
}

export function DataProvider({children}){
    const [state, dispatch] = useReducer(reducerFunction, {
        categories: categoriesData,
        videos: videosData,
        watchlater:[],
    })
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}