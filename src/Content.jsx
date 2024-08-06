import React from 'react';

function Content(props) {
  return (
    <div style={props.styleMode}>
      <main>
        <p>{props.text1}</p>
        <p>{props.text2}</p>
        <p>{props.text3}</p>
      </main>
    </div>
  );
}

export default Content;

