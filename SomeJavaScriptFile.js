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
	
// 	alert("Here is a famous quote: " + aThirdString);



	//////////// VVVVVVVV       NOTES FROM MARCH 6 CONVERSTION        VVVVVVV ///

	var depositsOfTheDay= ['133','155','45454'];
	
	// start program
	
	depositsOfTheDay.push('456');
	
	depositsOfTheDay.unshift('ffffgg'); // Add to the front
	
	
	
	// Dictionary  (or i think JS calls it an "object"
	
	var aPersonInTheFormOfADictionary = {"name":"Bob Manny","heightInFeet":6.2,"hairColor":"brown","sex":"male"};
	
	
	for (var index = 0 ; index < listOfClientsDeposits.length ; index++) {
		totalOfAllDeposits = totalOfAllDeposits + listOfClientsDeposits[index];
	}
	
	// This while loop does the EXACT same things as the for loop above.
	var index = 0;
	while (index < listOfClientsDeposits.length) {
		totalOfAllDeposits = totalOfAllDeposits + listOfClientsDeposits[index];
		index++;
	}
	
	
	
	// CONDITIONALS   "if this" "then that"        LOGIC TIME
	
	
	// Triple equals signs === mean "if the thing on the left and right are exactly the same, return true, otherwise return false"
	if (1 === 1) {
	   // This body will definatly run.
	} else if (2 === 4) { // Evertyhing below will now be ignored and skipped
	   
	} else if (3 === 3) {
	
	} else {
	   // This will never run
	}
	
	
		// Switch is the exacty same as "if   else if    else if    else if     else".      This is just cleaner.
	
     switch (fruit) {
       case 'banana': 
       doSomething(); 
       break;
            
       case 'apple':
       doSomethingElse();
       break;      
        
     }

	
	//    Two upward lines || means "or".
	if ( isLolaHomeToday || isJacobHomeToday ) {
	     tellMomWeDontNeedABabysitter();
	}
	
	
	//    Two upward lines && means "and".
	if ( isLolaHomeToday && isJacobHomeToday ) {
	     doAFamilyTripToZoo();
	}
	
	// Negate (flip opposite)     Exclamatino on the left side reverses any boolean value.   Like saying "not"
	
	if (!isLolaHome) {
	    bugBombTheHouse();
	}
	
	// Whitespace is either a "spacebar char",    could also be a "tab".
	
	
	
	
       //////////////       ASSIGNMENT # 12
       
       // Make a program that appends (adds to the end) the numbers 7,8,9,10,11,12,13 to the END of this same array, without you typing those numbers in yourself.
    var arrayOfNums = [1,2,3,4,5,6];
    // Start program here
    
    
    	
       //////////////       ASSIGNMENT # 13
       
       // Make a program that appends (adds to the end) the numbers 1,2,3,4,5 to the BEGINNING of this same array, without you typing those numbers in yourself.
    var anotherArrayOfNums = [6,7,8,9,10,11];
    // Start program here
    
    
    //////////////       ASSIGNMENT # 13
    var arrayOfDaysIsJakeHome = [false,true,true,false,false,false,true];
    var arrayOfDaysIsLolaHome = [false,false,false,true,false,true,true];

    // Above is 2 arrays, representing days that Jake and Lola are schedualed to stay home for the day.  arrayOfDaysIsJakeHome[0] represents Monday,     so arrayOfDaysIsJakeHome[6] represents Sunday.
    // Same for Lola's array.
    
    // Write a program that checks for days when both Jake AND Lola are home, so they can go to the zoo. 
    // And make the var below hold how many days this week you guys are going to the zoo.
    var daysTheyAreBothHome = 0;
    // Start program here




    //////////////       ASSIGNMENT # 14
    
    // Use the variables from Assignment #13, but this time, we want to check for days when Lola OR Jake stay home. And have the var below keep track of how many days that's true.  
     var daysEitherAreHome = 0;
         // Start program here

     
     
         //////////////       ASSIGNMENT # 15
    
    // Use the variables from Assignment #13, but this time, we want to know days that NEITHER Jake NOR Lola will be home. In that case, just call some fake method: askMomToBabysit()
    // Start program here




         //////////////       ASSIGNMENT # 16
         var hoursSpentPerDayJake = [6,2,8,5,3,5,7,3,2,4];
         var hoursSpentPerDayLola = [3,5,7,5,2,4,6,2,2,5];
         
         // Lets say you and Jake have been spending time the last 10 days doing some task. And you've kept track of how many hours each of you spent per day.
         // (For some reason), lets say Jake needs to know how many days did you and him both work the SAME AMOUNT OF HOURS.
         // Keep track of how many days that's true in the var below.
         
         var howManyDaysWorkedSameAmountOfHours = 0;
    // Start program here

}