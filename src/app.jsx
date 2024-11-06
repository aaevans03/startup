import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

export default function App() {
    return (
        <div className="body">
            <header class="container-fluid">
                <nav class="navbar fixed-top navbar-dark">

                    <a class="navbar-brand" href="/index.html">
                        <h1>Laundry App</h1>
                    </a>
                    
                    <menu class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="laundry-room.html">Laundry Room</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="about.html">About</a>
                        </li>
                    </menu>
                </nav>
            </header>
            <main>
                App will display here
            </main>

            <footer class="bg-dark text-white-50">
                <div class="container-fluid">
                    Developed by <span class="developer-name">Alex Evans / 賴亞遜</span>
                    <span class="github-link">
                        <a class="text-reset" href="https://github.com/aaevans03/startup">GitHub</a>
                    </span>

                </div>
            </footer>
        </div>
    );
}