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

      <button onClick={props.prev}>
        Pre
      </button>

      <button onClick={props.next}>
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
  }
}

// https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132
export default connect(mapStateToProps, mapDispatchToProps)(App);
