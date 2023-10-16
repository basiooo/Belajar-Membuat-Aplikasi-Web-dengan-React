import PropTypes from "prop-types";
import { useState } from "react";
import Modal from "react-modal";

import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

const Content = ({ addNote, notes, onDelete, onMove }) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const archivedNotes = notes.filter((note) => note.archived === true);
    const activeNotes = notes.filter((note) => note.archived === false);

    Modal.setAppElement("#modal");
    return (
        <div className="note-app__body container">
            <button className="note-app__body__add-note-button" onClick={toggleModal}>Tambah Catatan Baru</button>
            <h2>Catatan Aktif</h2>
            <NoteList notes={activeNotes} onDelete={onDelete} onMove={onMove} />
            <h2>Catatan Arsip</h2>
            <NoteList notes={archivedNotes} onDelete={onDelete} onMove={onMove} />
            <Modal
                isOpen={isModalOpen}
                onRequestClose={toggleModal}
                contentLabel="Tambah Catatan"
                overlayClassName={"modal-overlay"}
                closeTimeoutMS={100}
                className={"modal-content"}
            >
                <NoteInput addNote={addNote} toggleModal={toggleModal} />
            </Modal>
        </div>
    );
};

Content.propTypes = {
    addNote: PropTypes.func.isRequired,
    notes: PropTypes.arrayOf(PropTypes.object).isRequired,
    onDelete: PropTypes.func.isRequired,
    onMove: PropTypes.func.isRequired,
};
export default Content;
