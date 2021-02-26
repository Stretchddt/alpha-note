import { Card, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';

export const CreateNote = () => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [body, setBody] = useState('')

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleBody = (e) => {
        setBody(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        fetch("http://localhost:8000/notes/", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ title, body })
        }).then(resp => resp.json()).then(history.push('/notes')).catch(err => console.log(err))
    }

    return (
        <Card>
            <Card.Header className='text-center text-primary display-4' ><u>Create Note</u></Card.Header>
            <Card.Body>
                <form action="" method="post" onSubmit={handleSubmit}>
                    <input type="text" placeholder='Enter your note title...'  className='form-control' value={title} onChange={handleTitle} />
                    <br/>
                    <textarea placeholder='Enter your note body...' cols="30" rows="10" className='form-control' value={body} onChange={handleBody} ></textarea>

                    <br/><br/>

                    <Button type='submit' className='mr-3' >Create</Button>
                    <Button className='mr-3' onClick={() => history.push('/notes')} >Back</Button>

                </form>
            </Card.Body>
        </Card>
    )
}
