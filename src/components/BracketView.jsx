import { Link } from "react-router-dom";
import './BracketView.css';
import parseDate from "../utils/dataParser";

export default function BracketView({ matches, teams }) {
  const stages = {
    groupStage: [],
    eightFinals: [],
    quarterFinals: [],
    semiFinals: [],
    final: [],
  };

  const cutoffDates = {
    groupStage: new Date("2024-06-26"),
    eightFinals: new Date("2024-07-02"),
    quarterFinals: new Date("2024-07-06"),
    semiFinals: new Date("2024-07-10"),
    final: new Date("2024-07-11"),
  };

  // Organize matches into stages
  matches.forEach((match) => {
    const matchDate = parseDate(match.Date);
    if (matchDate <= cutoffDates.groupStage) {
      stages.groupStage.push(match);
    } else if (matchDate <= cutoffDates.eightFinals) {
      stages.eightFinals.push(match);
    } else if (matchDate <= cutoffDates.quarterFinals) {
      stages.quarterFinals.push(match);
    } else if (matchDate <= cutoffDates.semiFinals) {
      stages.semiFinals.push(match);
    } else {
      stages.final.push(match);
    }
  });

  const getTeamNameById = (id) => {
    const team = teams.find((team) => team.ID === id);
    return team ? team.Name : "Unknown team";
  };

  const renderKnockoutStage = (matches, title) => {
    const sortedMatches = matches.sort((a, b) => a.ID - b.ID);
    return (
      <div className="knockout-stage">
        <h2>{title}</h2>
        <div className="bracket-round">
          {sortedMatches.map((match, index) => (
            <div key={match.ID} className="match-cards">
              <div className="teams-container">
                <div className="team-info">{getTeamNameById(match.ATeamID)}</div>
                <div className="match-result">{match.Score}</div>
                <div className="team-info">{getTeamNameById(match.BTeamID)}</div>
              </div>
              {index < sortedMatches.length - 1 && (
                <div className="line-to-next-round"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    );
  };

  const renderBracket = () => {
    return (
      <div className="bracket-view">
        <Link to="/">Back to Home</Link>
        <div className="knockout-bracket">
          {renderKnockoutStage(stages.eightFinals, 'Eight Finals')}
          {renderKnockoutStage(stages.quarterFinals, 'Quarter Finals')}
          {renderKnockoutStage(stages.semiFinals, 'Semi Finals')}
          {renderKnockoutStage(stages.final, 'Final')}
        </div>
      </div>
    );
  };

  return (
    <div className="bracket-container">
      {renderBracket()}
    </div>
  );
}