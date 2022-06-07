// Write your code here
import {Component} from 'react'

import './index.css'

const headImage = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailImage = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    image: headImage,
    headsCount: 0,
    tailsCount: 0,
  }

  onToss = () => {
    const {headsCount, tailsCount} = this.state
    const toss = Math.floor(Math.random() * 2)
    let tossImage = ''
    let latestHeadCount = headsCount
    let latestTailsCount = tailsCount

    if (toss === 0) {
      tossImage = headImage
      latestHeadCount += 1
    } else {
      tossImage = tailImage
      latestTailsCount += 1
    }

    this.setState({
      image: tossImage,
      headsCount: latestHeadCount,
      tailsCount: latestTailsCount,
    })
  }

  render() {
    const {image, headsCount, tailsCount} = this.state
    const totalCount = headsCount + tailsCount

    return (
      <div className="app-container">
        <div className="card-container">
          <h1 className="heading"> Coin Toss Game</h1>
          <p className="description"> Heads (or) Tails</p>
          <img src={image} alt="toss result" className="toss-result-img" />
          <button type="button" className="button" onClick={this.onToss}>
            Toss Coin
          </button>
          <div className="counts-container">
            <p className="count">Total:{totalCount} </p>
            <p className="count">Heads:{headsCount} </p>
            <p className="count">Tails:{tailsCount} </p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
