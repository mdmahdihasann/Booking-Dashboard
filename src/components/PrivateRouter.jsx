import React from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { Outlet, Navigate } from 'react-router-dom';
import { auth } from './firebase/firebase';

const PrivateRouter = () => {
    const [user, loading] = useAuthState(auth);

    if(loading) return <div>loading....</div>
  return (
    <>
    {
        user ? <Outlet/> : <Navigate to="/login"/>
    }
    </>
  )
}

export default PrivateRouter