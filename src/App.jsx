import { useState } from "react";
import "./App.css";
import { useEffect } from "react";
import parseCSV from "./utils/csvParser";
import HomePage from "./components/HomePage";
import { matchesCSV, teamsCSV } from "./assets/data/data";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const parsedTeams = parseCSV(teamsCSV);
    const parsedMatches = parseCSV(matchesCSV);

    setTeams(parsedTeams);
    setMatches(parsedMatches);
  }, []);

  return (
    <BrowserRouter>
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage teams={teams} matches={matches} /> } />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
