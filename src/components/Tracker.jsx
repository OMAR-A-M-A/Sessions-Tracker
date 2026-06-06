function Tracker({ total, completed, percentage }) {
  return (
    <div className="card">
      <div className="progress-header">
        <p className="progress-text">
          Completed: <strong>{completed}</strong> / Total: 
          <strong> {total}</strong> Sessions
        </p>
        <span className="progress-badge">{percentage}%</span>
      </div>
      <div className="progress-bar-bg">
        <div
          className="progress-bar-fill"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  );
}

export default Tracker;
