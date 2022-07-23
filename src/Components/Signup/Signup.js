import React,{useContext,useState} from 'react'
import Logos from '../logo.jpg'
import Logo from '../netflix.png'
import { FirebaseContext } from '../../Store/Context';
import { useNavigate} from "react-router-dom";

import './Signup.css'

function Login() {
  const [email,setEmail] = useState('');
  const [username,setUsername] = useState('');
  const [phone,setPhone] = useState('');
  const [password,setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext)
  const navigate = useNavigate();

  const handleSignup=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email,password).then((result)=>{
     
        result.user.updateProfile({displayName:username}).then(()=>{
          firebase.firestore().collection('user').add({
          id:result.user.uid,
          username:username,
          phone:phone,
         
        }).then(()=>{
           
          navigate('/login')
        }).catch((error)=>{
            alert(error.message)
          })
        })
      })
  
    }
   
  

  return (
    < div className='main'>   
   
    <div className='boxx'>

      <h2 className='heading'>Sign In</h2>
      <form onSubmit={handleSignup}>
        <div className='logbox'>
        <input className='input' type="text" 
            value={username} 
            onChange={(e)=>setUsername(e.target.value)}
            id="fname"
            name="username"
          placeholder='Name..'>
        </input>

        
      <input className='input'
       
        onChange={(e)=>setEmail(e.target.value)} 
        placeholder='Email or Phone Number'></input>

        <input className='input' 
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder='Password'></input>
        <input className='input' type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            placeholder='Phone Number..'>
         </input>
        
        <button className='Butn'>Submit</button>
        <div className='footertxt'>
        <h6 className='text'>Remember Me</h6>
        <h6 className='text'>Need Help?</h6>
        </div>
        <div className='description1'>        
        <h6 >Already have Account? <b className='now' onClick={()=>{navigate('/login')}}>Login now.</b><br></br>
          This page is protected by Google reCAPTCHA to ensure you're not a bot. Learn more.</h6>
          </div>

       </div> 
       </form>
      </div> 
     
   <img onClick={()=>{navigate('/')}} className="loggo" width="500px" height="200px" src={Logo} alt=""></img>

    <img  className="image" width="100%" height="100%" src={Logos} alt=""></img>
     
      
   </div>

  )
}

export default Login