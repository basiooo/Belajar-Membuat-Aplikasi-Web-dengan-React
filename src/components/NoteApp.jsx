import { useEffect, useState } from "react";
import toast, { Toaster } from 'react-hot-toast';

import { getInitialData } from "../utils/data";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";

const NotesApp = () => {
    const initialData = getInitialData();
    const [notes, setNotes] = useState(initialData);
    const [data, setData] = useState(notes);
    const onDeleteHandler = (id) => {
        const result = window.confirm("Apakah Kamu Yakin Ingin Menghapus Catatan?");
        if (result) {
            const filtered = notes.filter((note) => note.id !== id);
            setNotes(filtered);
            toast.success("Catatan Berhasil Dihapus!");
        } else {
            toast.success("Hapus Catatan Dibatalkan!");
        }
    };
    useEffect(() => {
        setData(notes);
    }, [notes]);

    const addNoteHandler = (noteData) => {
        try {
            setNotes([noteData, ...notes]);
            return {
                error: false,
                message: "Berhasil Mebambahkan Catatan!",
            };
        } catch (error) {
            return {
                error: true,
                message: `Gagal Menambahkan Catatan!, ${error}`,
            };
        }
    };
    const onSearchHandler = (title) => {
        if (title.trim()) {
            const filtered = notes.filter((note) =>
                note.title.toLowerCase().includes(title.toLowerCase())
            );
            setData(filtered);
        } else {
            setData(notes);
        }
    };
    const onMoveHandler = (id) => {
        const targetIndex = notes.findIndex((note) => note.id === id);
        const isArchive = !notes[targetIndex].archived;
        notes[targetIndex].archived = isArchive;
        setNotes([...notes]);
        const alertMessage = !isArchive
            ? "Catatan dipindahkan ke aktif!"
            : "Catatan diarsipkan!";
        toast.success(alertMessage);
    };
    return (
        <>
            <Toaster
                position="top-right"
                reverseOrder={true} />
            <Header onSearch={onSearchHandler} />
            <Content
                addNote={addNoteHandler}
                notes={data}
                onDelete={onDeleteHandler}
                onMove={onMoveHandler}
            />
            <Footer />
        </>
    );
};

export default NotesApp;
