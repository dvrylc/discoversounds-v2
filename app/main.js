import React from 'react';
import ReactDOM from 'react-dom';

import './style.scss';

import SearchBox from './components/searchBox';

class App extends React.Component {
  constructor() {
    super();
    
    this.handleRelatedArtists = this.handleRelatedArtists.bind(this);
    
    this.state = {
      relatedArtists: []
    }
  }
  
  // Event listeners
  handleRelatedArtists(artists) {
    this.setState({
      relatedArtists: artists
    });
  }
  
  render() {
    return (
      <div>
        <SearchBox handleRelatedArtists={this.handleRelatedArtists} />
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
