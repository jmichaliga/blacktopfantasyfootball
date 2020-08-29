import _ from "lodash";
export const assignTeams = (scores, players, teams, cb) => {
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
  return cb(scores, results)
}

export const parseFeed = (feed, results) => {
  const gameSlots = {
    TB: [0, 2, "away"],
    BOS: [0, 2, "home"],
    COL: [1, 0, "away"],
    DAL: [1, 0, "home"],
    PHI: [1, 1, "away"],
    NYI: [1, 1, "home"],
    VGK: [1, 2, "away"],
    VAN: [1, 2, "home"],
  };

  results.forEach((p) => {
    let selection = p;

    let f = gameSlots[selection.team1];

    console.log(">", feed.dates[f[0]]);

    if(feed.dates[f[0]].games[f[1]].linescore.periods.length >= selection.pd1) {
      selection.score1 =
        feed.dates[f[0]].games[f[1]].linescore.periods[selection.pd1 - 1][f[2]]
          .shotsOnGoal || 0;
    }

    let g = gameSlots[selection.team2];
    if(feed.dates[g[0]].games[g[1]].linescore.periods.length >= selection.pd2) {
      selection.score2 =
        feed.dates[g[0]].games[g[1]].linescore.periods[selection.pd2 - 1][g[2]]
          .shotsOnGoal || 0;
    }
  });

  return results;
  // return assignNHLScores(feed, _.shuffle(results));
};

const assignNHLScores = (scores, results) => {
  console.log("res>", scores, results)
}

export const assignScores = (scores, results) => {
  _.forEach(scores, (game) => {
    if(!game.score) { return }
    _.forEach(results, (selection) => {
      if(game.gameSchedule.visitorTeamAbbr === selection.team1){
        selection.score1 = game.score.visitorTeamScore.pointTotal ? game.score.visitorTeamScore.pointTotal : 0
      }
      if(game.gameSchedule.homeTeamAbbr === selection.team1){
        selection.score1 = game.score.homeTeamScore.pointTotal ? game.score.homeTeamScore.pointTotal : 0
      }
      if(game.gameSchedule.visitorTeamAbbr === selection.team2){
        selection.score2 = game.score.visitorTeamScore.pointTotal ? game.score.visitorTeamScore.pointTotal : 0
      }
      if(game.gameSchedule.homeTeamAbbr === selection.team2){
        selection.score2 = game.score.homeTeamScore.pointTotal ? game.score.homeTeamScore.pointTotal : 0
      }
    })
  })
  return results
}
