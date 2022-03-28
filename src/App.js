import React from 'react';
import './App.css';
import HeaderContainer from './components/Header/HeaderContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {Route, Routes} from 'react-router-dom';
import SideBar from './components/SideBar/SideBar';
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";

class App extends React.Component {

    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader />
        }

        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <SideBar/>

                <div className="app-wrapper-content">
                    <Routes>
                        <Route path='/profile/*' element={<ProfileContainer/>}/>
                        <Route path='/dialogs/*' element={<DialogsContainer/>}/>
                        <Route path='/users/*' element={<UsersContainer/>}/>
                        <Route path='/login/*' element={<Login/>}/>
                        <Route path='/news' element={<News/>}/>
                        <Route path='/music' element={<Music/>}/>
                        <Route path='/settings' element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializeApp})(App);
