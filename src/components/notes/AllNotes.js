import { Card, Button } from 'react-bootstrap';
import { Note } from './Note';
import { useHistory } from 'react-router-dom';

export const AllNotes = ({ notes }) => {

    let history = useHistory()

    return (
      <Card border="primary">
        <Card.Header className="text-primary text-center display-4">
          <u>Notes</u>
          <br/>
          <Button className='form-control' onClick={() => history.push('/create')} >Create Note</Button>
        </Card.Header>
        <Card.Body>
            {notes.map((note) => {
              return <Note note={note} />;
            })}
        </Card.Body>
      </Card>
    );
}
