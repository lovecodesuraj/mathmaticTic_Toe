



const fun1 = (game, used) => {
    const funRight = () => {
        var possibilitiesOfFunRight = [];
        if (game.b && game.c) {
            const sum = game.b + game.c;
            //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }

           //so safe cond
           for(var i=1;i<10;i++){
            possibilitiesOfFunRight.push(i);
           }



        }
        else if (game.b) {


            //for x+1+game.b>15
            for (var i = 15 - game.b; i < 10; i++) {
                possibilitiesOfFunRight.push(i);
            }

            //for x+9+game.b<15

            for (var i = 15 - game.b - 1 - 1; i >= 1; i--) {
                possibilitiesOfFunRight.push(i);
            }

        }
        else if (game.c) {
            //for x+1+game.c>15
            for (var i = 15 - game.c; i < 10; i++) {
                possibilitiesOfFunRight.push(i);
            }

            //for x+9+game.c<15

            for (var i = 15 - game.c - 1 - 1; i <= 1; i--) {
                possibilitiesOfFunRight.push(i);
            }
        }
        else {
            for (i = 1; i < 10; i++)
                possibilitiesOfFunRight.push(i);
        }

        return possibilitiesOfFunRight;
    }


    const funDown = () => {
        if (game.d && game.g) {
            var possibilitiesOfFunDown = [];
            const sum = game.d + game.g;
            //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }
            for(var i=1;i<10;i++){
                possibilitiesOfFunDown.push(i);
            }

        }
        else if (game.d) {


            //for x+1+game.d>15
            for (var i = 15 - game.d; i < 10; i++) {
                possibilitiesOfFunDown.push(i);
            }

            //for x+9+game.d<15

            for (var i = 15 - game.d - 1 - 1; i >= 1; i--) {
                possibilitiesOfFunDown.push(i);
            }

        }
        else if (game.g) {
            //for x+1+game.g>15
            for (var i = 15 - game.g; i < 10; i++) {
                possibilitiesOfFunDown.push(i);
            }

            //for x+9+game.g<15

            for (var i = 15 - game.g - 1 - 1; i >= 1; i--) {
                possibilitiesOfFunDown.push(i);
            }
        }
        else {
            for (i = 1; i < 10; i++)
                possibilitiesOfFunDown.push(i);
        }

        return possibilitiesOfFunDown;
    }




    const funDia = () => {
        var possibilitiesOfFunDia = [];

        if (game.e && game.h) {
            const sum = game.e + game.h;
            //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }


            for(var i=1;i<10;i++){
                possibilitiesOfFunDia.push(i);
            }




        }
        else if (game.e) {


            //for x+1+game.b>15
            for (var i = 15 - game.e; i < 10; i++) {
                possibilitiesOfFunDia.push(i);
            }

            //for x+9+game.b<15

            for (var i = 15 - game.e - 1 - 1; i >= 1; i--) {
                possibilitiesOfFunDia.push(i);
            }

        }
        else if (game.i) {
            //for x+1+game.c>15
            for (var i = 15 - game.i; i < 10; i++) {
                possibilitiesOfFunDia.push(i);
            }

            //for x+9+game.c<15

            for (var i = 15 - game.i - 1 - 1; i >= 1; i--) {
                possibilitiesOfFunDia.push(i);
            }
        }
        else {
            for (i = 1; i < 10; i++)
                possibilitiesOfFunDia.push(i);
        }

        return possibilitiesOfFunDia;
    }


    const possRight = funRight();
    const possDown = funDown();
    const possDia = funDia();



    const totalPossibleMoves = [...possDia, ...possDown, ...possRight];
  var result;
    if (totalPossibleMoves.length === 0) {
        result=0;
    } else {
         result = totalPossibleMoves.filter(move => move > 0);
        result=result[0];
    }
   
    return result;
   
}



