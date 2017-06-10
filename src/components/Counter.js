import React, { PropTypes } from 'react';

const Counter = props => {
  return (
     <div className="counter">
        <button 
          className="counter-action decrement" 
          onClick={function() {props.updatePlayerScore(props.index, -1) }}> 
          - 
        </button>
        <div className="counter-score"> {props.score} </div>
        <button 
          className="counter-action increment" 
          onClick={function() {props.updatePlayerScore(props.index, 1)}}> 
          + 
        </button>
      </div>
  )
}
  
Counter.PropTypes = {
    score: PropTypes.number.isRequired,
    updatePlayerScore: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
};

export default Counter;