// this is a class that stores the authentication state.

export class AuthState {
    
    // each of the authentication states
    static Unknown = new AuthState('unknown');
    static Authenticated = new AuthState('authenticated');
    static Unauthenticated = new AuthState('unauthenticated');

    constructor(name) {
        this.name = name;
    }
}  