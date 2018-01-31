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

	alert(aFourthVariable);
	
	
	
	//////////// Assignment #2 //////////
	
	var moneyThisYear = 50000;
	var moneyLastYear = 40000;
	
	var totalMoneyFromBothYears = moneyThisYear + moneyLastYear;
	alert(totalMoneyFromBothYears);


	//////////// Assignment #3 ///
	
	var  yearsUntilRetirement = 35;	// Because I want to retire in 35 not 40 years. 

	var totalMoneyMade = moneyThisYear * yearsUntilRetirement;

	alert(totalMoneyMade);

	//////////// Assignment #4 ///
	
	for (x=0; x<10; x++){
		document.write(“I liked watching thenewboston tutorial on this subject <br/>”);
	}

	var myList = [‘Apples’, ‘Oranges’, ‘Bananas’];
	for (var I=0; i < myList.length; I++) {
	alert(‘You have’+myList[I]+’in your basket’); 
	////As you can see from this example I also really like learn code.academy as well. Wait, why can I not see this alert in the html file?
	}

	
}
