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
  console.log(scores, results)
  _.forEach(results, (selection) => {
    console.log('s', selection)
    for(let i in scores){
      if(!scores[i].score){ break }
      if(scores[i].gameSchedule.visitorTeamAbbr === selection.team1){
        selection.score1 = scores[i].score.visitorTeamScore.pointTotal ? scores[i].score.visitorTeamScore.pointTotal : 0
      }
      if(scores[i].gameSchedule.homeTeamAbbr === selection.team1){
        selection.score1 = scores[i].score.homeTeamScore.pointTotal ? scores[i].score.homeTeamScore.pointTotal : 0
      }
      if(scores[i].gameSchedule.visitorTeamAbbr === selection.team2){
        selection.score2 = scores[i].score.visitorTeamScore.pointTotal ? scores[i].score.visitorTeamScore.pointTotal : 0
      }
      if(scores[i].gameSchedule.homeTeamAbbr === selection.team2){
        selection.score2 = scores[i].score.homeTeamScore.pointTotal ? scores[i].score.homeTeamScore.pointTotal : 0
      }
    }
  })
  return results
}
