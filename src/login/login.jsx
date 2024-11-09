import React from 'react';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authstate';

// task: split up authentication components into authenticated.jsx and unauthenticated.jsx

export function Login({ userEmail, authState, onAuthChange }) {
    return (
        <main>

            {/* if authState is authenticated, then show the authenticated page */}

            {authState === AuthState.Authenticated && (
                // pass in the userEmail, and pass in the logout function that resets the userEmail and sets the authState to unauthenticated
                <Authenticated
                    userEmail={userEmail}
                    onLogout={() => onAuthChange(userEmail, AuthState.Unauthenticated)}
                />
            )}






            {/* if authState is not authenticated, then show the login screen */}
            
            {authState === AuthState.Unauthenticated && (
                // pass in the userEmail, pass in the login function that sets login userEmail and sets the authState to authenticated
                <Unauthenticated
                    userEmail={userEmail}
                    onLogin={(loginUserEmail) => {
                        onAuthChange(loginUserEmail, AuthState.Authenticated);
                    }}
                />
            )}

                
        </main>
    );
}