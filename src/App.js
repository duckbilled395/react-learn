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

const App = (props) => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <SideBar state={props.state.messagesPage}/>

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile profilePage={props.state.profilePage} dispatch={props.dispatch}/>}/>
            <Route path='/dialogs' element={<Dialogs messagesPage={props.state.messagesPage} dispatch={props.dispatch}/>}/>
            <Route path='/dialogs/1' element={<Dialogs state={props.state.messagesPage}/>}/>
            <Route path='/dialogs/2' element={<Dialogs state={props.state.messagesPage}/>}/>
            <Route path='/dialogs/3' element={<Dialogs state={props.state.messagesPage}/>}/>
            <Route path='/dialogs/4' element={<Dialogs state={props.state.messagesPage}/>}/>
            <Route path='/dialogs/5' element={<Dialogs state={props.state.messagesPage}/>}/>
            <Route path='/dialogs/6' element={<Dialogs state={props.state.messagesPage}/>}/>
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
