import SessionItem from "./SessionItem";
function SessionsList({ data, onUpdate, onDelete }) {
  return (
    <div className="card">
      <h2 className="list-section-title">Upcoming & Completed</h2>
      <div className="sessions-list">
        {data.map((session) => (
          <SessionItem
            sessionObj={session}
            key={session.id}
            onDelete={onDelete}
            onUpdate={onUpdate}
          ></SessionItem>
        ))}
      </div>
    </div>
  );
}

export default SessionsList;
