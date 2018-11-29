import React, { Component } from 'react';
import './App.css';
import Comment from './components/Comment';
import List from './components/List';

let element = <h1>Welcome to React</h1>;

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      name: ''
    }
    this.items = [
      {value: 'Some arbitrary value goes here', id: 0},
      {value: 'Covalence is really hard.', id: 1},
      {value: 'But it\'s also really fun!', id: 2}
    ];
  }

  handleInputChange = (value) => {
    this.setState({name: value})
  };//when something changes in the input update this state

  render() {
    return (<>
      {element}
      <input 
        placeholder="What's your name?"
        value={this.state.name}
        onChange={(e) => this.handleInputChange(e.target.value)} 
      />
      <List items={this.items} />
      <Comment
        author={{ name: this.state.name, avatarUrl: 'https://scontent.fapa1-2.fna.fbcdn.net/v/t1.0-9/45500450_2097247793661341_7920028614194626560_n.jpg?_nc_cat=100&_nc_ht=scontent.fapa1-2.fna&oh=4d9829525619e260958d8fa729ac3857&oe=5CA846BF' }}
        text="Hi, this is what a husky begging looks like!"
      />
    </>
    );
  };
};

export default App;