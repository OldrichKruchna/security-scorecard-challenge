import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
    return {
      state
    };
};

class SentencePreview extends React.Component {
  selectWord(index) {
    this.props.dispatch({ type: 'SET', index });
  }

  isActive(index) {
    return this.props.state.currentQuestion === index ? 'is-error' : '';
  }

  renderWords(props) {
    return <section className="message -right">
      <div className="nes-balloon from-right">
        <p>{props.state.words.map((word, index) => {
          return <span onClick={this.selectWord.bind(this, index)}
                      className={`${this.isActive(index)} nes-text`}
                      key={index}>{word || '...'} </span>
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

// https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132
export default connect(mapStateToProps)(SentencePreview);