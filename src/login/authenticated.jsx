import React from 'react';

import { useNavigate } from 'react-router-dom';

import './authenticated.css';

// props from parent function are passed through
export function Authenticated(props) {
    const navigate = useNavigate();

    function logout() {
        fetch(`/api/auth/logout`, {
            method: 'delete',
        })
            .catch(() => {
                // Logout failed. Assuming offline
            })
            .finally(() => {
                localStorage.removeItem('userEmail');
                localStorage.removeItem('userName');
                localStorage.removeItem('userBuildingNumber');
                localStorage.removeItem('userRoomNumber');
                props.onLogout();
            });
    }
    
    return (
        <div>

            <h2>Welcome, <b>{props.userName}</b></h2>
            
            {/* <p>{props.userEmail} {props.userBuildingNumber} {props.userRoomNumber}</p> */}

            <button className="btn btn-primary" variant='primary' onClick={() => navigate("laundry-room")}>
                Go to Laundry Room
            </button>

            <button className="btn btn-secondary" onClick={() => logout()}>
                Logout
            </button>

        </div>
    );
    }
