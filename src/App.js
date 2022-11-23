import logo from './logo.svg';
import './App.css';
import React from "react";
import {useState} from "react";

function App() {
  const [game,setGame]=useState({
    a:Number,
    b:Number,
    c:Number,
    d:Number,
    e:Number,
    f:Number,
    g:Number,
    h:Number,
    i:Number,
  });
  const [message,setMessage]=useState("");

  const handleChange=(e)=>{
    e.preventDefault();
    const value=e.target.value;
    const name=e.target.name;
    if(value>9 || value<1){
      setMessage("invalid input : input must be in the range of 1 to 9");
      setGame(prev=>{ 
        return{
          ...prev,
          [name]:''
        }
      })
   }
   else{
    setGame(prev=>{ 
      return{
        ...prev,
        [name]:value,
      }
    })
    setMessage("");
   }
    

  }

  return (
    <>
     <div className='game center'>
      <div className='message center' >{message}</div>
     <div className="gameBox center" id='gameBox'>
        <div className='row center'>
        <input id="a" type="number"  className="input" name="a" onChange={handleChange} value={game.a} />
        <input id="b" type="number"  className="input" name="b" onChange={handleChange} value={game.b} />
        <input id="c" type="number"  className="input" name="c" onChange={handleChange} value={game.c} />
        </div>
        <div className='row center'>
        <input id="d" type="number"  className="input" name="d" onChange={handleChange} value={game.d} />
        <input id="e" type="number"  className="input" name="e" onChange={handleChange} value={game.e} />
        <input id="f" type="number"  className="input" name="f" onChange={handleChange} value={game.f} />
        </div>
        <div className='row center'>
        <input id="g" type="number"  className="input" name="g" onChange={handleChange} value={game.g} />
        <input id="h" type="number"  className="input" name="h" onChange={handleChange} value={game.h} />
        <input id="i" type="number"  className="input" name="i" onChange={handleChange} value={game.i} />
        </div>
    
      </div>
     </div>
      
    </> 
  );
}

export default App;
