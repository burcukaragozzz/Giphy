import React from 'react';
import './App.css';

class Search extends React.Component {
  constructor(props) {
    super(props);
        this.state = {
        searchText: ''
     }
  }

  onSearchChange(e) {
    this.setState({ searchText: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.onSearch(this.state.searchText);
    e.currentTarget.reset();
  }

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSubmit.bind(this)}>
        <input className="search-area"
               type="text"
               onChange={this.onSearchChange.bind(this)}
               ref="query"
               placeholder="  Search all the GIFs :)" />
        <button type="submit" id="submit" className="search-button">
          <img className="search-logo" src="search.png" alt="searchLogo" />
        </button>
      </form>
    );
  }
}

export default Search;
