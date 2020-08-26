import react, {useState, useEffect} from "react";
import _ from "lodash";
// import axios from "axios";
import styles from "../components/styles";
import Lister from "../components/Lister";
import { assignScores } from "../utils";
import { nhlTeams, btffRoster } from "../consts/nhl";

let players = btffRoster;
let teams = nhlTeams;
let results = [];
let scores = [];
const pds = [1, 2, 3];

const assignTeams = () => {
  players = _.shuffle(players);
  teams = _.shuffle(teams);

  _.forEach(players, function(p) {
    let selection = {
      name: "",
      team1: "",
      pd1: "",
      team2: "",
      pd2: "",
      score1: 0,
      score2: 0,
      img1: null,
      img2: null,
    };

    selection.name = p;

    selection.team1 = _.sample(teams);
    selection.pd1 = _.sample(pds);
    selection.score1 = 0;

    // teams = _.pull(teams, selection.team1);
    selection.img1 = "./static/NHL-" + selection.team1 + ".png";

    selection.team2 = _.sample(teams);
    selection.pd2 = _.sample(pds);
    selection.score2 = 0;
    
    // teams = _.pull(teams, selection.team2);
    selection.img2 = "./static/NHL-" + selection.team2 + ".png";

    results.push(selection);
  });

  console.log("results:", results);
  console.log("scores:", scores);

  return assignScores(scores, results);
};

const Index = () => {
  // const [loading, setLoading] = useState(true)
  const [results, setResults] = useState([])

  useEffect(() => {
    // const unsecure = 'http://www.nfl.com/liveupdate/scores/scores.json'
    // const secure = 'https://feeds.nfl.com/feeds-rs/scores.json'
    // axios.get(secure)
    //   .then( res => {
    //     return res
    //   })
    //   .then(parsed => {
    //     scores = parsed.data.gameScores
    //     assignTeams()
    //     this.setState({ loading: false })
    //   })
    let assignments = assignTeams();
    setResults(assignments)
  },[])




    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>BTFF 2020 Draft Order</h1>
        <Lister results={results} />
        <h4>
          Draft Results are determined by the 2020 Game 4 of the Stanley Cup
          Finals.
        </h4>
        <p style={styles.p}>
          By the selection above, the total number of shots accumulated by those
          two teams in their designated periods combined will rank the players
          in order of which they will make their selections.
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

}

export default Index;
