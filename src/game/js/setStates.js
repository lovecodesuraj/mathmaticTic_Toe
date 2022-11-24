import getValue from "./index";

const setStates=async (game,setGame,used,setUsed,message,setMessage,name,value)=>{
    if (value > 9 || value < 1) {
        setMessage("invalid input : input must be in the range of 1 to 9");
        setGame(prev => {
          return {
            ...prev,
            [name]: ''
          }
        })
      }
      else if (used.includes(value)) {
        setMessage("Inserted value is already used!");
        setGame(prev => {
          return {
            ...prev,
            [name]: ''
          }
        })
      }
      else {
        setGame(prev => {
          return {
            ...prev,
            [name]: value,
          }
        });
  
        setUsed(prev => {
          return [
            ...prev,
            value
          ]
        })
  
        setMessage("");
       const arr= document.querySelectorAll(".input");
       arr.forEach(input=>{
        input.readOnly=true;
      })
       
      }
      // getValue(game,setGame,used,setUsed);
}

export default setStates;