// Write your code here
import {Component} from 'react'

import './index.css'

const headsImageUrl = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'

const tailsImageUrl = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {tossResultImage: headsImageUrl, headsCount: 0, tailsCount: 0}

  onTossCoin = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadsCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headsImageUrl
      latestHeadsCount += 1
    } else {
      tossImage = tailsImageUrl
      latestTailsCount += 1
    }
    this.setState({
      tossResultImage: tossImage,
      headsCount: latestHeadsCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {tossResultImage, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount
    return (
      <div className="app-container">
        <div className="coin-toss-container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="question">Heads (or) Tails</p>
          <img src={tossResultImage} className="coin-image" alt="toss result" />
          <button
            className="toss-button"
            type="button"
            onClick={this.onTossCoin}
          >
            Toss Coin
          </button>
          <ul className="count-container">
            <p className="count-text">Total:{totalCount}</p>
            <p className="count-text">Heads:{headsCount}</p>
            <p className="count-text">Tails:{tailsCount}</p>
          </ul>
        </div>
      </div>
    )
  }
}

export default CoinToss
