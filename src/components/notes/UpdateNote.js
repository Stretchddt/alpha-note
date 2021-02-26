import { Card, Button } from 'react-bootstrap';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';

export const UpdateNote = () => {

    const { id } = useParams()
    let history = useHistory()

    const [note, setNote] = useState()

    useEffect(() => {
        fetch(`http://localhost:8000/notes/${id}/`)
            .then(resp => resp.json())
            .then(data => setNote(data))
            .catch(err => console.log(err))
    }, [id])

    const handleChange = (e) => {
        setNote(prevState => ({
                        ...prevState,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch(`http://localhost:8000/notes/${id}/`, {
            method: 'PUT',
            headers: {
            'Content-type': 'application/json'
            },
            body: JSON.stringify(note)
        }).then(resp => resp.json()).then(history.push(`/note/${id}`)).catch(err => console.log(err))
    }

       return note ? (
         <Card>
           <Card.Header className="text-center text-primary display-4">
             <u>Note Update</u>
           </Card.Header>
           <Card.Body>
             <form action="" method="post" onSubmit={handleSubmit}>
               <input
                 type="text"
                 className="form-control"
                 name="title"
                 value={note.title}
                 onChange={handleChange}
               />
               <br />
               <textarea
                 cols="30"
                 rows="10"
                 className="form-control"
                 name="body"
                 value={note.body}
                 onChange={handleChange}
               ></textarea>

               <br />
               <br />

               <Button type='submit' className="mr-3">Update</Button>
               <Button type='button' className="mr-3" onClick={() => history.push(`/note/${id}`)} >Back</Button>
             </form>
           </Card.Body>
         </Card>
       ) : (
         <div>Fetching note..</div>
       );
         }
