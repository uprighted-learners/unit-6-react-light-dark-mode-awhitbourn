import React, { useState } from 'react';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import './App.css'; // For any global styles

// Define the style objects
const darkMode = {
  backgroundColor: 'black',
  color: 'white'
};

const lightMode = {
  backgroundColor: 'white',
  color: 'black'
};

function App() {
  // Create the state variable for styleMode
  const [styleMode, setStyleMode] = useState(lightMode);

  // Toggle function for changing the styleMode
  const toggleStyleMode = () => {
    setStyleMode(styleMode === lightMode ? darkMode : lightMode);
  };

  return (
    <div style={styleMode}>
      <button onClick={toggleStyleMode}>
        Toggle {styleMode === darkMode ? 'Light' : 'Dark'} Mode
      </button>
      <Header styleMode={styleMode} title="My Website" imageSrc="path/to/image.jpg" imageAlt="Description of image" />
      <Content styleMode={styleMode} text1="This is the first paragraph of content." text2="This is the second paragraph of content." text3="This is the third paragraph of content." />
      <Footer styleMode={styleMode} author="John Doe" date="August 6, 2024" />
    </div>
  );
}

export default App;


