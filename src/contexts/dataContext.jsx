import { createContext, useReducer } from "react";
import {categories as categoriesData} from '../data/categories';
import {videos as videosData} from '../data/videos';
export const DataContext = createContext();

export function DataProvider({children}){
    const [state, dispatch] = useReducer(()=>{}, {
        categories: categoriesData,
        videos: videosData
    })
    return (
        <DataContext.Provider value={{state, dispatch}}>
            {children}
        </DataContext.Provider>
    )
}