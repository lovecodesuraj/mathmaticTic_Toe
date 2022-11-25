const checkWinCondition = (game, used,setGame) => {

    if (game.b && game.c && !game.a) {
        const val = 15 - game.a - game.b;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["a"]: val,
                }
            })
        return { cell1: "a", cell2: "b", cell3: "c" }}
    }
    if (game.d && game.g && !game.a) {
        const val = 15 - game.d - game.g;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["a"]: val,
                }
            })
        return { cell1: "a", cell2: "d", cell3: "g" }}

    }
    if (game.e && game.i && !game.a) {
        const val = 15 - game.e - game.i;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["a"]: val,
                }
            })
        return { cell1: "a", cell2: "e", cell3: "i" }}

    }

    if (game.a && game.c && !game.b) {
        const val = 15 -( game.a + game.c);console.log("added value is",val);
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["b"]: val,
                }
            })
        return { cell1: "a", cell2: "b", cell3: "c" }}

    }
    if (game.e && game.h && !game.b) {
        const val = 15 - game.e - game.h;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["b"]: val,
                }
            })
        return { cell1: "b", cell2: "e", cell3: "h" }}

    }

    if (game.a && game.b && !game.c) {
        const val = 15 - game.a - game.b;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["c"]: val,
                }
            })
        return { cell1: "a", cell2: "b", cell3: "c" }}

    }
    if (game.f && game.i && !game.c) {
        const val = 15 - game.f - game.i;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["c"]: val,
                }
            })
        return { cell1: "f", cell2: "i", cell3: "c" }}

    }
    if (game.e && game.g && !game.c) {
        const val = 15 - game.e - game.g;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["c"]: val,
                }
            })
        return { cell1: "e", cell2: "g", cell3: "c" }}

    }

    if (game.e && game.f && !game.d) {
        const val = 15 - game.e - game.f;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["d"]: val,
                }
            })
        return { cell1: "e", cell2: "f", cell3: "d" }}

    }

    if (game.a && game.g && !game.d) {
        const val = 15 - game.a - game.g;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["d"]: val,
                }
            })
        return { cell1: "a", cell2: "g", cell3: "d" }}

    }
    if (game.d && game.f && !game.e) {
        const val = 15 - game.d - game.f;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["e"]: val,
                }
            })
        return { cell1: "d", cell2: "f", cell3: "e" }}

    }
    if (game.b && game.h && !game.e) {
        const val = 15 - game.b - game.h;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["e"]: val,
                }
            })
        return { cell1: "b", cell2: "h", cell3: "e" }}

    }
    if (game.a && game.i && !game.e) {
        const val = 15 - game.a - game.i;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["e"]: val,
                }
            })
        return { cell1: "a", cell2: "i", cell3: "e" }}

    }
    if (game.c && game.g && !game.e) {
        const val = 15 - game.c - game.g;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["e"]: val,
                }
            })
        return { cell1: "c", cell2: "g", cell3: "e" }}

    }
    if (game.d && game.e && !game.f) {
        const val = 15 - game.d - game.e;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["f"]: val,
                }
            })
        return { cell1: "d", cell2: "e", cell3: "f" }}

    }
    if (game.c && game.i && !game.f) {
        const val = 15 - game.c - game.i;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["f"]: val,
                }
            })
            return { cell1: "c", cell2: "i", cell3: "f" }}

    }
    if (game.h && game.i && !game.g) {
        const val = 15 - game.h - game.i;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["g"]: val,
                }
            })
            return { cell1: "h", cell2: "i", cell3: "g" }}

    }
    if (game.a && game.d && !game.g) {
        const val = 15 - game.a - game.d;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["g"]: val,
                }
            })
            return { cell1: "a", cell2: "d", cell3: "g" }}

    }
    if (game.c && game.e && !game.g) {
        const val = 15 - game.c - game.e;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["g"]: val,
                }
            })
            return { cell1: "c", cell2: "e", cell3: "g" }}

    }
    if (game.g && game.i && !game.h) {
        const val = 15 - game.g - game.i;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["h"]: val,
                }
            })
            return { cell1: "g", cell2: "i", cell3: "h" }}

    }
    if (game.b && game.e && !game.h) {
        const val = 15 - game.b - game.e;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["h"]: val,
                }
            })
            return { cell1: "b", cell2: "e", cell3: "h" }}

    }
    if (game.g && game.h && !game.i) {
        const val = 15 - game.g - game.h;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["i"]: val,
                }
            })
            return { cell1: "g", cell2: "i", cell3: "h" }}

    }
    if (game.c && game.f && !game.i) {
        const val = 15 - game.c - game.f;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["i"]: val,
                }
            })
            return { cell1: "c", cell2: "f", cell3: "i" }}

    }
    if (game.a && game.e && !game.i) {
        const val = 15 - game.a - game.e;
        if (!used.includes(val) && val > 0 && val < 10){
            setGame(prev => {
                return {
                    ...prev,
                    ["i"]: val,
                }
            })
            return { cell1: "a", cell2: "e", cell3: "i" }}

    }
    return 0;
}

export default checkWinCondition;
