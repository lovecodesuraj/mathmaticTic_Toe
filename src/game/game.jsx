import './game.css';
import React, { useEffect } from "react";
import { useState } from "react";
import setStates from './js/setStates';
import getValue from './js/index';
import Header from './header';

function Game() {
  const [used, setUsed] = useState([]);
  const [game, setGame] = useState({ a: null, b: null, c: null, d: null, e: null, f: null, g: null, h: null, i: null });
  const [message, setMessage] = useState("");
  const [timeLeft, setTimeLeft] = useState(120);
  // const [reRender,setReRender]=useState();



  const handleChange = async (e) => {
    e.preventDefault();
    var value = e.target.value;
    const name = e.target.name;
    value = parseInt(value);
    console.log(value)
    setStates(game, setGame, used, setUsed, message, setMessage, name, value);

  }


  const aiTurn = (e) => {
    e.preventDefault();
    getValue(game, setGame, used, setUsed, setMessage);
    const arr = document.querySelectorAll(".input");
    arr.forEach(input => {
      if (!input.value) {
        input.readOnly = false;
      }
    })
  }
  const restart = (event) => {
    event.preventDefault();
    window.location.reload();
  }

  const timeOver = () => {
    setMessage("Time Over , You Lost !!!")
    document.getElementsByClassName("restartBtn")[0].style.display="block";
  }

  setTimeout(timeOver, 120000);

  // useEffect(()=>{
  //   setGame({ a: null,b: null, c: null, d: null,  e: null,f: null,g: null,h: null,i: null})
  //   setUsed([]);
  //   setMessage("")
  // },[reRender])


  return (
    <>
      {/* < Header /> */}
      <div className='game center' >
        <div className="restart"><button className="restartBtn" onClick={restart}>Restart</button></div>
        <div className='message center' >{message}</div>
        <div className="timer"><div className="fill"></div></div>


        <div className="gameBox center" id='gameBox'>
          <div className='row center'>
            <input id="a" type="number" className="input" name="a" onChange={handleChange} value={game.a} />
            <input id="b" type="number" className="input" name="b" onChange={handleChange} value={game.b} />
            <input id="c" type="number" className="input" name="c" onChange={handleChange} value={game.c} />
          </div>
          <div className='row center'>
            <input id="d" type="number" className="input" name="d" onChange={handleChange} value={game.d} />
            <input id="e" type="number" className="input" name="e" onChange={handleChange} value={game.e} />
            <input id="f" type="number" className="input" name="f" onChange={handleChange} value={game.f} />
          </div>
          <div className='row center'>
            <input id="g" type="number" className="input" name="g" onChange={handleChange} value={game.g} />
            <input id="h" type="number" className="input" name="h" onChange={handleChange} value={game.h} />
            <input id="i" type="number" className="input" name="i" onChange={handleChange} value={game.i} />
          </div>
          <button onClick={aiTurn} className="confirmBtn" id='confirmBtn'>Confirm</button>
        </div>

      </div>

    </>
  );
}

export default Game;
