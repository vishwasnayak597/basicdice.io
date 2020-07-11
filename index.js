
var randomNumber1= Math.floor(Math.random() *6)+1;
var res1="dice" +randomNumber1+ ".png";
var imagechange="images/" +res1;
var player1=document.querySelectorAll("img")[0];
player1.setAttribute("src",imagechange);

var randomNumber2= Math.floor(Math.random() *6)+1;
var res2="dice" +randomNumber2+ ".png";
var player2img="images/" +res2;
var player2=document.querySelectorAll("img")[1];
player2.setAttribute("src",player2img);


if(randomNumber1>randomNumber2)
{
    document.querySelector(".title").innerHTML="Player 1 wins 🏆";

}
else if(randomNumber2>randomNumber1)
{
    document.querySelector(".title").innerHTML="Player 2 wins 🏆";
}
else if(randomNumber1===randomNumber2)
{
document.querySelector(".title").innerHTML="Draw";
}
else{
    document.querySelector(".title").innerHTML="Error";
}