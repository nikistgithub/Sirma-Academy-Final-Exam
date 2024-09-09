import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import parseCSV from './utils/csvParser';
import HomePage from './components/HomePage';
import { matchesCSV, teamsCSV } from './assets/data/data';

function App() {
  const [teams, setTeams] = useState([]);
  const [matches, setMatches] = useState([]);

  useEffect(() => {
    const parsedTeams = parseCSV(teamsCSV);
    const parsedMatches = parseCSV(matchesCSV);

    setTeams(parsedTeams);
    setMatches(parsedMatches);
  }, [])


  return (
    <div className="app">
      <HomePage teams={teams} matches={matches} />
    </div>
  )
}

export default App
