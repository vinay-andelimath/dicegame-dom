var randomNumber1=Math.floor(Math.random()*6)+1;//1-6
/**using this random number1 to select the image using concatenation */
/**output of randomNumber1 + dice image  */
var randomDiceImage="dice" + randomNumber1 + ".png";
/**changing the attributes of images as it contains images */
var randomImageSource="images/" + randomDiceImage;// /images/dice1.png-/images/dice6.png
/**changing the attributes using the selectors */
var image1=document.querySelectorAll("img")[0];//image 1
/**set the attribute by using setAtribute Method */
image1.setAttribute("src",randomImageSource);

/**similarly for image 2 */

var randomNumber2=Math.floor(Math.random()*6)+1;//1-6

var randomImageSource2="images/dice" + randomNumber2 + ".png";

document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

/**condition statement */
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="Player 1 won!"
}else if(randomNumber2>randomNumber1){
    document.querySelector("h1").innerHTML="Player 2 Won!"
}else{
    document.querySelector("h1").innerHTML="Draw!!!!"
}