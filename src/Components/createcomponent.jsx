import React, { useState } from "react";
import postServices from "../services/postServices";
export default function Createcomponent() {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [image, setImage] = useState('')
    const [message, setMessage] = useState('')

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append('title', title)
        formData.append('date', date)
        formData.append('image', image)

        const response = await postServices.create(formData)
        if (response.data.success == true) {
            setMessage('Post created successfully..!')
        } else {
            setMessage('Post failed')
        }
        setTimeout(() => {
            setMessage('')
        }, 5000)
        event.target.reset()
    }

    return (

        <>
            <h1>Hello......</h1>
            <form onSubmit={handleSubmit} >
                <input type='text' name='title' placeholder="Enter Post title" onChange={event => setTitle(event.target.value)} required /> <br /><br />

                <input type='date' name='date' onChange={event => setDate(event.target.value)} required />
                <br /><br />
                <input type='file' name='file' onChange={event => setImage(event.target.files[0])} required />
                <br /><br />

                <button>submit</button>
                <p>{message}</p>

            </form>
        </>
    )
}