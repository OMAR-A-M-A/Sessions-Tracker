import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

function SessionItem({ sessionObj, onDelete, onUpdate }) {
  return (
    <div className={`session-item${sessionObj.isDone ? " completed" : ""}`}>
      <div className="checkbox-container">
        <input
          type="checkbox"
          className="checkbox-custom"
          onChange={() => onUpdate(sessionObj, !sessionObj.isDone)}
          checked={sessionObj.isDone}
        />
      </div>
      <div className="session-info">
        <h3 className="session-name">{sessionObj.title}</h3>
        <p className="session-details">
          {sessionObj.date} . {sessionObj.topic} / {sessionObj.instructor}
        </p>
      </div>

      <button className="btn-delete" onClick={() => onDelete(sessionObj)}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
}

export default SessionItem;
