import React from "react";
import { useParams, Link } from "react-router-dom";
import "./MatchDetails.css";

export default function MatchDetails({ matches, teams }) {
  const { matchId } = useParams();
  const match = matches.find((m) => m.ID === matchId);

  if (!match) {
    return <div>Match not found</div>;
  }

  const getTeamNameById = (id) => {
    const team = teams.find((team) => team.ID === id);
    return team ? team.Name : "Unknown team";
  };

  const getTeamPlayersByPosition = (teamID) => {
    if (!match.Players) {
      return {
        GK: [],
        DEF: [],
        MID: [],
        FWD: [],
      };
    }

    const players = match.Players.filter((player) => player.TeamID === teamID);
    const positions = {
      GK: [],
      DEF: [],
      MID: [],
      FWD: [],
    };

    players.forEach((player) => {
      if (player.Type === "Goalkeeper") positions.GK.push(player);
      else if (
        ["Defender", "Centre-back", "Right-back", "Left-back"].includes(
          player.Type
        )
      )
        positions.DEF.push(player);
      else if (
        [
          "Midfielder",
          "Central Midfielder",
          "Defensive Midfielder",
          "Attacking Midfielder",
        ].includes(player.Type)
      )
        positions.MID.push(player);
      else if (
        [
          "Forward",
          "Striker",
          "Central Forward",
          "Right Forward",
          "Left Forward",
        ].includes(player.Type)
      )
        positions.FWD.push(player);
    });

    return positions;
  };

  const teamAPlayers = getTeamPlayersByPosition(match.ATeamID);
  const teamBPlayers = getTeamPlayersByPosition(match.BTeamID);

  return (
    <div className="match-details">
      {/* Match result */}
      <div className="match-result">
        <h2>
          <Link to={`/team/${match.ATeamID}`}>
            {getTeamNameById(match.ATeamID)}
          </Link>{" "}
          vs{" "}
          <Link to={`/team/${match.BTeamID}`}>
            {getTeamNameById(match.BTeamID)}
          </Link>
        </h2>
        <div className="score">{match.Score}</div>
      </div>

      {/* Link to records page */}
      <div className="records-link">
        <Link to={`/records?matchId=${matchId}`}>View Records for this Match</Link>
      </div>

      {/* Team formations */}
      <div className="formations-container">
        <div className="team-formation">
          <div className="formation">
            {teamAPlayers.GK.map((player) => (
              <div key={player.ID} className={`player GK`}>
                {player.Name}
              </div>
            ))}
            {teamAPlayers.DEF.map((player) => (
              <div key={player.ID} className={`player ${player.Position}`}>
                {player.Name}
              </div>
            ))}
            {teamAPlayers.MID.map((player) => (
              <div key={player.ID} className={`player ${player.Position}`}>
                {player.Name}
              </div>
            ))}
            {teamAPlayers.FWD.map((player) => (
              <div key={player.ID} className={`player ${player.Position}`}>
                {player.Name}
              </div>
            ))}
          </div>
        </div>

        <div className="team-formation">
          <div className="formation">
            {teamBPlayers.GK.map((player) => (
              <div key={player.ID} className={`player GK`}>
                {player.Name}
              </div>
            ))}
            {teamBPlayers.DEF.map((player) => (
              <div key={player.ID} className={`player ${player.Position}`}>
                {player.Name}
              </div>
            ))}
            {teamBPlayers.MID.map((player) => (
              <div key={player.ID} className={`player ${player.Position}`}>
                {player.Name}
              </div>
            ))}
            {teamBPlayers.FWD.map((player) => (
              <div key={player.ID} className={`player ${player.Position}`}>
                {player.Name}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}