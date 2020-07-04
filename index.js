function changeDice1()
{
  var randomNumber1 =Math.random();
  randomNumber1=  randomNumber1*6;
  randomNumber1=Math.floor(randomNumber1);
  randomNumber1=randomNumber1+1;
  return randomNumber1;
}
var x1 = changeDice1();
var randomDiceImage1="dice"+x1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);


function changeDice2()
{
  var randomNumber2 =Math.random();
  randomNumber2=  randomNumber2*6;
  randomNumber2=Math.floor(randomNumber2);
  randomNumber2=randomNumber2+1;
  return randomNumber2;
}


var x2 = changeDice2();
var randomDiceImage2="dice"+x2+".png";
var image2=document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);

        if(x1>x2){
                   var heading=document.querySelector("h1").innerHTML="🚩player 1 wins!";
                 }
       else if(x1<x2){
                     var heading=document.querySelector("h1").innerHTML="player 2 wins!🚩";
                  }
      else{
           var heading=document.querySelector("h1").innerHTML="🚩Draw!🚩";
          }
