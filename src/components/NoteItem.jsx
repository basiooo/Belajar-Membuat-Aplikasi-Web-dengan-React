import PropTypes from 'prop-types';

import { showFormattedDate } from "../utils/data";
const NoteItem = ({ note, onDelete, onMove }) => {
    const formattedDate = showFormattedDate(note.createdAt)
    return (
        <div className="note-item">
            <div className="note-item__content">
                <h3 className="note-item__title">{note.title}</h3>
                <p className="note-item__date">{formattedDate}</p>
                <p className="note-item__body">{note.body}</p>
            </div>
            <div className="note-item__action">
                <button className="note-item__archive-button" onClick={() => onMove(note.id)}>
                    {
                        note.archived ? "Aktifkan" : "Arsipkan"
                    }
                </button>
                <button className="note-item__delete-button" onClick={() => onDelete(note.id)}>Hapus</button>
            </div>
        </div>
    )
}

NoteItem.propTypes = {
    note: PropTypes.object.isRequired,
    onDelete: PropTypes.func.isRequired,
    onMove: PropTypes.func.isRequired,
}
export default NoteItem;