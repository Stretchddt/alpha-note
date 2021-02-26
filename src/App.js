import 'bootstrap/dist/css/bootstrap.min.css';
import Notes from './components/notes/Notes';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Navigation } from './components/Navigation';
import { Home } from './components/Home';
import { NoteDetail } from './components/notes/NoteDetail';
import { UpdateNote } from './components/notes/UpdateNote';
import { CreateNote } from './components/notes/CreateNote';

function App() {
  return (
    <BrowserRouter>
      <Navigation/>
      <br/>
      <Switch>
        <Route path='/create' >
          <CreateNote/>
        </Route>
        <Route path='/update/:id'>
          <UpdateNote/>
        </Route>
        <Route path='/note/:id' >
          <NoteDetail/>
        </Route>
        <Route path='/notes' >
          <Notes/>
        </Route>
        <Route path='/' >
          <Home/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
