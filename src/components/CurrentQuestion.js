import React from 'react';
import { connect } from "react-redux";

import questions from '../questions.conf.js';

const mapStateToProps = state => {
  return {
    state
  };
};

function Question(props) {
  return <section className="message -left">
      <div className="nes-balloon from-left">
        <p>{ questions[props.state.currentQuestion].question }</p>
      </div>
    </section>;
}
  
export default connect(mapStateToProps)(Question);