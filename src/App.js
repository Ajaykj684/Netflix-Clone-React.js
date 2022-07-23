import React,{useContext,useEffect} from 'react';

import { AuthContext, FirebaseContext } from './Store/Context'

import './app.css'
import Post from './Store/PostContext'
import Login from './Pages/Login';
import Home from './Pages/Home';
import Signup from './Pages/Signup';


import {BrowserRouter as Router,Routes , Route} from 'react-router-dom'
function App() {
  const {setUser}=useContext(AuthContext) 
  const {firebase}=useContext(FirebaseContext)
  useEffect(()=>{
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user)
      
    })
  })
  
  return (
    <div className="App">
<Post>
      <Router> 
        <Routes>
        <Route exact path='/' element={<Home />}>
       
      </Route>
        <Route path='/login' element={<Login />}>
      </Route>

        <Route path='/signup' element={<Signup />}>
      </Route>


    </Routes>
      </Router>
</Post>



    </div>
  );
}

export default App;
