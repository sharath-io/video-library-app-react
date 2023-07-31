import {Routes,Route,NavLink} from 'react-router-dom';

import './App.css';
import {Home, Explore,Watchlater,VideoListing,Playlist} from './Pages/index';

function App() {
  return (
    <div className="App">
      <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/explore'>Explore</NavLink>
      <NavLink to='/playlist'>Playlists</NavLink>
      <NavLink to='/watchlater'>Watchlater</NavLink>
      <NavLink to='/videoListing'>VideoListing</NavLink>
      </nav>
      
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/explore' element={<Explore/>}/>
        <Route path='/videoListing' element={<VideoListing/>}/>
        <Route path='/watchlater' element={<Watchlater/>}/>
        <Route path='/playlist' element={<Playlist/>}/>
      </Routes>
    </div>
  );
}

export default App;
