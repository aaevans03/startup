import React from 'react';

export function Unauthenticated(props) {

    
    const [userEmail, setUserEmail] = React.useState(props.userEmail);
    const [userName, setUserName] = React.useState(props.userEmail);
    const [password, setPassword] = React.useState('');

    // figure out what this display error is
    // const [displayError, setDisplayError] = React.useState(null);

    

    // TO-DO: add separate login and create account screen.
    // change it from either the login fields or create account fields
    const [loginDisplay, setLoginDisplay] = React.useState("or, create account →");

    
    async function loginUser() {
        localStorage.setItem('userEmail', userEmail);
        props.onLogin(userEmail);
    }

    async function createUser() {
        localStorage.setItem('userEmail', userEmail);
        localStorage.setItem('userName', userName);
        props.onLogin(userEmail);
    }

    function changeLoginDisplay() {
        setLoginDisplay(loginDisplay === "or, create account →" ? "or, login →" : "or, create account →");
    }

    return (
        <>
            <div id="login">
                <h2>Welcome</h2>
                <br />

                {loginDisplay === "or, create account →" && (
                    <>
                        <h3>Login</h3>
                        <form id="login" method="get" action="laundry-room">
                            <div id="inputs">
                                <div><input type="email" className="form-control" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Email"/></div>
                                <div><input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/></div>
                            </div>
                            <div><button className="btn btn-primary" type="submit" onClick={() => loginUser()} disabled={!userEmail || !password}>Login</button></div>
                        </form>
                    </>
                )}

                {loginDisplay === "or, login →" && (
                    <>
                        <h3>Create Account</h3>
                            <form id="create-acc" method="get" action="laundry-room">
                                    <div id="inputs">
                                    <div><input type="text" className="form-control" value={userName} onChange={(e) => setUserName(e.target.value)} placeholder="Name"/></div>
                                    <div><input type="email" className="form-control" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Email"/></div>
                                    <div><input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Create Password"/></div>
                                    <div><input type="number" className="form-control" min="2" max="16" placeholder="Building Number (2-16)"/></div>
                                    <div><input type="number" className="form-control" min="1000" maxlength="4" placeholder="Room Number"/></div>   { /* <!-- To implement: select from a list of rooms --> */ }
                                </div>

                                <div><button className="btn btn-primary" type="submit" onClick={() => createUser()} disabled={!userEmail || !password}>Create Account</button></div>
                            </form>
                    </>
                )}

                <br />
                <p className="login-display" onClick={changeLoginDisplay}>{loginDisplay}</p>

                { /* <!-- In future: automatically default to logging in, and have login screen appear instead if they click a button --> */ }
                

            </div>
        </>
    )
}