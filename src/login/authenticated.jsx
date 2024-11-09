import React from 'react';
import { useNavigate } from 'react-router-dom';

// import Button from 'react-bootstrap/Button';

// import './authenticated.css';

// props from parent function are passed through
export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        localStorage.removeItem('userEmail');
        props.onLogout();
    }

    return (
        <div>

            <div>Welcome, <span className='playerName'>{props.userEmail}</span></div>

            <button className="btn btn-primary" variant='primary' action="laundry-room">
                Go to Laundry Room
            </button>

            <button className="btn btn-secondary" onClick={() => logout()}>
                Logout
            </button>

        </div>
    );
    }
