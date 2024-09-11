import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import parseCSV from "./utils/csvParser";
import HomePage from "./components/HomePage";
import { matchesCSV, playersCSV, recordsCSV, teamsCSV } from "./assets/data/data";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import BracketView from "./components/BracketView";
import MatchDetails from "./components/MatchDetails";
import TeamDetails from "./components/TeamDetails";
import RecordsPage from "./components/RecordsPage";

function App() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);
  const [players, setPlayers] = useState([]);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const parsedTeams = parseCSV(teamsCSV);
    const parsedMatches = parseCSV(matchesCSV);
    const parsedPlayers = parseCSV(playersCSV);
    const parsedRecords = parseCSV(recordsCSV);

    console.log("Parsed Teams:", parsedTeams); // Debugging
    console.log("Parsed Matches:", parsedMatches); // Debugging
    console.log("Parsed Players:", parsedPlayers); // Debugging
    console.log("Parsed Records:", parsedRecords); // Debugging


    setTeams(parsedTeams);
    setMatches(parsedMatches);
    setPlayers(parsedPlayers);
    setRecords(parsedRecords);
  }, []);

  return (
    <Router>
      <div className="app">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<HomePage teams={teams} matches={matches} />}
          />
          <Route
            path="/bracket"
            element={<BracketView matches={matches} teams={teams} />}
          />
          <Route
            path="/match-details/:matchId"
            element={<MatchDetails matches={matches} teams={teams} />}  
          />
          <Route
            path="/team/:teamId" 
            element={<TeamDetails teams={teams} players={players} />}
          />
          <Route
            path="records"
            element={<RecordsPage records={records} players={players} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
