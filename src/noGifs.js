import React from 'react';
import './App.css';

class NoGifs extends React.Component {
  render()
   {
    return (
        <p className="noGifs-message">Sorry, no GIFs match your search. </p>
     );
   }
}
export default NoGifs;