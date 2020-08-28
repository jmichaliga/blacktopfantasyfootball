import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import styles from "../components/styles";
import Lister from "../components/Lister";
import { assignScores } from "../utils";
import { roster2020 } from "../consts/nhl";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(roster2020);
  const [scores, setScores] = useState([]);

  const gameSlots = {
    TB: [0, 0, "away"],
    BOS: [0, 0, "home"],
    COL: [1, 0, "away"],
    DAL: [1, 0, "home"],
    PHI: [1, 1, "away"],
    NYI: [1, 1, "home"],
    VGK: [1, 2, "away"],
    VAN: [1, 2, "home"],
  };

  const assignTeams = (feed) => {

    results.forEach((p) => {
      let selection = p;

      let f = gameSlots[selection.team1];

      if(feed.dates[f[0]].games[f[1]].linescore.periods.length) {
        selection.score1 =
          feed.dates[f[0]].games[f[1]].linescore.periods[selection.pd1 - 1][f[2]]
            .shotsOnGoal || 0;
      }

      let g = gameSlots[selection.team2];
      if(feed.dates[g[0]].games[g[1]].linescore.periods.length) {
        selection.score2 =
          feed.dates[g[0]].games[g[1]].linescore.periods[selection.pd2 - 1][g[2]]
            .shotsOnGoal || 0;
      }
    });

    return assignScores(scores, _.shuffle(results));
  };

  useEffect(() => {
    const secure =
      "https://statsapi.web.nhl.com/api/v1/schedule?startDate=2020-08-29&endDate=2020-08-30&hydrate=linescore";
    axios.get(secure).then(async (parsed) => {
      await setScores(parsed.data);
      let assignments = await assignTeams(parsed.data);
      setResults(assignments);
      setLoading(false);
    });

  }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>BTFF 2020 Unofficial Draft Order</h1>
      {loading ? "Loading..." : <Lister results={results} />}
      <h4>
        Draft Results are determined by the 2020 Game 4 of the Stanley Cup
        Finals.
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
