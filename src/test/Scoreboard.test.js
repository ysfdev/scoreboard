import React from 'react';
import ReactDOM from 'react-dom';
import Scoreboard from '../Scoreboard';

//TODO Finish other tests
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Scoreboard initialPlayers={[]} />, div);
});
