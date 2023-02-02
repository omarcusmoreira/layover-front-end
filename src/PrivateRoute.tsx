import { useAuthState } from 'react-firebase-hooks/auth'
import { Route, redirect, Outlet } from 'react-router-dom'
import { Login } from './pages/Login';
import { auth } from './services/firebase' 

export function PrivateRoute() {
    
    const [ user ] = useAuthState(auth);

    if (user){
        return <Outlet />
    }
        return <Login />
}
