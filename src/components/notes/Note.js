import { Link } from 'react-router-dom';

export const Note = ({ note }) => {
    return (
      <>
        <Link to={`/note/${note.id}`}>
          <h3 key={note.id} className='text-center' >{note.title}</h3>
        </Link>
      </>
    );
}
