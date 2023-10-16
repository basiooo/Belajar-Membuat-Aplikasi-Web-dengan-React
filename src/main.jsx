import './styles/style.css';

import { createRoot } from 'react-dom/client';

import NotesApp from './components/NoteApp';

const root = createRoot(document.getElementById('root'));
root.render(<NotesApp/>);