import React from 'react';

function Footer(props) {
  return (
    <div style={props.styleMode}>
      <footer>
        <p>Author: {props.author}</p>
        <p>Date: {props.date}</p>
      </footer>
    </div>
  );
}

export default Footer;


