import { useState } from "react";
import { Modal, Button } from 'react-bootstrap'
import postServices from "../services/postServices";

export default function Updatecomponent(props) {
    const [isShow, invokeModal] = useState(false);
    const handleOpenModal = () => {
        return invokeModal(!isShow)
    }

    const [title, setTitle] = useState(props.title);
    const [date, setDate] = useState(props.date);
    const [id, setId] = useState(props.id);
    const [image, setImage] = useState('');
    
    const handleSubmit =async(event)=>{
       event.preventDefault();

       const formData = new FormData()
       formData.append('id',id);
       formData.append('title',title);
       formData.append('date',date);
       if(image != '' && image.length != 0){
       formData.append('image',image);
       }
       const response = await postServices.update(formData);
       if(response.data.success == true){
          alert(response.data.msg);
       }else{
           alert(response.data.msg);
       }
       handleOpenModal()
    }

    return (
        <>
            <Button variant="success" onClick={handleOpenModal} >
                Edit
            </Button>
            <Modal show={isShow}  >
                <Modal.Header closeButton onClick={handleOpenModal} >
                    <Modal.Title>Update Post</Modal.Title>
                </Modal.Header>
                <form onSubmit={handleSubmit} >

                    <Modal.Body>
                        <input type='text' name='title' placeholder="Enter Title" value={title} onChange={event => setTitle(event.target.value)} required />
                        <br /><br />

                        <input type='date' name='date' value={date} onChange={event => setDate(event.target.value)} required />
                        <br /><br />

                        <input type='file' name='image'onChange={event => setImage(event.target.files[0])}/>
                        <br /><br />
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={handleOpenModal} >
                            Close
                        </Button>
                        <Button variant="dark" type='submit'>
                            Update
                        </Button>
                    </Modal.Footer>
                </form>
            </Modal>

        </>
    )

}