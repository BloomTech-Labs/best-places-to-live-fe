import React, { useState } from 'react'
import Navigation from '../Navigation'

import Step1 from './Step1'
import Step2 from './Step2'
import Step3 from './Step3'

const MultiStepForm = () => {

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

export default MultiStepForm
