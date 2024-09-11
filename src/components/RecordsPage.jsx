import React from "react";
import { useLocation } from "react-router-dom";
import './RecordsPage.css'

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function RecordsPage({ records, players }) {
  const query = useQuery();
  const matchId = query.get("matchId");

  // Filter records by matchId
  const filteredRecords = records.filter((record) => record.MatchID === matchId);

  // Function to get player name by ID
  const getPlayerNameById = (id) => {
    console.log("Looking up player with ID:", id); // Debugging line
    const player = players.find((player) => player.ID === id);
    console.log("Found player:", player); // Debugging line
    return player ? player.FullName : "Unknown Player"; // Use FullName instead of Name
  };

  return (
    <div className="records-page">
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