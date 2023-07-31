import { DataContext } from '../../contexts/dataContext';
import './notes.css';
import { v4 as uuid } from "uuid";
import { useContext, useState } from 'react';

export function Notes({shown,close,noteVideoId}){

    const { dispatch} = useContext(DataContext);

    const [newNote, setNewNote] = useState({
        videoId: noteVideoId,
        noteInput:'',
        noteId:uuid()
    });
    
    return shown ? (
        <div className='modal-backdrop' onClick={()=>close()}>
            <div className='modal-content' onClick={(e) => e.stopPropagation()}>
                 <h1>Add a note</h1>
                 <input type='text' name='noteInput' 
                  onChange={(e)=> setNewNote({...newNote,noteInput:e.target.value})}/>
                  <button onClick={()=>{
                     dispatch({type:'ADD_NEW_NOTE', payload:[newNote.videoId,newNote.noteInput,uuid()]})
                     close()
                  }}>Add Note</button>
            </div>
        </div>
     ) : null;
}