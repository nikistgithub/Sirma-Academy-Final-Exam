import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/TeamDetails.css";

export default function TeamDetails({ teams, players }) {
  const { teamId } = useParams();
  const team = teams.find((team) => team.ID === teamId);

  if (!team) {
    return <div>Team not found</div>;
  }

  // Debugging: Check the data of players
  console.log("Players Data:", players);

  const teamPlayers = players.filter((player) => player.TeamID === teamId);

  // Debugging: Check the filtered team players
  console.log("Team Players:", teamPlayers);

  return (
    <div className="team-details">
      <Link to="/" className="back-to-home">Back to Home</Link>
      <h2>{team.Name} Roster</h2>
      <table>
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Position</th>
          </tr>
        </thead>
        <tbody>
          {teamPlayers.map((player) => (
            <tr key={player.ID}>
              <td>{player.TeamNumber}</td>
              <td>{player.FullName}</td>
              <td>{player.Position}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}