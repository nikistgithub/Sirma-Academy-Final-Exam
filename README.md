# European Football Championship 2024

This is a React-based web application for the European Football Championship 2024. The application allows users to view match results, team details, players information and records related to specific matches. It also provides a bracket view of the tournament, showing the progression of teams through different stages.

## Table of Contents

- [Features](#features)
- [Project Structure](#project-structure)
- [Setup and Installation](#setup-and-installation)
- [Usage](#usage)
- [Components Overview](#components-overview)
- [Algorithms and Logic](#algorithms-and-logic)

## Features

- **Home Page**: Displays a list of matches with results, dates, and winning teams.
- **Bracket View**: Shows the tournament stages such as group stage, quarter-finals, semi-finals, and finals.
- **Match Details Page**: Provides detailed information about a selected match, including player lineups and formations.
- **Team Details Page**: Displays detailed information about a specific team, including a roster of players.
- **Records Page**: Lists records related to a specific match, such as player performances and key events.
- **Responsive Navigation**: Easy navigation between pages using a consistent navbar.

## Project Structure

- `src/components`: Contains all React components, such as `HomePage`, `BracketView`, `MatchDetails`, `TeamDetails`, `RecordsPage`, and `Navbar`.
- `src/utils`: Contains utility functions, such as `dataParser.js` for parsing date strings.
- `src/styles`: Contains all CSS files for styling components.
- `public/logos`: Contains team logos and the application logo.
- `src/App.js`: The main application entry point that configures routes and renders components.
- `src/index.js`: The main entry point for rendering the React application.

## Setup and Installation

1. **Clone the repository:**

```bash
git clone https://github.com/nikistgithub/Sirma-Academy-Final-Exam.git
cd Sirma-Academy-Final-Exam
```

2. **Install dependencies:**

```bash
npm install
```

3. **Run the application:**

```bash
npm run dev
```

This command will start the development server and open the application in your default web browser at `http://localhost:5173`

## Usage
- Navigate through different sections using the navigation bar.
- View match details by clicking on any match card on the Home Page.
- Explore team details by clicking on team names on various pages.
- Access the Bracket view to see the progression of teams through different tournament stages.
- Visit the Records page to view records related to specific matches.

## Components Overview
- **HomePage**: Lists all matches and their details, such as date, teams, score, and the winning team.
- **BracketView**: Displays the tournament bracket, categorized into different stages based on cutoff dates.
- **MatchDetails**: Shows detailed information about a specific match, including teams, scores, players, and formations.
- **TeamDetails**: Provides information about a selected team, including its roster and player details.
- **RecordsPage**: Lists specific records related to a match, such as player performances or other significant events.
- **Navbar**: Provides navigation links to different sections of the application.

## Algorithms and Logic

1. **Data Parsing and Formating:**

- The `ParseDate` utility function is used to convert date strings into JavaScript `Date` objects. The `FormatDate` function formats these dates into a human-readable format(Month, Day, Year).

2. **Match Result Calculation:**

- The `getWinningTeam` function extracts scores from the match data and determines the winning team or if the match is a draw. It parses the score, compares home and away team scores and returns the winner's details.

3. **Stage Categorization:**

- In `BracketView`, matches are categorized into different stages (e.g, group stage, quarter-finals) based on their dates. The `cutoffDates` object defines the boundaries for each stage and the logic filters matches into the appropriate category.

4. **Player Positioning:**

- The `getTeamPlayersByPosition` function in `MatchDetails` classifies players by their positions (GoalKeeper, Defender, MidFielder, Forward) and arranges them on the field accordingly.

5. **Data Filtering:**

- The `RecordsPage` component filters records by match ID to display only relevant records for the selected match. The `getPlayerNameById` function retrieves player details for each record.

6. **Dynamic Routing:**

- Uses React Router for dynamic navigation between different pages (`HomePage`, `BracketView`, `MatchDetails`, `TeamDetails`, `RecordsPage`). URL's are parameterized to load specific match or team details. 

## Screenshots

- For Home Page

![HomePage](https://github.com/nikistgithub/Sirma-Academy-Final-Exam/blob/95b95e4316585050735535db5ba01d4371a2cd01/public/screenshots/HomePage.PNG)

- For Match Details

![MatchDetails](https://github.com/nikistgithub/Sirma-Academy-Final-Exam/blob/95b95e4316585050735535db5ba01d4371a2cd01/public/screenshots/MatchDetails.PNG)
![SecondMatchDetails](https://github.com/nikistgithub/Sirma-Academy-Final-Exam/blob/95b95e4316585050735535db5ba01d4371a2cd01/public/screenshots/SecondMatchDetails.PNG)

- For Bracket View

![BracketView](https://github.com/nikistgithub/Sirma-Academy-Final-Exam/blob/95b95e4316585050735535db5ba01d4371a2cd01/public/screenshots/BracketView.PNG)

- For Team Details

![TeamDetails](https://github.com/nikistgithub/Sirma-Academy-Final-Exam/blob/95b95e4316585050735535db5ba01d4371a2cd01/public/screenshots/TeamDetails.PNG)

- For Records

![Records](https://github.com/nikistgithub/Sirma-Academy-Final-Exam/blob/95b95e4316585050735535db5ba01d4371a2cd01/public/screenshots/Records.PNG)
