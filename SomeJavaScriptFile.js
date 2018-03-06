window.onload = function() {
	// Inside Javascript.      window is the what javascript calls the html its talking to.
	// onload means "once the entire webpage is done loading, and is ready to appear onscreen"
	
	// function just means "some task".  Like doing the dishes is a function.
	
	
	
	// So, once an html page loads onscreen, this area gets called to do whatever it wants to do.   Play videos, or totally manipulate the HTML to plug in adds or crazy stuff.
	
	// HTML or CSS by itself can do "anything" the way javascript can.
	
	
	// The only thing were doing right now is displaying a message, when the page loads.



	/////////////  Assignment #1  ///////////

	var someVariableName = 5;
	var anotherVariableName = 3;


	var aThirdVariable = someVariableName + anotherVariableName; // This equals 8
	
	var aFourthVariable = aThirdVariable + 1;    // This will equal 9.

// 	alert(aFourthVariable);
	
	
	
	//////////// Assignment #2 //////////
	
	var moneyThisYear = 50000;
	var moneyLastYear = 40000;
	
	var totalMoneyFromBothYears = moneyThisYear + moneyLastYear;
// 	alert(totalMoneyFromBothYears);


	//////////// Assignment #3 ///
	
	var  yearsUntilRetirement = 35;	// Because I want to retire in 35 not 40 years. 

	var totalMoneyMade = moneyThisYear * yearsUntilRetirement;

// 	alert(totalMoneyMade);

	//////////// Assignment #4 ///
// 	
// 	var myList = ["Apples", "Oranges", "Bananas"];
// 	var someNum = 0;
// 	for (var I=0; i < myList.length; I++) {
// 	someNum = sumNum + 1;
// 	////As you can see from this example I also really like learn code.academy as well. Wait, why can I not see this alert in the html file?
// 	}
// 	



	//     #1 -  I commented out the other alerts from the other Assignments.   They were just getting in our way.    
	//          Maybe from here on, we just keep moving the alert down to the current assignment instead of having a bunch.
	
	//     #2 -  There are a few problems here.     One of them is your for loop.    There is a variable with a capital "I", then you use a smaller "i".
	          // Those need to be consistent  (I would use a lower case "i", because its a var, and you should name vars with a lowercase)
	          
	          
	       //   #3  -   For some reason the JS doesnt like your '' you use around the names of the fruit.   You can also
	          
	var listOfFruits = ["Apples", "Oranges", "Bananas"];
	var numberOfFruits = 0;
	for (var I=0; I < listOfFruits.length; I++) {
	     numberOfFruits = numberOfFruits + 1;
	////As you can see from this example I also really like learn code.academy as well. Wait, why can I not see this alert in the html file?
	}
	
	
	
	
		//////////// Assignment #9 ///

	
	var listOfClientsDeposits = [44,677,34,244,8,2421,54,12,22,33];
	var totalOfAllDeposits = 0;
	
	
	for (var index = 0 ; index < listOfClientsDeposits.length ; index++) {
		totalOfAllDeposits = totalOfAllDeposits + listOfClientsDeposits[index];
	}





	//////////// Assignment #10 ///
	
	// Below are 2 strings. Your boss you to concatenate (meaning put together) the 2 strings into 1. Starting with aString's value and ending with anotherString's value
	// Then print out this new 1 string.    The new string needs to be created, and notice the alert is already attempting to print it out.    Good luck.	


	// New rule:    You are not allowed to re-type the strings, like you did.      But you did good by realizing you need to create a var called aThirdString.



	var aString = "To be or not to "
	var anotherString = "be, that is the question."
	

	// Start your programming here.
	
	var aThirdString = aString + anotherString;
	
	// End your programming here.
	
	alert("Here is a famous quote: " + aThirdString);




}
