import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import GifList from './gifLİst';
import Search from './searchForm';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: [],
    }
  }

  componentDidMount() {
    fetch('https://api.giphy.com/v1/gifs/trending?&offset=0&limit=20&api_key=dc6zaTOxFJmzC')
    .then(response => response.json())
    .then(responseData => {
      this.setState({gifs: responseData.data, });
    })
    .catch(error => {
      console.log(error);
    });  
  }

  setGiflist = newData => {
    this.setState({
      gifs: newData,
    })
  }

  performSearch(query) {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${query}&limit=20&api_key=dc6zaTOxFJmzC`)
      .then(response => response.json())
      .then(responseData => {
        this.setState({gifs: responseData.data });
      })
      .catch(error => {
        console.log(error);
      });
  }
  
  render() {
    return (
      <div>
        <div className="header">
          <img className="header-logo" src="giphyLogo.jpeg" alt="headerLogo" />
          <Search 
            onSearch={this.performSearch.bind(this)} 
          />
        </div>
        <GifList data={this.state.gifs} setGiflist={this.setGiflist} />
      </div>
    );
  }
}

ReactDOM.render(
  <App dataURL='https://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC'/>,
  document.getElementById('root')
);

export default App;
