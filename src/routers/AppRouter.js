import { useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from '../components/Login/Login';
import Register from '../components/Login/Register';
import DashboardRouters from './DashboardRouters';
import { PrivateRouters } from './PrivateRouters';
import { PublicRouters } from './PublicRouters';
import { getAuth, onAuthStateChanged } from '@firebase/auth';

function AppRouter() {
  const [checking, setChecking] = useState(true)
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
            if (user?.uid) {
                setIsLoggedIn(true)
            }
            else {
                setIsLoggedIn(false)
            }
            setChecking(false)
        })
    }, [setIsLoggedIn, setChecking])

    if (checking) {
        return (
            <div>
                <div className="loading">
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    </div>
            </div>
        )
    }
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/login" element={
                        <PublicRouters isAutentica={isLoggedIn}>
                            <Login />
                         </PublicRouters>

                    } />

                    <Route path="/register" element={
                        <PublicRouters isAutentica={isLoggedIn}>
                            <Register />
                        </PublicRouters>

                    } />

                    <Route path="/*" element={
                        <PrivateRouters isAutentica={isLoggedIn}>
                            <DashboardRouters />
                        </PrivateRouters>
                    } />  
                </Routes>
            </BrowserRouter>

        </>



  );
}

export default AppRouter;
