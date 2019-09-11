import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

const Step2 = props => {

    const [photo, setPhoto] = useState([])

    // Funtional Components 
    const NextBtn = props.next
    const BackBtn = props.back

    return (
        <>
            <h3>Upload Profile Photo</h3>
            <ImageUploader
                withIcon = {true}
                buttonText = 'Choose images'
                imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                onChange = { e => {
                    setPhoto( () => photo.concat(e))
                }}
            />
            <BackBtn />
            <NextBtn type ='submit' value = 'submit' />
        </>
    )
}

export default Step2
