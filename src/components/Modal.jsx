import React, { useState } from "react";
import StatusGood from "./StatusGood";
import MainInput from "./MainInput";
import Time from "./Time";

const Modal = ({ showModal, setShowModal, setTodoListContainer }) => {
  const [title, setTitle] = useState("");
  const [note, setNote] = useState("");

  function createNote(title, content, completed) {
    //note constructor
    this.title = title;
    this.content = content;
    this.completed = completed;
  }

  function addNote() {
    if (title !== "" && note !== "") {
      const newNote = new createNote(title, note, false);
      fetch("http://localhost:2000/todos", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((data) => {
          setTodoListContainer(data);
          console.log(data);
        });
    }
  }
  return (
    <div
      onClick={(e) => {
        if (!e.target.closest("#note-modal")) {
          setShowModal(false);
        }
      }}
      className={`fixed inset-0 bg-[#e8e8e9] z-40 ${
        showModal ? "block" : "hidden"
      }`}
    >
      <div
        id="note-modal"
        className={`fixed bg-[#fff] z-50 w-4/5 h-auto shadow-2xl rounded-2xl mx-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pt-15 px-3 pb-3 ${
          showModal ? "block" : "hidden"
        }`}
      >
        <StatusGood addNote={addNote} />
        <div>
          <MainInput
            type="text"
            name="title"
            id="note-title"
            placeholder="Title"
            className="focus:outline-0 w-full"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <Time />
          <div>
            <textarea
              name="text-"
              id="text-area"
              placeholder="Write notes"
              className="min-h-44 w-full focus:outline-0"
              value={note}
              onChange={(e) => setNote(e.target.value)}
            ></textarea>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
