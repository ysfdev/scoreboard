import React, { Component } from 'react';
import './App.css';
import Stopwatch from './components/Stopwatch';
import AddPlayerForm from './components/AddPlayerForm';

function Stats(props) {
  let totalPlayers = props.players.length;
  let totalPoints = props.players.reduce(function(total, player) {
    return total + player.score;
  }, 0)
  return (
    <table className="stats">
      <tbody>
        <tr>
          <td>Players: </td>
          <td>{totalPlayers}</td>
        </tr>
        <tr>
          <td>Total Points:</td>
          <td>{totalPoints}</td>
        </tr>
      </tbody>
    </table> 
  );
}
  
Stats.proTypes = {
  players: React.PropTypes.array.isRequired,
};

function Header(props) {
  return (
    <div className="header">
      <Stats players={props.players}/>
      <h1>{props.title}</h1>
      <Stopwatch />
    </div>
  );
}

Header.propTypes = {
  title: React.PropTypes.string.isRequired,
  players: React.PropTypes.array.isRequired,
};

function Counter(props) {
  return (
     <div className="counter">
        <button className="counter-action decrement" onClick={function() {props.onChange(-1);}}> - </button>
        <div className="counter-score"> {props.score} </div>
        <button className="counter-action increment" onClick={function() {props.onChange(1);}}> + </button>
      </div>
  )
}
  
Counter.PropTypes = {
    score: React.PropTypes.number.isRequired,
    onChange: React.PropTypes.func.isRequired,
  }
  
function Player(props) {
  return (
    <div className="player">
      <div className="player-name">
        <a className="remove-player" onClick={props.onRemove}>X</a>
        {props.name}
      </div>
      <div className="player-score">
        <Counter score={props.score} onChange={props.onScoreChange}/>
      </div>
    </div>
  );
}

Player.propTypes = {
  name: React.PropTypes.string.isRequired,
  score: React.PropTypes.number.isRequired,
  onScoreChange: React.PropTypes.func.isRequired,
  onRemove: React.PropTypes.func.isRequired,
};

class Application extends Component {
  static propTypes = {
      title: React.PropTypes.string,
      initialPlayers: React.PropTypes.arrayOf(React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          score: React.PropTypes.number.isRequired
        })).isRequired,
    };
  static defaultProps = { title : "Scoreboard" };
  
  constructor(props) {
    super(props);
    this.state = {
      players: this.props.initialPlayers
    };
  
    this.onScoreChange = this.onScoreChange.bind(this);
    this.onRemovePlayer = this.onRemovePlayer.bind(this);
    this.onPlayerAdd = this.onPlayerAdd.bind(this);
  }
  
  
  onScoreChange (index, delta) {
    // eslint-disable-next-line
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onRemovePlayer(index) {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  onPlayerAdd(name) {
    this.state.players.push({
      name: name,
      score: 0
    })
    this.setState(this.state);
  }
    
  render() {
    return (
       <div className="scoreboard">
         <Header title={this.props.title} players={this.state.players} />
    
         <div className="players">
          {this.state.players.map(function(player, index) {
          return (
            <Player 
              onScoreChange={function(delta) {this.onScoreChange(index, delta)}.bind(this)}
              onRemove={function() {this.onRemovePlayer(index)}.bind(this)}
              name={player.name} 
              score={player.score} 
              key={"playerIndex" + index} />
          );
        }.bind(this))}
      </div>
        <AddPlayerForm onAdd={this.onPlayerAdd}/>
    </div>
  )
  }  
}

export default Application;
