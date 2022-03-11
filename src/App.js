import React from 'react';
import './App.css';
import Dialogs from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";

const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <SideBar />

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile />}/>
            <Route path='/dialogs/*' element={<DialogsContainer />}/>
            <Route path='/users/*' element={<UsersContainer />}/>
            <Route path='/news' element={<News />}/>
            <Route path='/music' element={<Music />}/>
            <Route path='/settings' element={<Settings />}/>
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
