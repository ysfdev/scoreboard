import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import * as  PlayerActionCreators from '../actions/player';
import { connect } from 'react-redux';
import AddPlayerForm from '../components/AddPlayerForm';
import Player from '../components/Player';
import Header from '../components/Header';

class Scoreboard extends Component {
  static propTypes = {
      title: PropTypes.string,
      players: PropTypes.arrayOf(PropTypes.shape({
          name: PropTypes.string.isRequired,
          score: PropTypes.number.isRequired
         })).isRequired,
    };
  static defaultProps = { title : "Scoreboard" };
  
  render() {
    const {dispatch, players} = this.props;
    const addPlayer = bindActionCreators(PlayerActionCreators.addPlayer, dispatch);
    const removePlayer = bindActionCreators(PlayerActionCreators.removePlayer, dispatch);
    const updatePlayerScore = bindActionCreators(PlayerActionCreators.updatePlayerScore, dispatch);

    const playerComponents = players.map((player, index) => {
      return <Player 
        index={index}
        name={player.name}
        score={player.score}
        key={player.name}
        updatePlayerScore={updatePlayerScore}
        removePlayer={removePlayer}
      />
    })
    return (
       <div className="scoreboard">
         <Header title={this.props.title} players={players} />
         <div className="players">
          { playerComponents }
      </div>
        <AddPlayerForm addPlayer={addPlayer}/>
    </div>
  )
  }  
}

const mapStateToProps = state => {
   return {
     players : state
   };
};

export default connect(mapStateToProps)(Scoreboard);