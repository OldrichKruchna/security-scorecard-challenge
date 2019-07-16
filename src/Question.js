import React from 'react';

function Question(props) {
  return <section className="message -left">
      <div className="nes-balloon from-left">
        <p>{ props.question }</p>
      </div>
    </section>;
}
  
export default Question;