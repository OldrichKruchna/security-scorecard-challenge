import React from 'react';
import { connect } from "react-redux";

import './App.css';

import questions from '../questions.conf.js';

import SentencePreview from './SentencePreview.js';
import CurrentQuestion from './CurrentQuestion.js';

function App(props) {
  return (
    <div className="wrapper">
      <main>
        <h1>Security<wbr/>Scorecard React And Redux Challenge</h1>
        <p>This is simple app which asks you 4 questions:</p>
        <ul>
          <li>Who?</li>
          <li>What?</li>
          <li>When?</li>
          <li>Where?</li>
        </ul>
      
        <p>Based on your 4 answers it composes final sentence.</p>

        <div className="nes-container with-title is-rounded">
          <p className="title">The Challenge</p>

          <div>
            <CurrentQuestion></CurrentQuestion>
            <i className="nes-mario"></i>
          </div>

          <div className="answers">
            <SentencePreview></SentencePreview>
            <i className="nes-kirby"></i>
          </div>
          
          <div className="controls">
            <div className="nes-field input-wrapper">
              <label htmlFor="question" className="nes-text">Answer the question - {questions[props.state.currentQuestion].question}</label>
              <input type="text" id="question" value={props.state.words[props.state.currentQuestion]} onChange={(event) => props.handleChange(event, props.state.currentQuestion)} className="nes-input" autoFocus/>
            </div>

            <div className="buttons">
              <button onClick={props.prev} disabled={props.state.currentQuestion <= 0} className={`${props.state.currentQuestion <= 0 ? 'is-disabled' : ''} nes-btn btn`}>
                Previous
              </button>

              <button onClick={props.next} disabled={props.state.currentQuestion >= questions.length - 1} className={`${props.state.currentQuestion >= questions.length - 1 ? 'is-disabled' : ''} nes-btn is-primary btn`}>
                Next
              </button>
            </div> 
          </div>
        </div>
      </main>

      <footer>
        <div className="github">
          <a href="https://github.com/OldrichKruchna/security-scoreboard-challenge">
            <i className="nes-icon github is-large"></i>
          </a>
        </div>
        <p className="author">Oldrich Kruchna</p>
      </footer>
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
