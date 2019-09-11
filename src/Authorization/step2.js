import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

const step2 = props => {

    const [photo, setPhoto] = useState([])

    // Funtional Components 
    const NextBtn = props.next
    const BackBtn = props.back

    return (
        <>
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

export default step2
