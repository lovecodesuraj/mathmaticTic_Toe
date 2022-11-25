import React from "react";
import { Link } from "react-router-dom";
import "./info.css"

const Info=()=>{
    return(
        <>
        <div className="info center">
            <h3>
                Rules
            </h3>
            <p>
                Hello Bravo Welcome to MATHMATICA TICTOE <br />
                To win the game you have to stop check mate the AI in 2 minutes. <br />
                AI will win if it will be able to adds up any three cells (horizontally,vertically,diagonally) to give a value of 15. <br />
                Note : Once you entered the value you would not be able to change it so be sure before entering the value. <br />
                
                To start the game cick on continue.
                  
            </p>
           <Link className="link " to="/game">Continue</Link>
        </div>
       
        </>
    )
}

export default Info