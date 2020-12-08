import React, {useState} from 'react'
import "./Login.css"
import{ Link, useHistory } from "react-router-dom";
import{ auth } from "./firebase.js";



function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

const signin = e =>{
    e.preventDefault()

    auth
    .signInWithEmailAndPassword(email, password)
    .then(auth =>{
        history.push('/')
    })
    .catch(error => alert(error.message))
}
const register = e =>{
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(email, password)
    .then((auth) =>{
        if(auth) {
            history.push('./')
        }


    })
.catch(error => alert(error.message))


}


    return (
        <div className="login">
            <Link to="/">
            <img className="login_logo " src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSy7mkEBKFBYU39BwXvygoy2TkjeTH1AKgaEA&usqp=CAU"/>
       </Link>



       <div className="login_container">
           <h1>Sign-in</h1>
<form> 
    <h2>E-Mail</h2>
  <input type="text" value={email} onChange={e =>setEmail(e.target.value)} placeholder="Enter your E-mail"/>
  <h3>Password</h3>
  <input type="password" value={password} onChange={e =>setPassword(e.target.value)} placeholder="password"/>

        <button type="submit" onClick={signin} className= "login_signinbutton">Sign In</button>
        
        
        </form>    
        <p>
            By signing-in you are agree with Ekart condition
            of use & sale .please see your privacy notice 
            , our cookies notice and our internet-based ads notice 

        </p>

        <button onClick={register} className="login_registerbutton"> Create Your Ekart Account</button>
   </div>
        </div>  
    )
}

export default Login ;
