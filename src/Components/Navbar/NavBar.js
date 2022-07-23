import React,{useContext} from 'react'
import "./NavBar.css";
import {useNavigate} from  'react-router-dom'
import {AuthContext,FirebaseContext} from '../../Store/Context'


function NavBar() {
  const navigate = useNavigate()
  const {user} = useContext(AuthContext)
  const {firebase} = useContext(FirebaseContext)

  return (
    <div className="navbar">
      <div>
          <img className="logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix logo" />
      </div>

      <div className="nav_right">UNLIMITED TV SHOWS & MOVIES
         {user ? <button onClick={()=>{firebase.auth().signOut(); navigate('/login')}} className="btn_join_now">Log Out</button> :
         <button onClick={()=>{navigate('/login')}} className="btn_join_now">SIGN IN</button>}
          <button onClick={()=>{navigate('/signup')}} className="btn_sign">JOIN NOW</button>   </div>
  
      </div>
  
  )
}

export default NavBar