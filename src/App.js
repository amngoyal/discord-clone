import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import './App.css';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import Sidebar from './components/Sidebar/Sidebar';

import { login, selectUser } from './features/userSlice';
import { auth } from './firebase';

function App() {

  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  useEffect(() => {

    auth.onAuthStateChanged(authUser => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      }
      else {

      }
    })

  }, [])

  return (
    <div className="app">
      { user ?
        <>
          <Sidebar />
          <Chat />
        </>
        : (
          <Login />
        )}
    </div>
  );
}

export default App;
