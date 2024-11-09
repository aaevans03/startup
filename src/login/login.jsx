import React from 'react';
import { Authenticated } from './authenticated';
import { Unauthenticated } from './unauthenticated';
import { AuthState } from './authstate';

// task: split up authentication components into authenticated.jsx and unauthenticated.jsx

export function Login({ userEmail, userName, userBuildingNumber, userRoomNumber, authState, onAuthChange }) {
    return (
        <main>

            {/* if authState is authenticated, then show the authenticated page */}

            {authState === AuthState.Authenticated && (
                // pass in the user data, and pass in the logout function that resets the user data and sets the authState to unauthenticated
                <Authenticated
                    userEmail={userEmail}
                    userName={userName}
                    userBuildingNumber={userBuildingNumber}
                    userRoomNumber={userRoomNumber}
                    onLogout={() => onAuthChange(userEmail, userName, userBuildingNumber, userRoomNumber, AuthState.Unauthenticated)}
                />
            )}


            {/* if authState is not authenticated, then show the login screen */}
            
            {authState === AuthState.Unauthenticated && (
                // pass in the userEmail, pass in the login function that sets login userEmail and sets the authState to authenticated
                <Unauthenticated
                    userEmail={userEmail}
                    userName={userName}
                    userBuildingNumber={userBuildingNumber}
                    userRoomNumber={userRoomNumber}
                    onLogin={(userEmail, userName, userBuildingNumber, userRoomNumber) => {
                        onAuthChange(userEmail, userName, userBuildingNumber, userRoomNumber, AuthState.Authenticated);
                    }}
                />
            )}

                
        </main>
    );
}