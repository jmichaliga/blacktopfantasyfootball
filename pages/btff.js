
import React from 'react'
import Link from 'next/link'
import 'isomorphic-fetch'

export default class MyPage extends React.Component {
  static async getInitialProps () {
    // eslint-disable-next-line no-undef
    const res = await fetch('~/static/players.json')
    const json = await res.json()
    return { players: json.players }
  }

  render () {
    return (
      <div>
        <p>BTFF has {this.props.players} ⭐️</p>

        <ul>
          <li></li>
        </ul>
      </div>
    )
  }
}
