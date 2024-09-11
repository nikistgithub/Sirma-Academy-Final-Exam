import React from "react";
import { useLocation, Link } from "react-router-dom";
import "../styles/RecordsPage.css";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function RecordsPage({ records, players }) {
  const query = useQuery();
  const matchId = query.get("matchId");

  const filteredRecords = records.filter(
    (record) => record.MatchID === matchId
  );

  const getPlayerNameById = (id) => {
    const player = players.find((player) => player.ID === id);
    return player ? player.FullName : "Unknown Player";
  };

  return (
    <div className="records-page">
      <Link to="/" className="back-to-home-from-records">
        Back to Home
      </Link>
      <h2>Records for Match {matchId}</h2>
      {filteredRecords.length === 0 ? (
        <p>No records found for this match.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>From Minutes</th>
              <th>To Minutes</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.map((record) => (
              <tr key={record.ID}>
                <td>{getPlayerNameById(record.PlayerID)}</td>
                <td>{record.fromMinutes}</td>
                <td>{record.toMinutes || "End"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
