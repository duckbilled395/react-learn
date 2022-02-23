import React from 'react';
import './App.css';
import Dialogs, { Message } from './components/Dialogs/Dialogs';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/profile' component={Profile}/>
            <Route path='/dialogs' component={Dialogs}>
              <Route path=':id' component={Message}/>
            </Route>
            <Route path='/news' component={News}/>
            <Route path='/music' component={Music}/>
            <Route path='/settings' component={Settings}/>
          </Switch>
        </div>
      </div>
    </BrowserRouter>

  );
}

export default App;
