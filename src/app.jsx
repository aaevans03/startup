import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { AuthState } from "./login/authstate";
import { LaundryRoom } from "./laundry-room/laundry-room";
import { About } from "./about/about";
import { NotFound } from "./not-found/not-found";


export default function App() {

    // store userName, authState in here, so that child functions can access. If there's no userName in local storage, then userName is an empty string.
    const [userName, setUserName] = React.useState(localStorage.getItem('userName') || '');

    // get the current auth state. If userName has a value then it's authenticated, otherwise it's unauthenticated.
    const currentAuthState = userName ? AuthState.Authenticated : AuthState.Unauthenticated;

    // authState is what stores if the user is logged in or not.
    const [authState, setAuthState] = React.useState(currentAuthState);

    return (
        <BrowserRouter>
            <div className="body">
                <header className="container-fluid">
                    <nav className="navbar fixed-top navbar-dark">

                        <NavLink className="navbar-brand" to="">
                            <h1>Laundry App</h1>
                        </NavLink>
                        
                        <menu className="navbar-nav">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="">
                                    Login
                                </NavLink>
                            </li>
                            {/* if you are authenticated, then allow you to see the laundry room page */}
                            {authState === AuthState.Authenticated && (
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="laundry-room">
                                        Laundry Room
                                    </NavLink>
                                </li>
                            )}
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                        
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route
                        path='/'
                        element={
                            <Login
                                // pass these things through to the Login function
                                userName={userName}
                                authState={authState}
                                // pass in a function that sets the authState and userName
                                onAuthChange={(userName, authState) => {
                                    setAuthState(authState);
                                    setUserName(userName);
                                }}    
                            />}
                        exact
                    />
                    <Route path='/laundry-room' element={<LaundryRoom />} />
                    <Route path='/about' element={<About />} />
                    <Route path='*' element={<NotFound />} />
                </Routes>

                <footer className="bg-dark text-white-50">
                    <div className="container-fluid">
                        Developed by <span className="developer-name">Alex Evans / 賴亞遜</span>
                        <span className="github-link">
                            <a className="text-reset" href="https://github.com/aaevans03/startup">GitHub</a>
                        </span>

                    </div>
                </footer>
            </div>
        </BrowserRouter>
    );
}