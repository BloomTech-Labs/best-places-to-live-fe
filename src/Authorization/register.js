import React, {useState} from 'react';
import Navigation from '../Navigation'
// import axios from 'axios';
// import { Link } from "react-router-dom";

import Step1 from './step1'
import Step2 from './step2'
import Step3 from './step3'
import axios from 'axios';
import { Link } from "react-router-dom";
import {LoginImg, LoginContainer,LoginFormParent,LoginForm,RegisterBottomLinks, SignInButton} from "./styled";
import Icon from "../images/LMHiconcopy.png";


const Register = () => {

    const [step, setStep] = useState(0)

    //Shared Components
    const NextBtn = () => {
        return (
            <button onClick = {() =>  {
                step < 2 ? setStep(step + 1) : setStep(2)
            }}>
                Next
            </button>
        )
    }

    const BackBtn = () => {
        return(
            <button onClick = {() => {
                step > 0 ? setStep( step - 1 ) : setStep(0) 
            }} >
                Back
            </button>
        )
    }

    switch(step) {
        case 0: 
            return(
                <div className = "form">
                    <Navigation  />
                    <Step1
                        // db = {localDb}
                        className = 'step1'
                        back = {BackBtn}
                        next = {NextBtn}
                    />
                </div>
            )
        case 1:
            return(
                <div className = "form">
                    <Navigation />
                    <Step2 
                        // db = {localDb}
                        className = 'step2'
                        back = {BackBtn}
                        next = {NextBtn}
                    />
                </div>
            )
        case 2:
            return(
                <div className = "form">
                    <Navigation />
                    <Step3
                        // db = {localDb}
                        className = 'step3'
                        back = {BackBtn}
                        next = {NextBtn}
                    />
                </div>
            )
        default:
            return setStep(0)
    }
}
//   return (
//       <>
//         <LoginImg />

//         <LoginContainer>

//           <LoginFormParent>
//             <Link to="/">
//               <img src={Icon}/>
//             </Link>

//             <h1>Sign Up</h1>

//             <LoginForm className='' onSubmit={handleSubmit}>

//                    <input
//                        id="name"
//                        name="name"
//                        label="name"
//                        type="text"
//                        placeholder="name"
//                        value={input.name}
//                        onChange={handleChange}
//                    />

//                    <input
//                        id="email"
//                        name="email"
//                        label="Email"
//                        type="email"
//                        placeholder="email"
//                        value={input.email}
//                        onChange={handleChange}
//                    />

//                    <input
//                        id="password"
//                        name="password"
//                        label="Password"
//                        type="password"
//                        placeholder="password"
//                        value={input.password}
//                        onChange={handleChange}
//                    />

//                    <input
//                        id="password2"
//                        name="password2"
//                        label="Confirm password"
//                        type="password"
//                        placeholder="confirm password"
//                        value={input.password2}
//                        onChange={handleChange}
//                    />

//                    <SignInButton>
//                      Register
//                    </SignInButton>
//             </LoginForm>
//           </LoginFormParent>
//           <RegisterBottomLinks>
//           <Link to="/login">
//             {"Already have an account? Login In"}
//           </Link>
//           </RegisterBottomLinks>
//         </LoginContainer>
//       </>
//   )
// }

// export default Register