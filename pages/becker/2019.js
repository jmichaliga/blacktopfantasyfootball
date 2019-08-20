import react from 'react'
import _ from 'lodash'
import axios from 'axios'
import styles from '../../components/styles'
import Lister from '../../components/Lister'
import { assignScores } from '../../utils'
import { becker2019 } from '../../consts'

let results = []
let scores = []
let week = 0

const assignTeams = () => {
  results = becker2019
  console.log('results:', results)
  console.log('scores:', scores)
  if (week === 3) {
   return assignScores(scores, results)
  }
}

class Index extends react.Component {
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
        week = parsed.data.week
        assignTeams()
        this.setState({ loading: false })
      })
  }

  render () {
    return (
      <div style={styles.container}>
        <h1 style={styles.h1}>BTFF 2019 Draft Order</h1>
        <Lister results={results} />
        <h4>Draft Results are determined by the 2019 Week 3 Preseason Game.</h4>
        <p style={styles.p}>By the selection above, the total number of points scored by those two teams combined will rank the players in order of which they will make their selections.</p>
        <p style={styles.p}>If by chance there are any ties, those within the tie have the opportunity to resolve in any creative way possible.</p>
        <p style={styles.p}>If this doesn't come to a resolution, another random ranking will determine those slots.</p>
      </div>
    )
  }

}

export default Index 