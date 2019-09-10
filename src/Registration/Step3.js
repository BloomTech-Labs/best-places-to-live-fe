import React from 'react'

const Step3 = props => {
    
    // Funtional Components 
    const NextBtn = props.next
    const BackBtn = props.back 

    return (
        <div>
            <h3>Step3</h3>
            <BackBtn />
            <NextBtn />
        </div>
    )
}

export default Step3
