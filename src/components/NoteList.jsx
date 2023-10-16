import PropTypes from 'prop-types';

import NoteItem from "./NoteItem";

const NoteList = ({ notes, onDelete, onMove }) => {
    if (notes.length === 0) {
        return <p className="notes-list__empty-message">Tidak Ada Catatan</p>;
    }
    return (
        <div className="notes-list">
            {notes.map(item => (
                <NoteItem key={item.id} note={item} onDelete={onDelete} onMove={onMove} />
            ))}
        </div>
    );
}

NoteList.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onMove: PropTypes.func.isRequired,
}

export default NoteList;