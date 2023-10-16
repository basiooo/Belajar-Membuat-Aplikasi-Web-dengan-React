import PropTypes from 'prop-types';
import { useState } from "react";
import toast from 'react-hot-toast';
import { RxCross1 } from "react-icons/rx";

import { MAX_TITLE_LENGTH } from '../utils/const';

const NoteInput = ({ addNote, toggleModal }) => {
    const initialFormData = {
        title: '',
        body: '',
    };

    const [formData, setFormData] = useState(initialFormData);

    const onTitleChange = (event) => {
        const newTitle = event.target.value;
        if (newTitle.length <= MAX_TITLE_LENGTH) {
            setFormData({
                ...formData,
                title: newTitle,
                title_length: newTitle.length
            });
        } else {
            toast.error(`Maksimal panjang judul catatan adalah ${MAX_TITLE_LENGTH} karakter.`, {
                id: "title-oversize"
            });
        }
    }

    const onBodyChange = (event) => {
        const newBody = event.target.value;
        setFormData({
            ...formData,
            body: newBody
        });
    }


    const onSubmitForm = (event) => {
        event.preventDefault();
        const title = formData.title.trim()
        const body = formData.body.trim()
        if (!title) {
            toast.error('Judul Tidak Boleh Kosong!', {
                id: "title-empty"
            });
        } else if (!body) {
            toast.error('Catatan Tidak Boleh Kosong!', {
                id: "body-empty"
            });
        } else {
            const newData = {
                id: +new Date(),
                title: title,
                body: body,
                archived: false,
                createdAt: new Date(),
            }
            const result = addNote(newData);
            if (!result.error) {
                toast.success(result.message);
                setFormData(initialFormData)
                toggleModal();
            } else {
                toast(result.message);
            }
        }
    }

    NoteInput.propTypes = {
        addNote: PropTypes.func.isRequired,
        toggleModal: PropTypes.func.isRequired
    }
    return (
        <div className="note-input">
            <div className="note-input__header">
                <h2 className="note-input__title__note">Tambah Catatan</h2>
                <RxCross1 className="modal-close" onClick={() => toggleModal()} />
            </div>
            <form onSubmit={onSubmitForm}>
                <h4>Judul</h4>
                <input
                    className="note-input__title"
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={onTitleChange}
                    placeholder="Judul..."
                    required
                />
                <p className="note-input__title__char-limit">Batas: {formData.title.length}/{MAX_TITLE_LENGTH}</p>
                <h4>Catatan</h4>
                <textarea
                    className="note-input__body"
                    type="text"
                    name="body"
                    placeholder="Catatan..."
                    required
                    value={formData.body}
                    onChange={onBodyChange}
                ></textarea>
                <button type="submit" >Simpan</button>
            </form>
        </div>
    )

}

export default NoteInput;