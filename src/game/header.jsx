import React, { useEffect, useState } from "react";

const Header=()=>{
  
    const [timeLeft,setTimeLeft]=useState(120);
    
    return(
        <>
           <div className="header center">
              <div className='heading'><h1>MathematTic Tac Toe</h1></div>
              <div className="timer center">
               <p>Time Left : </p>
               <p id="timer">{timeLeft}</p>
               
              </div>

           </div>
        </>
    )
}

export default Header;