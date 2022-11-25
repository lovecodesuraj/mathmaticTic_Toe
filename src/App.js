import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter , Route,Routes} from 'react-router-dom';
import Info from './components/info/info';

import Game from './game/game';

function App() {
 
  return (
    <>
  <BrowserRouter>
  < Routes>
  < Route exact path='/' element={<Info />} />
  < Route exact path='/game' element={<Game />} />
  </Routes>
  </BrowserRouter>
   
      
    </> 
  );
}

export default App;
