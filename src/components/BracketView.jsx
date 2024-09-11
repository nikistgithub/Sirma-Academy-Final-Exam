import { Link } from "react-router-dom";
import "../styles/BracketView.css";
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

  const renderKnockoutStage = (matches, title, className) => {
    const sortedMatches = matches.sort((a, b) => a.ID - b.ID);
    return (
      <div className={`knockout-stage ${className}`}>
        <h2>{title}</h2>
        <div className="bracket-round">
          {sortedMatches.map((match, index) => (
            <div key={match.ID} className="match-cards">
              <div className="teams-container">
                <div className="team-info">{getTeamNameById(match.ATeamID)}</div>
                <div className="match-result">{match.Score}</div>
                <div className="team-info">{getTeamNameById(match.BTeamID)}</div>
              </div>
              {(className === 'eight-finals' && index === 0) && (
                <div className="line-to-next-round line-three"></div>
              )}
              {(className === 'eight-finals' && index === 1) && (
                <div className="line-to-next-round line-two"></div>
              )}
              {(className === 'eight-finals' && (index === 2 || index === 3)) && (
                <div className="line-to-next-round line-one"></div>
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
          {renderKnockoutStage(stages.eightFinals, 'Eight Finals', 'eight-finals')}
          {renderKnockoutStage(stages.quarterFinals, 'Quarter Finals', 'quarter-finals')}
          {renderKnockoutStage(stages.semiFinals, 'Semi Finals', 'semi-finals')}
          {renderKnockoutStage(stages.final, 'Final', 'final')}
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