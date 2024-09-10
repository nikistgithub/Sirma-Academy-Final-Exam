import parseDate from "../utils/dataParser";
import "./HomePage.css";
import { useNavigate } from "react-router-dom";

export default function HomePage({ teams, matches }) {
  const navigate = useNavigate();

  const getTeamNameById = (id) => {
    const team = teams.find((team) => team.ID === id);
    return team ? team.Name : "Unknown team";
  };

  const getWinningTeam = (match) => {
    const [homeScore, awayScore] = match.Score.split("-").map((part) =>
      parseInt(part.replace(/\(\d+\)/, ""))
    );
    if (homeScore > awayScore)
      return { winner: "home", team: getTeamNameById(match.ATeamID) };
    if (homeScore < awayScore)
      return { winner: "away", team: getTeamNameById(match.BTeamID) };
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
    const normalizedTeamName = teamName.replace(/\s+/g, "");
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
          <div key={match.ID} className="match-card" onClick={() => handleMatchClick(match.ID)}>
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
