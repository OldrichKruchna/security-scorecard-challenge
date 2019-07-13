import React from "react";
import { connect } from "react-redux";

const SentencePreview = props => {
    return (
      <div>{ props.state.words.join(' ') }</div>
    );
};

const mapStateToProps = state => {
    return {
      state: state
    };
};

// https://medium.com/@atomarranger/redux-mapstatetoprops-and-mapdispatchtoprops-shorthand-67d6cd78f132
export default connect(mapStateToProps)(SentencePreview);