import { useState } from "react";

function FromAddNew({ onAdd }) {
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [topic, setTopic] = useState("");
  const [instructor, setInstructor] = useState("");

  function handleSubmition(e) {
    e.preventDefault();
    if (!title || !date || !topic || !instructor) return;

    const newSession = {
      id: Date.now(),
      title: title,
      date: date,
      topic: topic,
      instructor: instructor,
      isDone: false,
    };
    onAdd(newSession);
    setTitle("");
    setDate("");
    setTopic("");
    setInstructor("");
  }
  return (
    <div className="card form-card">
      <h2 className="form-title">Add New Session</h2>
      <form className="form-body" onSubmit={handleSubmition}>
        <div className="form-group">
          <label>Session Title</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. React"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Session Date</label>
          <input
            type="date"
            className="form-control"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Session Topic</label>
          <input
            type="text"
            className="form-control"
            placeholder="e.g. Hooks"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Session instructor</label>
          <input
            type="text"
            className="form-control"
            placeholder="Jane Doe"
            value={instructor}
            onChange={(e) => setInstructor(e.target.value)}
          />
        </div>
        <button className="btn-add">Add Session</button>
      </form>
    </div>
  );
}

export default FromAddNew;
