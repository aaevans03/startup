import React from 'react';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authstate';

// task: split up authentication components into authenticated.jsx and unauthenticated.jsx

export function Login({ userName, authState, onAuthChange }) {
    return (
        <main>

            {/* if authState is authenticated, then show the authenticated page */}

            {authState === AuthState.Authenticated && (
                // pass in the userName, and pass in the logout function that resets the userName and sets the authState to unauthenticated
                <Authenticated
                    userName={userName}
                    onLogout={() => onAuthChange(userName, AuthState.Unauthenticated)}
                />
            )}






            {/* if authState is not authenticated, then show the login screen */}
            
            {authState === AuthState.Unauthenticated && (
                // pass in the userName, pass in the login function that sets login userName and sets the authState to authenticated
                <Unauthenticated
                    userName={userName}
                    onLogin={(loginUserName) => {
                        onAuthChange(loginUserName, AuthState.Authenticated);
                    }}
                />
            )}

                
        </main>
    );
}