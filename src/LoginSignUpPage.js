import './LoginSignUpPage.css';
import React, { useState } from 'react'
import amazonBlackIcon from '../src/image/amazon-black-icon.png'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link, useNavigate } from "react-router-dom"
import { emailValidation, passwordValidation} from './Components/UserContext';
import { auth } from './Components/firebase';


function LoginSignUpPage() {
  const history = useNavigate();
  const [action, setAction] = useState("Sign-in")
  
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [visible, setVisible] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState("")
  const [passwordErrorMessage, setpasswordEmailErrorMessage] = useState("")

  

  const signIn = (event) => {
    event.preventDefault();
    setEmailErrorMessage('')
    setpasswordEmailErrorMessage('')
    if(!emailValidation(Email)) 
    return setEmailErrorMessage("Please enter vaild email id");

    if(!passwordValidation(Password)) 
    return setpasswordEmailErrorMessage("Password should have min 8 characters with 1 Uppercase, 1 Number, 1 SpecialCharacters");

    // firebase Login....
    auth
    .signInWithEmailAndPassword(Email ,Password)
    .then(auth => {
      history('/')
    })
    .catch(error => alert(error.message))
  };

  const register = (event) => {
    event.preventDefault();
    setEmailErrorMessage('')

    if(!emailValidation(Email)) 
    return setEmailErrorMessage("Please enter vaild email id");

    if(!passwordValidation(Password)) 
    return setpasswordEmailErrorMessage("Password should have min 8 characters with 1 Uppercase, 1 Number, 1 SpecialCharacters");
  
    // firebase regester.....
    auth
    .createUserWithEmailAndPassword(Email, Password)
    .then((auth) => {
      if (auth) {
        history('/')
      }
    })
    .catch(error => alert(error.message))
    
  }




  return (
    <div className='login'>
      <Link to="/">
        <img className='login-logo' src={amazonBlackIcon} alt='AmazonLogo' /></Link>

      <div className='login-container'>
        <h1>{action}</h1>
        <form >

          <h5>E-mail </h5>
          <input className='emailInput' type='text' value={Email} onChange={(event) => setEmail(event.target.value)} />
          {action !== "Sign-in" ?
            <div>{emailErrorMessage.length > 0 && (
              <div style={{ marginBottom:"10px", marginTop:"-10px",fontSize:"small" , color:"red"}}>{emailErrorMessage}</div>
            )}</div> 
            :<div>{emailErrorMessage.length > 0 && (
              <div style={{ marginBottom:"10px", marginTop:"-10px",fontSize:"small" , color:"red"}}>{emailErrorMessage}</div>
            )}</div>}

          <h5>Password</h5>
          <input className="passInput" type={visible ? "text" : "password"} value={Password} onChange={(event) => setPassword(event.target.value)} />
          <div className='hideUnhideIcon' onClick={() => setVisible(!visible)} >
            {
              visible ? <VisibilityIcon /> : <VisibilityOffIcon />
            }
          </div>
          {action !== "Sign-in" ?
            <div>{passwordErrorMessage.length > 0 && (
              <div style={{  marginBottom:"10px", marginTop:"-10px",fontSize:"small" , color:"red"}}>{passwordErrorMessage}</div>
            )}</div> 
            :<div>{passwordErrorMessage.length > 0 && (
              <div style={{  marginBottom:"10px", marginTop:"-10px",fontSize:"small" , color:"red"}}>{passwordErrorMessage}</div>
            )}</div>}
           
          {action !== "Sign-in" ? <div></div> : <div>  <button type='sumbit' onClick={signIn}  className='login-signInButtom'> Sign In </button></div>}  


        </form>
        {action !== "Sign-in" ? <div>
          <p>To verify your number, we will send you a text message with a temporary code. Message and data rates may apply.
          </p> <button className='login-signInButtom' onClick={register}>Continue</button> 
          <p style={{textAlign:'center'}} >Have an account? 
          <span onClick={() => setAction("Sign-in")} style={{textDecoration:'underline', cursor:'pointer'}}>Login now.</span></p></div> 
          : <div>
          <p>By continuing, you Agree to Amazon's <span className='link'>Condition of Use</span> and <span className='link'>Privacy Notice.</span></p>
          <p>Forget password <span className='link'>Click Here!</span></p>
          <p className='hrpara'><span className='hrspan'>New to Amazon?</span></p>
          <button onClick={() => setAction("Create Account")} className='signUp-Button' >Create your Amazon account</button></div>}

      </div>
    </div>
  )
}

export default LoginSignUpPage;