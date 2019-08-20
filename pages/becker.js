import react from 'react'
import _ from 'lodash'
import axios from 'axios'
import styles from '../components/styles'
import Lister from '../components/Lister'
import { assignScores } from '../utils'
import { nflTeams, beckerRoster } from '../consts'

let players = beckerRoster
let teams = nflTeams
let results = []
let scores = []

const assignTeams = () => {

  players = _.shuffle(players)
  teams = _.shuffle(teams)

  _.forEach(players, function(p){
    let selection = { name: '', team1: '', team2: '', score1: 0, score2: 0, img1: null, img2: null }
    
    selection.name = p

    selection.team1 = _.sample(teams);
    selection.score1 = 0

    teams = _.pull(teams, selection.team1)
    selection.img1 = './static/'+selection.team1+'.gif'
    
    selection.team2 = _.sample(teams)
    selection.score2 = 0
    teams = _.pull(teams, selection.team2)
    selection.img2 = './static/'+selection.team2+'.gif'
  
    results.push(selection)
  })

  console.log('results:', results)
  console.log('scores:', scores)
  return assignScores(scores, results)
}

class Becker extends react.Component {
  constructor(){
    super()
    this.state = {
      loading: true
    }
  }

  componentDidMount () {
    // const unsecure = 'http://www.nfl.com/liveupdate/scores/scores.json'
    const secure = 'https://feeds.nfl.com/feeds-rs/scores.json'
    axios.get(secure)
      .then( res => {
        return res
      })
      .then(parsed => {
        scores = parsed.data.gameScores
        assignTeams()
        this.setState({ loading: false })
      })
  }

  render () {
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>Lee Family 2019 Draft Order</h1>
        <Lister results={results} />
        <h4>Draft Results are determined by the 2019 Week 3 Preseason Game.</h4>
        <p style={styles.p}>By the selection above, the total number of points scored by those two teams combined will rank the players in order of which they will make their selections.</p>
        <p style={styles.p}>If by chance there are any ties, those within the tie have the opportunity to resolve in any creative way possible.</p>
        <p style={styles.p}>If this doesn't come to a resolution, another random ranking will determine those slots.</p>
      </div>
    )
  }

}

export default Becker 