import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';

//TODO Finish other tests
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Application initialPlayers={[]} />, div);
});
