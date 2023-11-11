// Code to ensure that all inputs are filled before enabling all the buttons
const start = () => {
  if (firstPlayerName.value === "" && secondPlayerName.value === "") {
    alert("Ensure that both players name are entered");
  } else if (firstPlayerName.value === "" && secondPlayerName.value !== " ") {
    alert("Ensure that Player1 name ais entered");
  } else if (firstPlayerName.value !== "" && secondPlayerName.value === "") {
    alert("Ensure that Player2 name is entered");
  }
  else if ( firstPlayerName.value.length >5 ){
    alert(" Player1 name must be less than six letters ")
  }
  else if(secondPlayerName.value.length >5){
    alert(" Player2 name must be less than six letters ")

  }



   else if (firstPlayerName.value !== "" && secondPlayerName.value !== "" && firstPlayerName.value.length <=5 && secondPlayerName.value.length<=5 ) {
    names.value =
      firstPlayerName.value +
      "(X) " +
      " " +
      " " +
      secondPlayerName.value +
      "(O)"
      document.getElementById("btn1").disabled= false;
document.getElementById("btn2").disabled= false;
document.getElementById("btn3").disabled= false;
document.getElementById("btn4").disabled= false;
document.getElementById("btn5").disabled= false;
document.getElementById("btn6").disabled= false;
document.getElementById("btn7").disabled= false;
document.getElementById("btn8").disabled= false;
document.getElementById("btn9").disabled= false;

}
}

// Changing innerText from "X" to "O" and vice versa

