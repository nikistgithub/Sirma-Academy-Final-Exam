import React from "react";
import { useParams, Link } from "react-router-dom";
import "../styles/MatchDetails.css";

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
      <Link to="/" className="back-to-home-from-match">
        Back to Home
      </Link>
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

      <div className="records-link">
        <Link to={`/records?matchId=${matchId}`}>
          View Records for this Match
        </Link>
      </div>

      <div className="formations-container">
        <div className="team-formation">
          <div className="formation">
            <div
              className="player GK"
              style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
            >
              {teamAPlayers.GK[0] ? teamAPlayers.GK[0].Name : ""}
            </div>
            <div className="player DEF CB" style={{ top: "30%", left: "25%" }}>
              {teamAPlayers.DEF[0] ? teamAPlayers.DEF[0].Name : ""}
            </div>
            <div className="player DEF CB" style={{ top: "30%", left: "75%" }}>
              {teamAPlayers.DEF[1] ? teamAPlayers.DEF[1].Name : ""}
            </div>
            <div className="player DEF LB" style={{ top: "30%", left: "10%" }}>
              {teamAPlayers.DEF[2] ? teamAPlayers.DEF[2].Name : ""}
            </div>
            <div className="player DEF RB" style={{ top: "30%", left: "90%" }}>
              {teamAPlayers.DEF[3] ? teamAPlayers.DEF[3].Name : ""}
            </div>
            <div
              className="player MID CM"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {teamAPlayers.MID[0] ? teamAPlayers.MID[0].Name : ""}
            </div>
            <div
              className="player MID CM"
              style={{
                top: "50%",
                left: "25%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {teamAPlayers.MID[1] ? teamAPlayers.MID[1].Name : ""}
            </div>
            <div
              className="player MID CM"
              style={{
                top: "50%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {teamAPlayers.MID[2] ? teamAPlayers.MID[2].Name : ""}
            </div>
            <div
              className="player FWD ST"
              style={{ top: "70%", left: "50%", transform: "translateX(-50%)" }}
            >
              {teamAPlayers.FWD[0] ? teamAPlayers.FWD[0].Name : ""}
            </div>
          </div>
        </div>

        <div className="team-formation">
          <div className="formation">
            {/* Display Team B's players */}
            <div
              className="player GK"
              style={{ top: "10%", left: "50%", transform: "translateX(-50%)" }}
            >
              {teamBPlayers.GK[0] ? teamBPlayers.GK[0].Name : ""}
            </div>
            <div className="player DEF CB" style={{ top: "30%", left: "25%" }}>
              {teamBPlayers.DEF[0] ? teamBPlayers.DEF[0].Name : ""}
            </div>
            <div className="player DEF CB" style={{ top: "30%", left: "75%" }}>
              {teamBPlayers.DEF[1] ? teamBPlayers.DEF[1].Name : ""}
            </div>
            <div className="player DEF LB" style={{ top: "30%", left: "10%" }}>
              {teamBPlayers.DEF[2] ? teamBPlayers.DEF[2].Name : ""}
            </div>
            <div className="player DEF RB" style={{ top: "30%", left: "90%" }}>
              {teamBPlayers.DEF[3] ? teamBPlayers.DEF[3].Name : ""}
            </div>
            <div
              className="player MID CM"
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {teamBPlayers.MID[0] ? teamBPlayers.MID[0].Name : ""}
            </div>
            <div
              className="player MID CM"
              style={{
                top: "50%",
                left: "25%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {teamBPlayers.MID[1] ? teamBPlayers.MID[1].Name : ""}
            </div>
            <div
              className="player MID CM"
              style={{
                top: "50%",
                left: "75%",
                transform: "translate(-50%, -50%)",
              }}
            >
              {teamBPlayers.MID[2] ? teamBPlayers.MID[2].Name : ""}
            </div>
            <div
              className="player FWD ST"
              style={{ top: "70%", left: "50%", transform: "translateX(-50%)" }}
            >
              {teamBPlayers.FWD[0] ? teamBPlayers.FWD[0].Name : ""}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
