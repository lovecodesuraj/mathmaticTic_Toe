import { useLayoutEffect } from "react";


import fun from "./fun.js";
import checkWinCondition from "./checkWinCondition";



const fun1 = (game, used, cell1, cell2, cell3, cell4, cell5, cell6) => {

    const possHori = fun(cell1, cell2, used);
    const possDown = fun(cell3, cell4, used);
    const possDia = fun(cell5, cell6, used);

    var filter1 = possHori.filter(value => possDown.includes(value));
    var filter2 = filter1.filter(value => possDia.includes(value));
    var final = filter2.filter(val => !used.includes(val) && val > 0 && val < 10)




    const totalPossibleMoves = final;
    var result;
    if (totalPossibleMoves.length === 0) {
        result = 0;
    } else {
        result = totalPossibleMoves.filter(move => move > 0 && move < 10);
        const index = Math.floor(Math.random() * result.length)
        console.log("index is ", index)
        result = result[index];
    }

    return result;

}
const fun2 = (game, used, cell1, cell2, cell3, cell4) => {

    const possHori = fun(cell1, cell2, used);
    const possDown = fun(cell3, cell4, used);
    // const possDia = fun(game.e,game.i,used);

    var filter1 = possHori.filter(value => possDown.includes(value));
    var final = filter1.filter(val => !used.includes(val) && val > 0 && val < 10);
    //  var filter2=filter1.filter(value=>possDia.includes(value));




    const totalPossibleMoves = final;
    var result;
    if (totalPossibleMoves.length === 0) {
        result = 0;
    } else {
        result = totalPossibleMoves.filter(move => move > 0 && move < 10);
        const index = Math.floor(Math.random() * result.length)
        console.log("index is ", index)
        result = result[index];
    }

    return result;

}

const fun3 = (game, used, cell1, cell2, cell3, cell4, cell5, cell6, cell7, cell8) => {

    const possHori = fun(cell1, cell2, used);
    const possDown = fun(cell3, cell4, used);
    const possDia1 = fun(cell5, cell6, used);
    const possDia2 = fun(cell7, cell8, used);

    var filter1 = possHori.filter(value => possDown.includes(value));
    var filter2 = filter1.filter(value => possDia1.includes(value));
    var filter3 = filter2.filter(value => possDia2.includes(value));
    var final = filter3.filter(val => !used.includes(val) && val > 0 && val < 10);





    const totalPossibleMoves = final;
    var result;
    if (totalPossibleMoves.length === 0) {
        result = 0;
    } else {
        result = totalPossibleMoves.filter(move => move > 0 && move < 10);
        const index = Math.floor(Math.random() * result.length)
        console.log("index is ", index)
        result = result[index];
    }

    return result;

}




const getValue = (game, setGame, used, setUsed, setMessage) => {

    const winCond = checkWinCondition(game, used, setGame);
    if (winCond != 0) {
        var trio = [winCond.cell1, winCond.cell2, winCond.cell3];
        const cell1 = document.getElementById(trio[0]).style.backgroundColor = "red";
        const cell2 = document.getElementById(trio[1]).style.backgroundColor = "red";
        const cell3 = document.getElementById(trio[2]).style.backgroundColor = "red";
        setMessage("You Lost !!!")
        document.getElementsByClassName("restartBtn")[0].style.display = "block"
        document.getElementsByClassName("fill")[0].style.display = "none";

        return;
    }

    var i = 0;
    //first move
    if (used.length === 1) {
        if (game.a) { i = 6 }
        else if (game.b) { i = 4 }
        else if (game.c) { i = 4 }
        else if (game.d) { i = 2 }
        else if (game.e) { i = 0 }
        else if (game.f) { i = 1 }
        else if (game.g) { i = 2 }
        else if (game.h) { i = 3 }
        else { i = 4 }
    }
    for (i; i < 10; i++) {
        if (i == 1) {
            if (!game.a) {
                console.log("at location a")
                const val = fun1(game, used, game.b, game.c, game.d, game.g, game.e, game.i);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["a"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })

                    break;
                }

            }
        }
        else if (i == 2) {
            if (!game.b) {
                console.log("at location b")
                const val = fun2(game, used, game.a, game.c, game.e, game.h);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["b"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                }

            }
        }
        else if (i == 3) {
            if (!game.c) {
                console.log("at location c")

                const val = fun1(game, used, game.a, game.b, game.f, game.i, game.e, game.g);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["c"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                }

            }
        }
        else if (i == 4) {
            if (!game.d) {
                console.log("at location d")

                const val = fun2(game, used, game.e, game.f, game.a, game.g);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["d"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                }

            }
        }
        else if (i == 5) {
            if (!game.e) {
                console.log("at location e")

                const val = fun3(game, used, game.d, game.f, game.b, game.h, game.a, game.i, game.c, game.g); if (val == 0) {
                    if (!val == 0) {
                        setGame(prev => {
                            return {
                                ...prev,
                                ["e"]: val,
                            }
                        })
                        setUsed(prev => {
                            return [...prev, val]
                        })
                        break;
                    }

                }

            }
        }
        else if (i == 6) {
            if (!game.f) {
                console.log("at location f")

                const val = fun2(game, used, game.d, game.e, game.c, game.i);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["f"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                }

            }
        }

        else if (i == 7) {
            if (!game.g) {
                console.log("at location g")

                const val = fun1(game, used, game.h, game.i, game.a, game.d, game.e, game.c);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["g"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                }

            }
        }

        else if (i == 8) {
            if (!game.h) {
                console.log("at location h")

                const val = fun2(game, used, game.g, game.i, game.b, game.e);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["h"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                }

            }
        }

        else if (i == 9) {
            if (!game.i) {
                console.log("at location i")

                const val = fun1(game, used, game.g, game.h, game.c, game.f, game.a, game.e);
                if (!val == 0) {
                    setGame(prev => {
                        return {
                            ...prev,
                            ["i"]: val,
                        }
                    })
                    setUsed(prev => {
                        return [...prev, val]
                    })
                    break;
                } else {
                    setMessage("You won there is no safe move for AI !!!")
                    document.getElementsByClassName("restartBtn")[0].style.display = "block";
                    document.getElementsByClassName("fill")[0].style.width = "0px";
                }
            }
        }
    }



}


export default getValue;



