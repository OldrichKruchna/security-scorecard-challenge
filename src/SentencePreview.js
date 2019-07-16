import React from "react";
import { connect } from "react-redux";

import './SentencePreview.css';

const mapStateToProps = state => {
    return {
      state
    };
};

class SentencePreview extends React.Component {
  selectWord(index) {
    this.props.dispatch({ type: 'SET', index });
  }

  renderWords(props) {
    return <section className="message -right">
      <div className="nes-balloon from-right">
        <p>{props.state.words.map((word, index) => {
          return <span onClick={this.selectWord.bind(this, index)} className={`${props.state.currentQuestion === index ? 'is-error' : ''} nes-text`} key={index}>{word || '...'} </span>
        })}</p>
      </div>
    </section>;
  }

  render() {
    return  (
      <div>{ this.renderWords(this.props) }</div>
    );
  }
}

// export default Detail;

// https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132
export default connect(mapStateToProps)(SentencePreview);