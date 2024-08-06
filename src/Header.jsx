import React from 'react';

function Header(props) {
  return (
    <div style={props.styleMode}>
      <header>
        <h1>{props.title}</h1>
        <img src={props.imageSrc} alt={props.imageAlt} />
      </header>
    </div>
  );
}

export default Header;

