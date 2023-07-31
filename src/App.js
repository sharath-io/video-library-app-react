import {Routes,Route} from 'react-router-dom';

import './App.css';
import {Navbar} from './Components/index';
import {Home, Explore,Watchlater,VideoListing,Playlist,VideoDetails} from './Pages/index';

function App() {
  return (
    <div className="App">
      <div className='main-page'>
        
        <div>
           <Navbar/>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/explore' element={<Explore/>}/>
          <Route path='/videoListing/:categoryName' element={<VideoListing/>}/>
          <Route path='/watchlater' element={<Watchlater/>}/>
          <Route path='/playlist' element={<Playlist/>}/>
          <Route path='/videoDetails/:videoId' element={<VideoDetails/>}/>
        </Routes>

      </div>
      
    </div>
  );
}

export default App;
