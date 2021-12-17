import { useContext } from 'react';
import { LoginContext } from '../Context';

export const useLogin = () => {
    const { userLoggedIn, setUserLoggedIn } = useContext(LoginContext)

    const loggedIn = (user) => {
        localStorage.setItem('userID', user);
        setUserLoggedIn(true)
    }

    const loggedOut = () => {
        localStorage.removeItem('userID');
        setUserLoggedIn(false);
    }

    const loginManagement = (user) => {
        console.log('im hereeeee', user)
        if (user) loggedIn(user);
        else loggedOut();
    }

    return { userLoggedIn, loginManagement };
}
