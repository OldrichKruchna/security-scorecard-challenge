import React from 'react';
import { connect } from "react-redux";

import './App.css';

import questions from './conf.js';

import SentencePreview from './SentencePreview.js';

function App(props) {
  return (
    <div>
      <SentencePreview></SentencePreview>
      <div>{ questions[props.state.currentQuestion].question }</div>

      <input type="text" value={props.state.words[props.state.currentQuestion]} onChange={(event) => props.handleChange(event, props.state.currentQuestion)} />

      <button onClick={props.prev} disabled={props.state.currentQuestion <= 0}>
        Pre
      </button>

      <button onClick={props.next} disabled={props.state.currentQuestion >= questions.length}>
        Next
      </button>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    state
  };
};

function mapDispatchToProps(dispatch) {
  return {
    prev: () => dispatch({ type: 'DECREMENT' }),
    next: () => dispatch({ type: 'INCREMENT' }),
    handleChange: (event, currentQuestion) => dispatch({ type: 'UPDATE_CURRENT_WORD', value: event.target.value, currentQuestion })
  }
}

// https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132
export default connect(mapStateToProps, mapDispatchToProps)(App);