const fun5=(game,used)=>{

const funVert=()=>{
    var possibilitiesOfFunVert=[];
    if(game.b && game.h){
        const sum = game.b + game.h;
            //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }

           //so safe cond
           for(var i=1;i<10;i++){
            possibilitiesOfFunVert.push(i);
           }
    }else if(game.b){
         //for x+1+game.b>15
         for (var i = 15 - game.b; i < 10; i++) {
            possibilitiesOfFunVert.push(i);
        }

        //for x+9+game.b<15

        for (var i = 15 - game.b - 1 - 1; i >= 1; i--) {
            possibilitiesOfFunVert.push(i);
        }
    }else if(game.h){
        //for x+1+game.b>15
        for (var i = 15 - game.h; i < 10; i++) {
           possibilitiesOfFunVert.push(i);
       }

       //for x+9+game.b<15

       for (var i = 15 - game.h - 1 - 1; i >= 1; i--) {
           possibilitiesOfFunVert.push(i);
       }
   }else{
          for(var i=1;i<10;i++){
            possibilitiesOfFunVert.push(i);
          }
   }

   return possibilitiesOfFunVert;
}
const funHori=()=>{
    var possibilitiesOfFunHori=[];
    if(game.d && game.f){
        const sum = game.d + game.f;
        //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }

           //so safe cond
           for(var i=1;i<10;i++){
            possibilitiesOfFunHori.push(i);
           }
    }else if(game.d){
         //for x+1+game.b>15
         for (var i = 15 - game.d; i < 10; i++) {
            possibilitiesOfFunHori.push(i);
        }

        //for x+9+game.b<15

        for (var i = 15 - game.d - 1 - 1; i >= 1; i--) {
            possibilitiesOfFunHori.push(i);
        }
    }else if(game.f){
        //for x+1+game.b>15
        for (var i = 15 - game.f; i < 10; i++) {
           possibilitiesOfFunHori.push(i);
       }

       //for x+9+game.b<15

       for (var i = 15 - game.f - 1 - 1; i >= 1; i--) {
           possibilitiesOfFunHori.push(i);
       }
   }else{
          for(var i=1;i<10;i++){
            possibilitiesOfFunHori.push(i);
          }
   }

   return possibilitiesOfFunHori;
}
const funDia1=()=>{

    var possibilitiesOfFunDia1=[];
    if(game.b && game.h){
        const sum = game.a + game.i;
            //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }

           //so safe cond
           for(var i=1;i<10;i++){
            possibilitiesOfFunDia1.push(i);
           }
    }else if(game.a){
         //for x+1+game.b>15
         for (var i = 15 - game.a; i < 10; i++) {
            possibilitiesOfFunDia1.push(i);
        }

        //for x+9+game.b<15

        for (var i = 15 - game.a - 1 - 1; i >= 1; i--) {
            possibilitiesOfFunDia1.push(i);
        }
    }else if(game.i){
        //for x+1+game.b>15
        for (var i = 15 - game.i; i < 10; i++) {
           possibilitiesOfFunDia1.push(i);
       }

       //for x+9+game.b<15

       for (var i = 15 - game.i - 1 - 1; i >= 1; i--) {
           possibilitiesOfFunDia1.push(i);
       }
   }else{
          for(var i=1;i<10;i++){
            possibilitiesOfFunDia1.push(i);
          }
   }

   return possibilitiesOfFunDia1;

}
const funDia2=()=>{

    var possibilitiesOfFunDia2=[];
    if(game.c && game.g){
        const sum = game.c + game.g;
            //checking used or not
            var val = 15 - sum;

            //checking winning situation
            if (val > 0 && val < 10 && (!used.includes(val))) {
                return val;
            }

           //so safe cond
           for(var i=1;i<10;i++){
            possibilitiesOfFunDia2.push(i);
           }
    }else if(game.c){
         //for x+1+game.b>15
         for (var i = 15 - game.c; i < 10; i++) {
            possibilitiesOfFunDia2.push(i);
        }

        //for x+9+game.b<15

        for (var i = 15 - game.c - 1 - 1; i >= 1; i--) {
            possibilitiesOfFunDia2.push(i);
        }
    }else if(game.g){
        //for x+1+game.b>15
        for (var i = 15 - game.g; i < 10; i++) {
           possibilitiesOfFunDia2.push(i);
       }

       //for x+9+game.b<15

       for (var i = 15 - game.g - 1 - 1; i >= 1; i--) {
           possibilitiesOfFunDia2.push(i);
       }
   }else{
          for(var i=1;i<10;i++){
            possibilitiesOfFunDia2.push(i);
          }
   }

   return  possibilitiesOfFunDia2;

}



   const possVert = funVert();
   const possHori = funHori();
   const possDia1 = funDia1();
   const possDia2 = funDia2();

   const totalPossibleMoves=[...possVert,...possDia2,...possDia1,...possHori];
  var result =[];
   if (totalPossibleMoves.length === 0) {
    result=0;
} else {
     result = totalPossibleMoves.filter(move => move > 0);
    return result;
}

return result;

}



const getValue=(game,used)=>{
    for (var i = 1; i < 10; i++) {
        switch (i) {
          case (1): {
            if (game.a) {
              continue;
            } else {
              // console.log("her raam");
              console.log(game);
              game.a=fun1(game,used)
            }
          }
          // case (2): {
          //   if (game.b) {
          //     continue;
          //   } else {
          //     fun2(game,used)
          //   }
          // }
          // case (3): {
          //   if (game.c) {
          //     continue;
          //   } else {
          //     fun3(game,used)
          //   }
          // }
          // case (4): {
          //   if (game.d) {
          //     continue;
          //   } else {
          //     fun4(game,used)
          //   }
          // }
          case (5): {
            if (game.e) {
              continue;
            } else {
             game.e = fun5(game,used);
            }
          }
          // case (6): {
          //   if (game.f) {
          //     continue;
          //   } else {
          //     fun6(game,used)
          //   }
          // }
          // case (7): {
          //   if (game.g) {
          //     continue;
          //   } else {
          //     fun7(game,used)
          //   }
          // }
          // case (8): {
          //   if (game.h) {

          //     continue;
          //   } else {
          //     fun8(game,used)
          //   }
          // }
          // default: {
          //   if (game.i) {
          //      alert("game over")
          //      window.location.reload();
          //      continue;
          //   } else {
          //     fun9(game,used)
          //   }
          // }
        }
      }
}

export default getValue;



