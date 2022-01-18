import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Form, Col, Button } from "react-bootstrap";
import './Userlogin.css'
import Loginpage from './loginpage'
import {useState} from 'react'
import ResetPassword from './ResetPassword';

const Userlogin =()=>{
    const [username, setUserName] =useState('')
    const [password, setPassword] =useState('')
    const [resetPassWordLoadForm, setResetPasswordLoadForm]=useState('login')

    const changeForm = (changedForm)=>{
        setResetPasswordLoadForm(changedForm);
        
    }


    const storeInputHandler =(event)=>{
        const {name, value}  = event.target;
         console.log(name, value)

         switch (name) {
             case 'username' :
                 setUserName (value)
                 break;
             case 'password' :
                 setPassword(value)
                 break;

                 default:
                 break;
         }
    }

    const formResetSubmitHandler =()=>{

    }
    return(
        <div className="contain bg-primary">  
           {resetPassWordLoadForm==="login" &&      
             <Loginpage 
                storeInputHandler={storeInputHandler}
                username={username}
                password ={password} 
                changeForm={changeForm}
                
            />}
             {resetPassWordLoadForm === 'reset' &&
               <ResetPassword 
               formResetSubmitHandler={formResetSubmitHandler}
                user={username}

                
            />}
                          
        </div>           
    )
   
}
export default Userlogin