import { useState } from 'react';
import './App.css';
import HomePage from './components/HomePage';
import Navigation from './components/Navigation';
import Style from './components/Style';
import TextColor from './components/TextColor';
import TextSize from './components/TextSize';
import { Routes, Route, Link } from 'react-router-dom';


function App() {

  const [textColor, setTextColor] = useState('black'); // מצב התחלתי לצבע טקסט
  const [textSize, setTextSize] = useState('16px');   // מצב התחלתי לגודל טקסט
  return (
    <div>
      <Navigation textColor={textColor} textSize={textSize}/>
      <Routes>
        <Route path="/homePage" element={<HomePage textColor={textColor} textSize={textSize}/>}/>
        <Route path="/style" element={<Style setTextColor={setTextColor} setTextSize={setTextSize}/>}>
          <Route path="textcolor" element={<TextColor setTextColor={setTextColor}/>}/>
          <Route path="textSize" element={<TextSize setTextSize={setTextSize}/>}/>
        </Route>
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
