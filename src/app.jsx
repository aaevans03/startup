import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { Login } from "./login/login";
import { LaundryRoom } from "./laundry-room/laundry-room";
import { About } from "./about/about";
import { NotFound } from "./not-found/not-found";


export default function App() {
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
                                <NavLink className="nav-link active" to="">
                                    {/* Maybe get rid of this active link coloring? Or can I add a function to change it? */}
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="laundry-room">
                                    Laundry Room
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="about">
                                    About
                                </NavLink>
                            </li>
                        </menu>
                    </nav>
                </header>

                <Routes>
                    <Route path='/' element={<Login />} exact />
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