import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../components/styles";
import Lister from "../components/Lister";

import { nflTeams, btff2022 } from "../consts";

const Index = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);

  const removeValue = (array, id) => {
    const index = array.indexOf(id);
    if (index > -1) {
      array.splice(index, 1);
    }
    return array;
  };

  const randIdx = (array) => {
    return array[Math.floor(Math.random() * array.length)];
  };

  const findScoreByTeam = (data, team) => {
    const awayIdx = Object.values(data).findIndex((g) => g.AwayTeam == team);
    const homeIdx = Object.values(data).findIndex((g) => g.HomeTeam == team);

    if (awayIdx !== -1) {
      return data[awayIdx].AwayScore;
    } else if (homeIdx !== -1) {
      return data[homeIdx].HomeScore;
    } else {
      return 0
    }
  };

  const assignTeams = (data, rosters, teams) => {
    const assignments = [];
    const teamCopy = teams;
    let count = 0;

    rosters.forEach((player) => {
      console.log("BEFORE", teamCopy);
      const team1 = randIdx(teamCopy);
      removeValue(teamCopy, team1);
      const team2 = randIdx(teamCopy);
      removeValue(teamCopy, team2);
      const obj = {
        name: player.name,
        team1: team1,
        team2: team2,
        score1: findScoreByTeam(data, team1),
        score2: findScoreByTeam(data, team2),
        img1: `../../public/${team1}.gif`,
        img2: `../../public/${team2}.gif`,
      };
      assignments.push(obj);
      count++;

    });

    return assignments;
  };

  useEffect(() => {
    const secure = `https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2022PRE/3?key=d72d3429cba640eebd708317bab9c83e`;
    axios.get(secure).then(async (parsed) => {
      const assignments = await assignTeams(parsed.data, btff2022, nflTeams);
      setResults(assignments);
      setLoading(false);
    });
  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>BTFF 2022 Unofficial Draft Order</h1>
      {loading ? "Loading..." : <Lister results={results} />}
      <h4>
        Draft Results are determined by the 2022 Week 2 of the NFL Preseason.
      </h4>
      <p style={styles.p}>
        By the selection above, the total number of shots accumulated by those
        two teams in their designated periods combined will rank the players in
        order of which they will make their selections.
      </p>
      <p style={styles.p}>
        If by chance there are any ties, those within the tie have the
        opportunity to resolve in any creative way possible.
      </p>
      <p style={styles.p}>
        If this doesn&apos;t come to a resolution, another random ranking will
        determine those slots.
      </p>
    </div>
  );
};

export default Index;
