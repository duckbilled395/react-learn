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

const App = (props) => {
  // debugger;
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <SideBar state={props.state.sideBar}/>

        <div className="app-wrapper-content">
          <Routes>
            <Route path='/profile' element={<Profile store={props.store}/>}/>
            <Route path='/dialogs' element={<DialogsContainer />}/>
            {/*<Route path='/dialogs' element={<Dialogs store={props.store}/>}/>*/}
            <Route path='/dialogs/1' element={<DialogsContainer store={props.store}/>}/>
            <Route path='/dialogs/2' element={<DialogsContainer store={props.store}/>}/>
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
