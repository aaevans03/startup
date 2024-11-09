import React from 'react';
import { useNavigate } from 'react-router-dom';

import './authenticated.css';

// props from parent function are passed through
export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userEmail');
        props.onLogout();
    }

    return (
        <div>

            <h2>Welcome, <b><span className='playerName'>{props.userEmail}</span></b></h2>

            <button className="btn btn-primary" variant='primary' onClick={() => navigate("laundry-room")}>
                Go to Laundry Room
            </button>

            <button className="btn btn-secondary" onClick={() => logout()}>
                Logout
            </button>

        </div>
    );
    }
