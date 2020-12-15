import { createContenxt } from 'react';

export const AuthContext = createContenxt({
    isLoggedIn: false, 
    login: () => {}, 
    logout: () => {}
})