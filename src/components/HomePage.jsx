import React from "react";
import { useNavigate } from "react-router-dom";
import parseDate from "../utils/dataParser";
import "../styles/HomePage.css";

export default function HomePage({ teams, matches }) {
  const navigate = useNavigate();

  const getTeamNameById = (id) => {
    const team = teams.find((team) => team.ID === id);
    return team ? team.Name : "Unknown team";
  };

  const getWinningTeam = (match) => {
    const scoreParts = match.Score.split("-");
    if (scoreParts.length !== 2) return { winner: "draw", team: "" };

    const homeScore = parseInt(scoreParts[0].trim(), 10);
    const awayScore = parseInt(scoreParts[1].trim(), 10);

    if (homeScore > awayScore) {
      return { winner: "home", team: getTeamNameById(match.ATeamID) };
    }
    if (homeScore < awayScore) {
      return { winner: "away", team: getTeamNameById(match.BTeamID) };
    }
    return { winner: "draw", team: "" };
  };

  const formatDate = (dateString) => {
    const date = parseDate(dateString);
    if (!date) return "Invalid Date";
    return date.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  };

  const getTeamLogo = (teamName) => {
    const normalizedTeamName = teamName.split(" ").join("");
    return `/logos/${normalizedTeamName}.png`;
  };

  const handleMatchClick = (matchId) => {
    navigate(`/match-details/${matchId}`);
  };

  return (
    <div className="home-container">
      {matches.map((match) => {
        const { winner, team } = getWinningTeam(match);
        const isDraw = winner === "draw";
        const matchDate = formatDate(match.Date);

        return (
          <div
            key={match.ID}
            className="match-card"
            onClick={() => handleMatchClick(match.ID)}
          >
            <div className="match-date">{matchDate}</div>

            <div className="teams-container">
              <div className="team">
                <img
                  src={getTeamLogo(getTeamNameById(match.ATeamID))}
                  alt={getTeamNameById(match.ATeamID)}
                  className="team-logo"
                />
                <div className="team-info">
                  <div className="team-name">
                    {getTeamNameById(match.ATeamID)}
                  </div>
                </div>
              </div>

              <div className="match-result">
                <div className="winner-label">
                  {isDraw ? "Match Draw" : `${team} Wins`}
                </div>

                <span
                  className={isDraw ? "" : winner === "home" ? "win" : "lose"}
                >
                  {match.Score}
                </span>

                {!isDraw && (
                  <div className="side-label">
                    {winner === "home" ? "HOME" : "AWAY"}
                  </div>
                )}
              </div>

              <div className="team">
                <img
                  src={getTeamLogo(getTeamNameById(match.BTeamID))}
                  alt={getTeamNameById(match.BTeamID)}
                  className="team-logo"
                />
                <div className="team-info">
                  <div className="team-name">
                    {getTeamNameById(match.BTeamID)}
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
