import React from "react";

export function Unauthorized() {
    return (
        <main>
            <div>
                <h2>You are unauthorized to view this page.</h2>
                <p>In order to continue, please log in.</p>
            </div>
        </main>
    );
}