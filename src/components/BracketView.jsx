import { Link } from "react-router-dom";

export default function BracketView({ matches, teams }) {
  const stages = {
    groupStage: [],
    eightFinals: [],
    quarterFinals: [],
    semiFinals: [],
    final: [],
  };

  matches.forEach((match) => {
    if (match.Date < "6/26/2024") {
      stages.groupStage.push(match);
    } else if (match.Date < "7/2/2024") {
      stages.eightFinals.push(match);
    } else if (match.Date < "7/6/2024") {
      stages.quarterFinals.push(match);
    } else if (match.Date < "7/10/2024") {
      stages.semiFinals.push(match);
    } else {
      stages.final.push(match);
    }
  });

  const getTeamNameById = (id) => {
    const team = teams.find((team) => team.ID === id);
    return team ? team.Name : "Unknown team";
  };

  const renderMatches = (matches, stage) => (
    <div>
      <h2>Stage</h2>
      {matches.map((match) => {
        const [homeScore, awayScore] = match.Score.split("-").map((part) =>
          parseInt(part.replace(/\(\d+\)/, ""))
        );
        const winner =
          homeScore > awayScore
            ? "home"
            : homeScore < awayScore
            ? "away"
            : "draw";
        const isDraw = winner === "draw";
        const team = isDraw
          ? ""
          : getTeamNameById(winner === "home" ? match.ATeamID : match.BTeamID);

        return (
          <div className="match-card">
            <div className="match-date">{match.Date}</div>
            <div className="teams-container">
              <div className="team"></div>
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
                <div className="side-level">
                  {winner === "home" ? "HOME" : "AWAY"}
                </div>
              )}
            </div>
            <div className="team"></div>
            <div className="team-info">
              <div className="team-name">{getTeamNameById(match.BTeamID)}</div>
            </div>
          </div>
        );
      })}
    </div>
  );

  return (
    <div className="bracket-view">
        <Link to="/">Back to Home</Link>
        {renderMatches(stages.groupStage, 'Group Stage')}
        {renderMatches(stages.eightFinals, 'Eight Finals')}
        {renderMatches(stages.quarterFinals, 'Quarter Finals')}
        {renderMatches(stages.semiFinals, 'Semi Finals')}
        {renderMatches(stages.final, 'Final')}
    </div>
  );
}
