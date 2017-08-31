
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('http://www.nfl.com/liveupdate/scores/scores.json')
    const json = await res.json()
    return { games: json }
  }

  render () {
    return (
      <div>
        <p>BTFF has {this.props.games}⭐️</p>

        <ul>
        {this.props.games.map((result, i) =>
              <li key={i} >
                <span>{result.home.abbr}</span>\
                <span>{result.away.abbr}</span>
              </li>
            )}
        </ul>
      </div>
    )
  }
}
