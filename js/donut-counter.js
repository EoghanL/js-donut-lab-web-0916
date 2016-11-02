//JS Donut Counter Lab
var guests = prompt("Please enter the number of guests here:")
var donuts = prompt("Please enter the number of donuts here:")

if(parseInt(guests) > parseInt(donuts)){
  alert(`You have ${donuts} donuts for ${guests} guests you are short ${guests - donuts} donuts!`)
}
else if(parseInt(guests) <= parseInt(donuts)){
  alert("You have enough donuts for everyone, CONGRATS!")
}
else{
  alert("You probably did something wrong")
}





//declare 2 variables one for guests and one for donuts
//use prompt method to bring up a dialog box in the browser for the user to insert the number of guests and donuts.
//use parseInt to convert the users answer from a string to an integer.

//write a conditional to check if there are enough donuts

  //alert the user with a message telling them the numbers of donuts and guests, and if there are enough donuts for each guest.
