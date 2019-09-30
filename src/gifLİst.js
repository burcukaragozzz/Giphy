import React from 'react';
import './App.css';
import Gif from './gif';
import NoGifs from './noGifs';


class GifList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
       loadingState: false,
       offset: 0,
     };
   }

  componentDidMount() {
    const gifContainer = document.querySelector('#gifContainer');

    gifContainer.addEventListener("scroll", () => {
      if(gifContainer.scrollHeight === gifContainer.clientHeight + gifContainer.scrollTop) {
        this.loadMoreItems();
      }
    });
  }

  loadMoreItems() {
    const { data, setGiflist } = this.props;

    if(this.state.loadingState){
      return;
    }

    this.setState(prevState => ({
      offset: prevState.offset + 1,
      loadingState: true,
    }));
 
    setTimeout(() => {
      fetch('https://api.giphy.com/v1/gifs/trending?&offset=' + this.state.offset + '&limit=20&api_key=dc6zaTOxFJmzC')
      .then(response => response.json())
      .then(responseData => {
        setGiflist(data.concat(responseData.data))
      })
      .catch(error => {
        console.log(error);
      }); 
      this.setState({ gifs: this.props.gifs, loadingState: false });
    }, 1000);
  }

  render() {
    const results = this.props.data;
    let gifs;
    if(results.length > 0 ){
      gifs = results.map((gif, index) => <Gif url={gif.images.fixed_height.url} key={index} />);
    }
    else{
      gifs= <NoGifs/>
    }
                           
    return (
      <div id="gifContainer" style={{ height: "calc(100vh - 76px)", overflow: "auto", marginTop: '10px' }}>
        <ul className="gif-list">
          { gifs }
        </ul>
        {this.state.loadingState ? <p className="loading"> loading More Items..</p> : ""}
      </div>
    );
  }
}

export default GifList;
