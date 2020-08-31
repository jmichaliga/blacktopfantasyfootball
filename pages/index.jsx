import { useState, useEffect } from "react";
import axios from "axios";
import _ from "lodash";
import styles from "../components/styles";
import Lister from "../components/Lister";
import { parseFeed } from "../utils";
import { roster2020 } from "../consts/nhl";

const Index = () => {
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState(roster2020);

  useEffect(() => {
    const secure =
      "https://statsapi.web.nhl.com/api/v1/schedule?startDate=2020-08-29&endDate=2020-08-30&hydrate=linescore";
    axios.get(secure).then(async (parsed) => {
      const assignments = await parseFeed(parsed.data, results);
      console.log("><", parsed.data, assignments)
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
