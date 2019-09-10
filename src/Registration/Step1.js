import React, { useState } from 'react'
import ImageUploader from 'react-images-upload'

const Step1 = props => {
    
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
    const [photo, setPhoto] = useState([])
    
    const db = props.db

    const dataObj = {
        _id : 'Step1',
        name : name,
        desc: description,
        photo : photo
    }


    // Funtional Components 
    const NextBtn = props.next
    const BackBtn = props.back

    
    //Form Handlers
    const handleSubmit = async ( e ) => {
        try {
            const resp = await db.put(dataObj)
            console.log(resp)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <>
            <image src={photo} />
            <form onSubmit={handleSubmit}>
                <input 
                    className="form_input"
                    id = {name}
                    type= 'text'
                    value= { name || ''}
                    placeholder= "Name"
                    onChange = { e => {
                        e.preventDefault()
                        setName(e.target.value) 
                    }}
                    
                />
                <textarea
                    className = "form_area"
                    id = {description}
                    type= "textarea"
                    value= {description || ''}
                    placeholder= "Description"
                    onChange = { e => {
                        e.preventDefault()
                        setDescription(e.target.value) 
                    }}
                >
                    Description
                </textarea> 
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
                <NextBtn type = 'submit' value = 'submit' />
            </form>
        </>
    )
}

export default Step1