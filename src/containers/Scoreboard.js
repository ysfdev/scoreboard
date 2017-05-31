import React, { Component, PropTypes } from 'react';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';

export default class Scoreboard extends Component {
  static propTypes = {
      title: PropTypes.string,
      initialPlayers: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          score: PropTypes.number.isRequired
        })).isRequired,
    };
  static defaultProps = { title : "Scoreboard" };
  
  state = {
    players : this.props.initialPlayers
  }
  
  onScoreChange = (index, delta) => {
    // eslint-disable-next-line
    this.state.players[index].score += delta;
    this.setState(this.state);
  }

  onRemovePlayer = index => {
    this.state.players.splice(index, 1);
    this.setState(this.state);
  }

  onPlayerAdd = name => {
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

