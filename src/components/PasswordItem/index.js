import {Component} from 'react'
import './index.css'

const colors = [
  '#0b69ff',
  '#94a3b8',
  '#b6c3ca',
  '#7683cb',
  '#f59e0b',
  '#10b981',
  '#f97316',
  '#14b8a6',
  '#b91c1c',
  '#0ea5e9',
  '#64748b',
]

class PasswordItem extends Component {
  randomIndex = Math.floor(Math.random() * colors.length)

  state = {randomColor: colors[this.randomIndex]}

  onDeletePassword = () => {
    const {details, ondelete} = this.props
    const {id} = details
    ondelete(id)
  }

  render() {
    const {details, showPass} = this.props
    const {website, username, password} = details
    const {randomColor} = this.state

    const firLetter = website[0].toUpperCase()

    const passwordText = showPass ? (
      password
    ) : (
      <img
        className="star"
        src="https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png"
        alt="stars"
      />
    )
    return (
      <li className="single-pass-cont">
        <h1 className="profile" style={{backgroundColor: randomColor}}>
          {firLetter}
        </h1>
        <div>
          <p className="website-text">{website}</p>
          <p className="username-text">{username}</p>
          <p className="username-text">{passwordText}</p>
        </div>
        <button
          onClick={this.onDeletePassword}
          className="delete-btn"
          type="button"
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png "
            alt="delete"
            className="delete-icon"
          />
        </button>
      </li>
    )
  }
}

export default PasswordItem
