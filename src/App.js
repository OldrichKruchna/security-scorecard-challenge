import React from 'react';
import { connect } from "react-redux";

import './App.css';

import questions from './questions.conf.js';

import SentencePreview from './SentencePreview.js';

function App(props) {
  return (
    <div className="nes-container is-centered is-rounded">
      <div className="nes-field">
        <label htmlFor="question" className="nes-text">{questions[props.state.currentQuestion].question}</label>
        <input type="text" id="question" value={props.state.words[props.state.currentQuestion]} onChange={(event) => props.handleChange(event, props.state.currentQuestion)} className="nes-input"/>
      </div>

      <SentencePreview></SentencePreview>

      <button onClick={props.prev} disabled={props.state.currentQuestion <= 0} className="nes-btn">
        Previous
      </button>

      <button onClick={props.next} disabled={props.state.currentQuestion >= questions.length - 1} className="nes-btn">
        Next
      </button>

      <progress className="nes-progress" value="90" max={props.state.currentQuestion }></progress>
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
