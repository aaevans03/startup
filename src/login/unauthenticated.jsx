import React from 'react';

export function Unauthenticated(props) {

    
    const [userEmail, setUserEmail] = React.useState(props.userEmail);
    const [userName, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [userBuildingNumber, setUserBuildingNumber] = React.useState('');
    const [userRoomNumber, setUserRoomNumber] = React.useState('');
    const [displayError, setDisplayError] = React.useState(null);

    // change it from either the login fields or create account fields
    const [loginDisplay, setLoginDisplay] = React.useState("or, create account →");
    
    async function loginUser() {
        
        const response = await fetch(`/api/auth/login`, {
            method: 'post',
            body: JSON.stringify({ email: userEmail, password: password }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            const userData = await response.json();
            
            localStorage.setItem('userName', userData.name);
            localStorage.setItem('userBuildingNumber', userData.buildingNumber);
            localStorage.setItem('userRoomNumber', userData.roomNumber);
            props.onLogin(userEmail, userData.name, userData.buildingNumber, userData.roomNumber);
        } else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    async function createUser() {

        const response = await fetch(`/api/auth/create`, {
            method: 'post',
            body: JSON.stringify({ email: userEmail, password: password, name: userName, buildingNumber: userBuildingNumber, roomNumber: userRoomNumber }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        });
        if (response?.status === 200) {
            localStorage.setItem('userName', userName);
            localStorage.setItem('userEmail', userEmail);
            localStorage.setItem('userName', userName);
            localStorage.setItem('userBuildingNumber', userBuildingNumber);
            localStorage.setItem('userRoomNumber', userRoomNumber);

            props.onLogin(userEmail, userName, userBuildingNumber, userRoomNumber);
        }
        else {
            const body = await response.json();
            setDisplayError(`⚠ Error: ${body.msg}`);
        }
    }

    function changeLoginDisplay() {
        setLoginDisplay(loginDisplay === "or, create account →" ? "or, login →" : "or, create account →");
    }

    React.useEffect(() => {
        setDisplayError(null);
    }, [userEmail, userName, loginDisplay, password]);

    return (
        <>
            <div id="login">
                <h2>Welcome</h2>
                <br />

                {loginDisplay === "or, create account →" && (
                    <>
                        <h3>Login</h3>
                        <div id="login">
                            <div id="inputs">
                                <div><input type="email" className="form-control" value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder="Email"/></div>
                                <div><input type="password" className="form-control" onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/></div>
                            </div>
                            <div id="display-error">{displayError}</div>
                            <div><button className="btn btn-primary" type="submit" onClick={() => loginUser()} disabled={!userEmail || !password}>Login</button></div>
                        </div>
                    </>
                )}

                {loginDisplay === "or, login →" && (
                    <>
                        <h3>Create Account</h3>
                            <div id="create-acc">
                                    <div id="inputs">
                                    <div>
                                        <input
                                            type="email"
                                            className="form-control"
                                            value={userEmail}
                                            onChange={(e) => setUserEmail(e.target.value)}
                                            placeholder="Email"/>
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            className="form-control"
                                            value={userName}
                                            onChange={(e) => setUserName(e.target.value)}
                                            placeholder="Name"/>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            className="form-control"
                                            min="2"
                                            max="16"
                                            value={userBuildingNumber}
                                            onChange={(e) => setUserBuildingNumber(e.target.value)}
                                            placeholder="Building Number (2-16)"/>
                                    </div>
                                    <div>
                                        <input
                                            type="number"
                                            className="form-control"
                                            min="1000"
                                            maxLength="4"
                                            value={userRoomNumber}
                                            onChange={(e) => setUserRoomNumber(e.target.value)}
                                            placeholder="Room Number"/>
                                    </div>   { /* <!-- To implement: select from a list of rooms --> */ }
                                    <div>
                                        <input
                                            type="password"
                                            className="form-control"
                                            onChange={(e) => setPassword(e.target.value)}
                                            placeholder="Create Password"/>
                                    </div>
                                </div>
                                <div id="display-error">{displayError}</div>

                                <div><button className="btn btn-primary" type="submit" onClick={() => createUser()} disabled={!userName || !userEmail || !userBuildingNumber || !userRoomNumber || !password || userBuildingNumber > 16 || userBuildingNumber < 2 || userRoomNumber < 1000}>Create Account</button></div>
                            </div>
                    </>
                )}

                <br />
                <p className="login-display" onClick={changeLoginDisplay}>{loginDisplay}</p>

            </div>
        </>
    )
}