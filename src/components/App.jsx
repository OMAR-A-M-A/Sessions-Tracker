import "./App.css";
import initialSessions from "../sessions";
import SessionsList from "./SessionsList";
import FromAddNew from "./FromAddNew";
import Tracker from "./Tracker";
import { useState } from "react";
function App() {
  const [sessionsData, setSessionData] = useState(initialSessions);
  const totalSession = sessionsData.length;
  const ComplatedSessions = sessionsData.filter(
    (session) => session.isDone,
  ).length;
  let percentage = 0;
  if (totalSession !== 0) {
    percentage = Math.round((ComplatedSessions / totalSession) * 100);
  }

  function handleUpdateStatus(sessionObj, status) {
    setSessionData((sessions) =>
      sessions.map((session) =>
        session.id === sessionObj.id ? { ...session, isDone: status } : session,
      ),
    );
  }

  function handleDeleteSession(sessionobj) {
    setSessionData((sessions) =>
      sessions.filter((session) => session.id !== sessionobj?.id),
    );
  }
  function handleAddNewSession(newSession) {
    setSessionData((sessions) => [...sessions, newSession]);
  }
  return (
    <div className="app-container">
      <h1 className="main-title">Bootcamp Session Tracker</h1>
      <Tracker
        total={totalSession}
        completed={ComplatedSessions}
        percentage={percentage}
      ></Tracker>
      <FromAddNew onAdd={handleAddNewSession}></FromAddNew>
      {totalSession > 0 && (
        <SessionsList
          data={sessionsData}
          onUpdate={handleUpdateStatus}
          onDelete={handleDeleteSession}
        ></SessionsList>
      )}
    </div>
  );
}

export default App;
