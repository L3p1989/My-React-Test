import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';

let element = <h1>Welcome to React</h1>;

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
  }

  onInputChange = (value) => {
    this.setState({name: value})
  }

  render() {
    return (<>
      {element}
      <input 
        placeholder="What's your name?"
        value={this.state.name}
        onChange={(e) => this.onInputChange(e.target.value)} 
      />
      <Comment
        author={{ name: this.state.name, avatarUrl: 'https://covalence.io/static/img/team/Jackson.jpg' }}
        text="Hi, thanks for listening to me say COMPONENT so. many. times!"
      />
    </>);
  }
}

export default App;