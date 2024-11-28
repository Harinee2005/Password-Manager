import {Component} from 'react'
import {v4} from 'uuid'
import PasswordItem from '../PasswordItem'
import './index.css'

class PasswordManager extends Component {
  state = {
    passwordList: [],
    website: '',
    username: '',
    password: '',
    isPasswordShowing: false,
    searchText: '',
  }

  onDelete = id => {
    const {passwordList} = this.state
    const filteredList = passwordList.filter(eachList => eachList.id !== id)
    this.setState({passwordList: filteredList})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {website, username, password, passwordList} = this.state
    const newPasswordData = {id: v4(), website, username, password}
    this.setState({
      passwordList: [...passwordList, newPasswordData],
      website: '',
      username: '',
      password: '',
    })
  }

  onSearch = event => {
    this.setState({searchText: event.target.value})
  }

  inputWebsite = event => {
    this.setState({website: event.target.value})
  }

  inputUsername = event => {
    this.setState({username: event.target.value})
  }

  inputPassword = event => {
    this.setState({password: event.target.value})
  }

  showPass = () => {
    this.setState(prevState => ({
      isPasswordShowing: !prevState.isPasswordShowing,
    }))
  }

  render() {
    const {username, website, password, searchText} = this.state
    const {passwordList, isPasswordShowing} = this.state
    const newPasswordList = passwordList.filter(eachList =>
      eachList.website.toLowerCase().includes(searchText.toLowerCase()),
    )

    return (
      <div className="background">
        <img
          src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          alt="app logo"
          className="app-logo"
        />
        <div className="background-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/password-manager-sm-img.png"
            alt=" password manager"
            className="img-pass-manager"
          />
          <form onSubmit={this.onSubmitForm} className="bg-sub-container">
            <h1 className="sub-title">Add New Password</h1>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                alt="website"
                className="input-icon"
              />

              <input
                className="input-tag"
                value={website}
                type="text"
                placeholder="Enter Website"
                onChange={this.inputWebsite}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                alt="username"
                className="input-icon"
              />

              <input
                className="input-tag"
                type="text"
                value={username}
                placeholder="Enter Username"
                onChange={this.inputUsername}
              />
            </div>
            <div className="input-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                alt="password"
                className="input-icon"
              />

              <input
                className="input-tag"
                value={password}
                type="password"
                placeholder="Enter Password"
                onChange={this.inputPassword}
              />
            </div>
            <button className="btn" type="submit">
              Add
            </button>
          </form>
        </div>
        <div className="background-password-container">
          <div className="password-line">
            <h1 className="pass-title">
              Your Passwords <p className="count-pass">{passwordList.length}</p>
            </h1>
            <div className="input-search-container">
              <img
                src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                alt="search"
                className="input-search-icon"
              />

              <input
                className="input-search-tag"
                type="search"
                placeholder="Search"
                onChange={this.onSearch}
              />
            </div>
          </div>
          <hr />
          <div className="show-pass">
            <input id="checkbox" type="checkbox" onChange={this.showPass} />
            <label htmlFor="checkbox" className="show-pass-text">
              Show passwords
            </label>
          </div>
          <ul className="passContainer">
            {newPasswordList.length > 0 ? (
              newPasswordList.map(eachList => (
                <PasswordItem
                  details={eachList}
                  key={eachList.id}
                  showPass={isPasswordShowing}
                  ondelete={this.onDelete}
                />
              ))
            ) : (
              <li className="no-pass-cont">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
                  alt="no passwords"
                  className="no-pass-img"
                />
                <p className="sub-title">No Passwords</p>
              </li>
            )}
          </ul>
        </div>
      </div>
    )
  }
}

export default PasswordManager
