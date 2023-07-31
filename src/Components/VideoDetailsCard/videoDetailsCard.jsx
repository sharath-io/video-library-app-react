import { MdPlaylistAdd } from "react-icons/md";
import { MdEditNote } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { MdModeEdit } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";

import './videoDetailsCard.css';
import {isVideoInWatchlater} from '../../utils/isVideoInWatchlater';
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/dataContext";
import { Notes } from '../Notes/notes';

export function VideoDetailsCard({video}){
    const {_id,title,src} = video;
    const {state, dispatch} = useContext(DataContext);
    const [noteModal, toggleNoteModal] = useState(false);
    console.log(state.notes)
    return (
        <div>
            <iframe width="700" height="500" src={src} frameborder="0" allowfullscreen title={title}></iframe>
            <div className='detailsCard-info'>
                <div className='info-heading'>
                  <img className='avatar' src='https://fastly.picsum.photos/id/1029/40/40.jpg?hmac=LQoekcXS-l0jeIeZavLuiimI486jd_6kz7bzxQK_snk' alt={title}/>
                  <h3 className='title-info'>{title}</h3>
                </div>

                <div className="details-icon">
                  {
                    isVideoInWatchlater(state.watchlater,_id)
                      ? <MdWatchLater className="icon cursr" onClick={()=> 
                        dispatch({type:'REMOVE_FROM_WATCHLATER', payload:_id})}/>
                      : <MdOutlineWatchLater className="icon cursr"   onClick={()=> 
                        dispatch({type:'ADD_TO_WATCHLATER', payload:_id})}/>
                  }
                  <MdPlaylistAdd className='icon cursr'/>
                  <MdEditNote  className='icon cursr' onClick={() => toggleNoteModal(true)}/>

                </div>
              </div>
              <hr/>
               <h1>My Notes</h1>
                <Notes noteVideoId={_id} shown={noteModal} close={() => toggleNoteModal(false)}/>
                <ul className='note-container'>
                  {
                    state.notes.map(note => <li key={note.noteId} className='each-note'>
                      <p>{note.noteDescription}</p>
                      <div>
                        <MdModeEdit className='icon cursr'/>
                        <MdDelete className='icon cursr' onClick={()=> dispatch({type:'DELETE_NOTE', payload:note.noteId})}/>
                      </div>
                    </li>)
                  }
                </ul>
        </div>
    )
}