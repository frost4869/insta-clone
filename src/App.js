import React, { Component } from 'react';
import './App.css';
import logo from './ista-icon.png';
import test_data from './test.json'
import InstaList from './InstaList.js'
import InstaContainer from './InstaContainer'

const TOKEN = "1714265427.8abc941.64589328a4a04cd89453fb9e4606610f";
const clientId = "8abc941757a84a07ad84e33d86ebdd19";

class App extends Component {

  constructor(props){
    console.log("test data", test_data);
    super(props);
    this.state = {
      state: '',
      posts: test_data,
      token: ''
    }
  }

  componentWillMount() {
    const key = 'TOKEN';
    console.log('mounted')
    const existingToken = sessionStorage.getItem(key);
    console.log(existingToken);
    const accessToken = window.location.hash.split("=")[1];
    console.log(accessToken);
    const oathUrl = `https://www.instagram.com/oauth/authorize/?client_id=${clientId}&redirect_uri=http://localhost:3000&response_type=token`

    if (!accessToken && !existingToken) {
      window.location.replace(oathUrl);
    }

    if (accessToken) {
      console.log(`New access token: ${accessToken}`);
      sessionStorage.setItem(key, accessToken);
      this.setState({
        token: accessToken
      })
    }

    if (existingToken) {
      this.setState({
        token: existingToken
      })
    }
  }
  render() {
    console.log('App.render')
    const toggleState = () => {
      const newState = this.state.title ? null : 'Toggle state';
      this.setState({
        title: newState,

      })
    }
    return (
      <div className="App">
        <header className="App-header">
          <a href="#" onClick={toggleState}>
            <img src={logo} className="App-logo" alt="logo" />
          </a>
          <h1 className="App-title">{this.state.title || this.props.title}</h1>
        </header>

        <InstaContainer token={this.state.token}/>
      </div>
    );
  }
}

export default App;
