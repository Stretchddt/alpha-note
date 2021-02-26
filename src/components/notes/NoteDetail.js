import { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router-dom';

export const NoteDetail = () => {

    const { id } = useParams()
    let history = useHistory()

    const [note, setNote] = useState([])

    useEffect(() => {
        fetch(`http://localhost:8000/notes/${id}/`)
            .then(resp => resp.json())
            .then(data => setNote(data))
            .catch(err => console.log(err))
    }, [id])

    const handleDelete = () => {
        fetch(`http://localhost:8000/notes/${id}/`, {
            method: 'DELETE',
        })
            .then(history.push('/notes'))
            .catch(err => console.log(err))
    }

    return (
      <Card border="primary">
        <Card.Header className="text-primary text-center display-4">
          <u>Note Details</u>
        </Card.Header>
        <Card.Body>
          <Card.Title>
            <h1><u>{ note.title }</u></h1>
          </Card.Title>
          <Card.Text>
            <p>{note.body}</p>
            <br />
            <br />
            <Button className="mr-3" onClick={() => history.push(`/update/${id}`)}>Edit</Button>
            <Button className="mr-3" onClick={() => history.push('/notes')}>Back</Button>
            <Button variant="danger" className="mr-3" onClick={handleDelete} >
              Delete
            </Button>
          </Card.Text>
          <Card.Footer>
            <h4>This note was created on - {note.created_at}</h4>
            <br />
            <h4>This note was last updated at - {note.updated_at}</h4>
          </Card.Footer>
        </Card.Body>
      </Card>
    );
}