let one = 1;
const clickme = (e) => {
  if (e.target.innerText !== "") return;
  if (one == 1) {
    e.target.innerText = "X";
    one = 0;
  } else if (one == 0) {
    e.target.innerText = "O";
    one = 1;
    // 
  }    

//  Getting the winner of the game

  
// for X
  if (document.getElementById("btn1").innerText =="X" && document.getElementById("btn2").innerText =="X"  && document.getElementById("btn3").innerText =="X") {
    let x = document.getElementById("para1").innerHTML++ 
    // document.getElementById("para2")=firstPlayerName.value +  "  " + x

  //  firstPlayerName.value +
  //  "(X)"

    document.getElementById("btn1").disabled= true;
document.getElementById("btn2").disabled= true;
document.getElementById("btn3").disabled= true;
document.getElementById("btn4").disabled= true;
document.getElementById("btn5").disabled= true;
document.getElementById("btn6").disabled= true;
document.getElementById("btn7").disabled= true;
document.getElementById("btn8").disabled= true;
document.getElementById("btn9").disabled= true;
    }
   else if (document.getElementById("btn1").innerText =="X" && document.getElementById("btn5").innerText =="X"  && document.getElementById("btn9").innerText=="X"){
    document.getElementById("para1").innerHTML++
  
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
   }
   else if (document.getElementById("btn1").innerText =="X" && document.getElementById("btn4").innerText =="X"  && document.getElementById("btn7").innerText=="X"){
    document.getElementById("para1").innerHTML++
    
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
    
   }
   else if (document.getElementById("btn2").innerText =="X" && document.getElementById("btn5").innerText =="X"  && document.getElementById("btn8").innerText=="X"){
    document.getElementById("para1").innerHTML++
    
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
   }
   else if (document.getElementById("btn3").innerText =="X" && document.getElementById("btn6").innerText =="X"  && document.getElementById("btn9").innerText=="X"){
    document.getElementById("para1").innerHTML++
     
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
   }
   else if (document.getElementById("btn3").innerText =="X" && document.getElementById("btn5").innerText =="X"  && document.getElementById("btn7").innerText=="X"){
    
    document.getElementById("para1").innerHTML++
    
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
   }
   else if (document.getElementById("btn4").innerText =="X" && document.getElementById("btn5").innerText =="X"  && document.getElementById("btn6").innerText=="X"){
    document.getElementById("para1").innerHTML++

    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
   }
   else if (document.getElementById("btn7").innerText =="X" && document.getElementById("btn8").innerText =="X"  && document.getElementById("btn9").innerText =="X"){
    document.getElementById("para1").innerHTML++ + "ola"
    
    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
   }
  //  for "O"

  else if (document.getElementById("btn1").innerText =="O" && document.getElementById("btn2").innerText =="O"  && document.getElementById("btn3").innerText =="O") {
    document.getElementById("para2").innerHTML++

    document.getElementById("btn1").disabled= true;
    document.getElementById("btn2").disabled= true;
    document.getElementById("btn3").disabled= true;
    document.getElementById("btn4").disabled= true;
    document.getElementById("btn5").disabled= true;
    document.getElementById("btn6").disabled= true;
    document.getElementById("btn7").disabled= true;
    document.getElementById("btn8").disabled= true;
    document.getElementById("btn9").disabled= true;
  }
    else if (document.getElementById("btn1").innerText =="O" && document.getElementById("btn5").innerText =="O"  && document.getElementById("btn9").innerText=="O"){
      document.getElementById("para2").innerHTML++
 
      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;
    }
    else if (document.getElementById("btn1").innerText =="O" && document.getElementById("btn4").innerText =="O"  && document.getElementById("btn7").innerText=="O"){
      document.getElementById("para2").innerHTML++

      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;     
    }
    else if (document.getElementById("btn2").innerText =="O" && document.getElementById("btn5").innerText =="O"  && document.getElementById("btn8").innerText=="O"){
      document.getElementById("para2").innerHTML++

      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;
    }
    else if (document.getElementById("btn3").innerText =="O" && document.getElementById("btn6").innerText =="O"  && document.getElementById("btn9").innerText=="O"){
      document.getElementById("para2").innerHTML++
 
      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;
    }
    else if (document.getElementById("btn3").innerText =="O" && document.getElementById("btn5").innerText =="O"  && document.getElementById("btn7").innerText=="O"){
      document.getElementById("para2").innerHTML++
 
      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;
    }
    else if (document.getElementById("btn4").innerText =="O" && document.getElementById("btn5").innerText =="O"  && document.getElementById("btn6").innerText=="O"){
      document.getElementById("para2").innerHTML++
 
      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;
    }
    else if (document.getElementById("btn7").innerText =="O" && document.getElementById("btn8").innerText =="O"  && document.getElementById("btn9").innerText=="O"){
      document.getElementById("para2").innerHTML++

      document.getElementById("btn1").disabled= true;
      document.getElementById("btn2").disabled= true;
      document.getElementById("btn3").disabled= true;
      document.getElementById("btn4").disabled= true;
      document.getElementById("btn5").disabled= true;
      document.getElementById("btn6").disabled= true;
      document.getElementById("btn7").disabled= true;
      document.getElementById("btn8").disabled= true;
      document.getElementById("btn9").disabled= true;

    }

;
  }
// Reseting all values to default 
function replay(){

  document.getElementById("firstPlayerName").disabled= true;
  document.getElementById("secondPlayerName").disabled= true;
  document.getElementById("btn1").disabled= false;
  document.getElementById("btn2").disabled= false;
  document.getElementById("btn3").disabled= false;
  document.getElementById("btn4").disabled= false;
  document.getElementById("btn5").disabled= false;
  document.getElementById("btn6").disabled= false;
  document.getElementById("btn7").disabled= false;
  document.getElementById("btn8").disabled= false;
  document.getElementById("btn9").disabled= false;
  
 
document.getElementById("btn1").innerText= "";
document.getElementById("btn2").innerText= "";
document.getElementById("btn3").innerText= "";
document.getElementById("btn4").innerText= "";
document.getElementById("btn5").innerText= "";
document.getElementById("btn6").innerText= "";
document.getElementById("btn7").innerText= "";
document.getElementById("btn8").innerText= "";
document.getElementById("btn9").innerText= "";
}



