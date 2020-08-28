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
