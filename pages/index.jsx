import { useState, useEffect } from "react";
import axios from "axios";
import styles from "../components/styles";
import Lister from "../components/Lister";

import { nflTeams, btff2021 } from "../consts";
import _ from "lodash";

const Index = () => {
  const [loading, setLoading] = useState(false);
  // const [results, setResults] = useState([]);

  // const removeValue = (array, id) => {
  //   return _.reject(array, (item) => {
  //     return item === id; // or some complex logic
  //   });
  // };

  // const randIdx = (array) => {
  //   return array[Math.floor(Math.random() * array.length)];
  // };

  // const assignTeams = (data, rosters, teams) => {
  //   const assignments = [];
  //   const teamCopy = teams;
  //   rosters.forEach((player) => {
  //     const team1 = randIdx(teamCopy);
  //     removeValue(teamCopy, team1);
  //     const team2 = randIdx(teamCopy);
  //     removeValue(teamCopy, team2)
  //     const obj = {
  //       name: player.name,
  //       team1: team1,
  //       team2: team2,
  //       score1: 0,
  //       score2: 0,
  //       img1: `../../static/${team1}.gif`,
  //       img2: `../../static/${team2}.gif`,
  //     };
  //     assignments.push(obj);
  //   });
  //   return assignments;
  // };

  // useEffect(() => {
  //   const secure =
  //     "https://api.sportsdata.io/v3/nfl/scores/json/ScoresByWeek/2021PRE/2?key=d72d3429cba640eebd708317bab9c83e";
  //   axios.get(secure).then(async (parsed) => {
  //     const assignments = await assignTeams(parsed.data, btff2021, nflTeams);
  //     console.log(">", assignments);
  //     setResults(assignments);
  //     setLoading(false);
  //   });
  // }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>BTFF 2021 Unofficial Draft Order</h1>
      {loading ? "Loading..." : <Lister results={btff2021} />}
      <h4>
        Draft Results are determined by the 2021 Week 2 of the NFL Preseason.
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
        If this doesn't come to a resolution, another random ranking will
        determine those slots.
      </p>
    </div>
  );
};

export default Index;
