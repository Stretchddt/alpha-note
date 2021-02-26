import { useState, useEffect } from 'react';
import { AllNotes } from './AllNotes';

export default function Notes() {

    const [notes, setNotes] = useState([])

    useEffect(() => {
        fetch("http://localhost:8000/notes/")
            .then(resp => resp.json())
            .then(data => setNotes(data))
            .catch(err => console.log(err))  
    }, [notes])

    return (
        <>
            <AllNotes notes={notes} />
        </>
    )
}
