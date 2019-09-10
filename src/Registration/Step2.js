import React from 'react'

const Step2 = props => {
    
    // Funtional Components 
    const NextBtn = props.next
    const BackBtn = props.back 
    
    return (
        <div>
            <h3>Step2</h3>
            <BackBtn />
            <NextBtn />
        </div>
    )
}

export default Step2
