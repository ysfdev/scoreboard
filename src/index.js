import React from 'react';
import ReactDOM from 'react-dom';
import Application from './App';
import './index.css';

//Default Initial players
const PLAYERS = [
  {
    name: "Mark Tree",
    score: 23
  },
  {
    name: "Jeremy Collins",
    score: 34
  },
  {
    name: "Ellen Marie",
    score: 42
  },
];

ReactDOM.render(
  <Application initialPlayers={PLAYERS}/>,
  document.getElementById('root')
);
