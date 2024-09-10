import { useParams } from "react-router-dom";
import "./TeamRoster.css"; // Create a CSS file for styling if needed

export default function TeamRoster({ players, teams }) {
  const { teamId } = useParams();
  const team = teams.find((team) => team.ID === teamId);
  const teamPlayers = players.filter((player) => player.TeamID === teamId);

  if (!team) return <div>Team not found</div>;

  return (
    <div className="team-roster-container">
      <h2>{team.Name} Roster</h2>
      <ul>
        {teamPlayers.map((player) => (
          <li key={player.ID}>
            {player.FullName} - {player.Position} ({player.TeamNumber})
          </li>
        ))}
      </ul>
    </div>
  );
}