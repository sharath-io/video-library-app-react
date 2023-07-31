import {NavLink} from 'react-router-dom';
import { MdHome } from "react-icons/md";
import { MdExplore } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { MdWatchLater } from "react-icons/md";

import './navbar.css';
export function Navbar(){
    return (
        <nav className='navbar'>
          <NavLink to='/' className='nav-link'><MdHome/>Home</NavLink>
          <NavLink to='/explore' className='nav-link'><MdExplore />Explore</NavLink>
          <NavLink to='/playlist' className='nav-link'><MdPlaylistAdd/>Playlists</NavLink>
          <NavLink to='/watchlater' className='nav-link'><MdWatchLater/>Watchlater</NavLink>
      </nav>
    )
}