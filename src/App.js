import React, { Component } from 'react';
import './App.css';
import List from './components/List';
import Item from './components/Item';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedItemId: null
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(id) {
    this.setState({clickedItemId: id});
  }

  render() {
    return (
      <React.Fragment>
        {this.state.clickedItemId === null ?
          <List handleClick={this.handleClick}/> :
          <Item id={this.state.clickedItemId} />
        }
        {/* <Item id={3} />
        <List /> */}
      </React.Fragment>
    );
  }
}

export default App;
