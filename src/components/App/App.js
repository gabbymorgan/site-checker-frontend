import React, { Component } from 'react';
import { Route, withRouter } from 'react-router-dom';
import axios from 'axios';
import Searchbar from '../Searchbar/Searchbar';
import Results from '../Results/Results';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {}
    } 
    this.search = this.search.bind(this);
  }
  search(search) {
    axios
    .get(`http://shrouded-anchorage-71788.herokuapp.com/?url=${search}`)
    .then(response => {
      const data = response.data;
      this.setState({
          url: search,
          data,
      });
    }).then(() => {
      this.props.history.push('/results')
    }).catch(err => {
        console.log(err);
    });
  }
  render() {
    return (
      <div className="App">
        <Route exact path='/' render={() => <Searchbar search={this.search}/>}/>
        <Route path='/results' render={() => <Results data={this.state.data} url={this.state.url}/>}/>
      </div>
    );
  }
}

export default withRouter(App);
