import React, {Component} from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import Dialog from 'material-ui/Dialog'
import {deepOrange500} from 'material-ui/styles/colors'
import FlatButton from 'material-ui/FlatButton'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import injectTapEventPlugin from 'react-tap-event-plugin'
import _ from 'lodash'

// Make sure react-tap-event-plugin only gets injected once
// Needed for material-ui
if (!process.tapEventInjected) {
  injectTapEventPlugin()
  process.tapEventInjected = true
}

const styles = {
  container: {
    textAlign: 'center',
    paddingTop: 200,
    fontFamily: 'Helvetica Neue',
    boxSizing: 'border-box',
    width: 650,
    margin: '0px auto'
  },
  h1: {
    textAlign: 'center'
  },
  ul: {
      listStyle: 'none',
      padding: 10,
      transform: 'scale(0.9)'
  },
  li: {
      border: '1px solid #DDD',
      backgroundColor: '#FFF',
      padding: 20,
      display: 'inline-block',
      width: 300,
      marginLeft: 10,
      marginBottom: 10
  },
  span: {
      margin: '25px 10px 0px 0px',
      float: 'left',
      textAlign: 'center',
      width: 85,
      textShadow: '1px 1px 2px rgba(0,0,0,0.5)'
  },
  img: {
      float: 'left',
      marginRight: 10,
      width: 65,
      height: 65
  },
  p: {
      padding: '5px 10px'
  }

}

const muiTheme = {
  palette: {
    accent1Color: deepOrange500
  }
}

class Index extends Component {
  static getInitialProps ({ req }) {
    // Ensures material-ui renders the correct css prefixes server-side
    let userAgent
    if (process.browser) {
      userAgent = navigator.userAgent
    } else {
      userAgent = req.headers['user-agent']
    }

	let teams = [
    "Arizona",
    "Atlanta",
    "Baltimore",
    "Buffalo",
    "Carolina",
    "Chicago",
    "Cincinnati",
    "Cleveland",
    "Dallas",
    "Denver",
    "Detroit",
    "Green Bay",
    "Houston",
    "Indianapolis",
    "Jacksonville",
    "KansasCity",
    "LosAngeles",
    "Miami",
    "Minnesota",
    "NewEngland",
    "NewOrleans",
    "NewYorkA",
    "NewYorkN",
    "Oakland",
    "Philadelphia",
    "Pittsburgh",
    "SanDiego",
    "SanFrancisco",
    "Seattle",
    "TampaBay",
    "Tennessee",
    "Washington"
	];

	let players = [
    'GLANZER',
    'KATZ',
    'WELCH',
    'TAGS',
    'HICKS',
    'PROBERT',
    'POPACK',
    'BARCH',
    'BAH',
    'PERRAS',
    'KLION',
    'MICHALIGA',
    'deRUBIO',
    'KAZIN',
    'NEWMAN',
    'BECKER'
	];

	players = _.shuffle(players);
	teams = _.shuffle(teams);


	let results = [];

	_.forEach(players, function(p){
		let selection = { name: '', team1: '', team2: '', img1: null, img2: null};
		
		selection.name = p;

		selection.team1 = _.sample(teams); 
    teams = _.pull(teams, selection.team1);
    selection.img1 = './static/'+selection.team1+'.gif';
		
		selection.team2 = _.sample(teams);
    teams = _.pull(teams, selection.team2);
    selection.img2 = './static/'+selection.team2+'.gif';

		results.push(selection);
	});


    return { userAgent, results }
  }

  constructor (props, context) {
    super(props, context)

    this.state = {
      open: false
    }
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  handleTouchTap = () => {
    this.setState({
      open: true
    })
  }

  render () {
    const { userAgent, results } = this.props

    const standardActions = (
      <FlatButton
        label='Ok'
        primary={Boolean(true)}
        onTouchTap={this.handleRequestClose}
      />
    )

    console.log("!", results);
    //document.body.style.backgroundColor = '#EEE';

    return (
      <MuiThemeProvider muiTheme={getMuiTheme({userAgent, ...muiTheme})}>

        <div style={styles.container}>

          <Dialog
            open={this.state.open}
            title='The Scores'
            actions={standardActions}
            onRequestClose={this.handleRequestClose}
          >
            The Scores!
          </Dialog>

            <h1 style={styles.h1}>BTFF 2017 Draft Order</h1>

            <ul style={styles.ul}>

            {this.props.results.map((result, i) =>
              <li key={i} style={styles.li}>
                <span style={styles.span}>{result.name}</span>
                <img style={styles.img} src={result.img1} alt={result.team1}/>
                <img style={styles.img} src={result.img2} alt={result.team2}/>
              </li>
            )}

            </ul>

            <h4>Draft Results are determined by the 2016 Week 4 Preseason Game.</h4>
            <p style={styles.p}>By the selection above, the total number of points scored by those two teams combined will rank the players in order of which they will make their selections.</p>
            <p style={styles.p}>If by chance there are any ties, those within the tie have the opportunity to resolve in any creative way possible.</p>
            <p style={styles.p}>If this doesn't come to a resolution, another random ranking will determine those slots.</p>
          

          <RaisedButton
            label='Get Scores'
            secondary
            onTouchTap={this.handleTouchTap}
          />
        </div>
      </MuiThemeProvider>
    )
  }
}

export default Index