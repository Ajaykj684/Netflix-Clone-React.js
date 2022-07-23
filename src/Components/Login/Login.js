import React,{useContext,useState} from 'react'
import Logos from '../logo.jpg'
import Logo from '../netflix.png'
import { FirebaseContext } from '../../Store/Context';
import { useNavigate} from "react-router-dom";

import './Login.css'

function Login() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();

  const handleLogin=(e)=>{
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })
  }

  return (
    < div className='main'>   
   
    <div className='box'>

      <h2 className='heading'>Sign In</h2>
      <form onSubmit={handleLogin}>
        <div className='logbox'>
        
      <input className='input'
       
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Email or Phone Number'></input>

        <input className='input' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'></input>
        
        <button className='Butn'>Submit</button>
        <div className='footertxt'>
        <h6 className='text'>Remember Me</h6>
        <h6 className='text'>Need Help?</h6>
        </div>
        <div className='description'>        
        <h5 >New to Netflix? <b className='now' onClick={()=>{navigate('/signup')}}>Sign up now.</b><br></br>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h5>
          </div>

       </div> 
       </form>
      </div> 
     
   <img onClick={()=>{navigate('/')}} className="loggo" width="500px" height="200px" src={Logo}></img>
 
    <img  className="image" width="100%" height="100%" src={Logos}></img>
     
      
   </div>

  )
}

export default Login