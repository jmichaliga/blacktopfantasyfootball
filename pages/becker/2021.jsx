// import { useState, useEffect } from "react";
import _ from "lodash";
// import axios from "axios";
import styles from "../../components/styles";
import Lister from "../../components/Lister";
// import { assignScores } from "../utils";
import { becker2021 } from "../../consts";

const Index2021 = () => {
  // const [loading, setLoading] = useState(true);
  // const [results, setResults] = useState(becker2021);
  // const [scores, setScores] = useState([]);

  // let players = beckerRoster;
  // let teams = nflTeams;

  // const assignTeams = (feed) => {
  //   players = _.shuffle(players);
  //   teams = _.shuffle(teams);
  //   const results = []

  //   players.forEach((p) => {
  //     let selection = {
  //       name: "",
  //       team1: "",
  //       team2: "",
  //       score1: 0,
  //       score2: 0,
  //       img1: null,
  //       img2: null,
  //     };

  //     selection.name = p;
  //     selection.team1 = _.sample(teams);

  //     selection.img1 = "./static/" + selection.team1 + ".gif";
  //     selection.team2 = _.sample(teams);

  //     selection.img2 = "./static/" + selection.team2 + ".gif";

  //     results.push(selection);
  //   });

  //   console.log('>', results)
  //   // return assignScores(scores, results);
  // };

  // useEffect(() => {
  //   assignTeams();
  // }, []);

  return (
    <div style={styles.container}>
      <h1 style={styles.h1}>Becker Fam 2021 Unofficial Draft Order</h1>
        <Lister results={becker2021} />
      <h4>
        Draft Results are determined by the 2021 Week 3 Games of the NFL
        Preseason.
      </h4>
      <p style={styles.p}>
        By the selection above, the total number of points accumulated by those
        two teams in their designated game combined will rank the players in
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

export default Index2021;
