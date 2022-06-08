//create a variable to hold the quantity of available plane seats left on a flight
let availablePlaneSeats = 6;

		
//create a variable to hold the cost of groceries at checkout
let costOfGroceries = 100.45;

//create a variable to hold a person's middle initial
let middleInitial = 'D';

//create a variable to hold true if it's hot outside and false if it's cold outside
var hotOutside = true;

//create a variable to hold a customer's first name
let customerFirstName = 'Christopher';

//create a variable to hold a street address
let streetAddress = '3255 Meridian Dr';

//print all variables to the console
console.log(availablePlaneSeats);
console.log(costOfGroceries);
console.log(middleInitial);
console.log(hotOutside);
console.log(customerFirstName);
console.log(streetAddress);



//a customer booked 2 plane seats, remove 2 seats from the available seats variable
availablePlaneSeats = availablePlaneSeats - 2;
console.log(availablePlaneSeats);

//impulse candy bar purchase, add 2.15 to the grocery total
costOfGroceries = costOfGroceries + 2.15;
console.log(costOfGroceries);

//birth certificate was printed incorrectly, change the middle initial to something else
middleInitial = 'F';
console.log(middleInitial);

//the season has changed, update the hot outside variable to be opposite of what it was
hotOutside = !hotOutside;
console.log(hotOutside);

//create a new variable called full name using the customer's first name, the middle initial, and a last name of your choice
let customerFullName = customerFirstName + ' ' + middleInitial + ' ' + 'Nguyen';
console.log(customerFullName);

//print a line to the console that introduces the customer and says they live at the address variable
console.log('Hi my name is'  + ' ' + customerFirstName + ' ' + 'and I live at' + ' ' + streetAddress + '.');
