//global variables
var intervalId;	
var number = 10;
var clickedRightAnswer = false;

var choice;

var choicePos = 1;

var unAnswered = 0;
var	correct = 0;
var inCorrect = 0;

var modulusValue = 4;
var baseVal = 2;

var lastQuestion = false;

var Questions = [ [".Q1", "Heat"], 
				  [".Q2", "Dark Knight"], 
				  [".Q3", "Witness"], 
				  [".Q4", "The Hunt For Red October"], 
				  [".Q5", "Terminator 2" ]
				];




//Array of Answers
//used for the for-loop which helps us figure out which answer was selectd
var allPossibleChoices = ["Heat", "Casino", "GoodFellas", "Raging Bull", 
						  "Batman Returns", "Batamn Forever", "Batman&Robin", "Dark Knight", 
						  "Blade Runner", "Witness", "Indiana Jones", "PatriotGames",
						  "Patriot Games", "The Hunt For Red October", "Clear and President Danger", "Sum of All Fears",
						  "Terminator 1", "Terminator 2", "Terminator 3", "Terminator Salvation"];



//used for index of (Questions) to display the next question
var questionIndex = 0;	

console.log(allPossibleChoices.length);

//Use for loop so to store each possible answer from the array into
//an attribute for each iteration so when the user clicks on answer
//we know which one was clicked.
for(var i = 0; i < allPossibleChoices.length; i++)
{
	

	//for each iteration, we will creat a <h4> choice
	choice = $("<h4>" + allPossibleChoices[i] + "</h4>" );

	//for each (choice) we will be giving it a class, in order to
	//identify which choice a user clicked on.
	choice.addClass("choice_selected" + (choicePos));

	//Each (choice) will be given a data attribute called ("choice_select")
	choice.attr("possibleChoices", allPossibleChoices[i]);

	//append the choices inside the EX; Q1: <h4 ="Choice">
	$(".Choice" + (choicePos)).append(choice);

	//console.log(choicePos);

	//After 4 iterations we use modulus(%) tecnique to increment choicePos in order
	//to select the correct <span class=".Choice"> position
	if( ((i+1) % modulusValue) === 0)
	{
		choicePos++;
		
		//4 represents the total Choices we have per Quesiont &
		// 2 is base value that gets multiplied into 4.
		modulusValue = 4 * baseVal;

		baseVal++;
	}

}



//When Start button is clicked display quesitons & hide [START] button
$("#start").on("click", function()
{
		

	$("#start").hide();

	//Display the timer for each question with a certain amt of time answering
	$(".Timer").show();

	//This Array is used for displaying all questions that are inside the container.
	//This will display Q1 when we click (Start button)
	$(Questions[questionIndex][0]).show();

	//call run function which will show time and time decrementing
	run();



});

//Q1(question1)
$(".choice_selected1").on("click", function()
{
	
	//Store Chosen Answer in variable
	var yourAnswer = $(this).attr("possibleChoices");
	
	
	q1_Unanswered = false;

	if(yourAnswer === "Heat")
	{
		//stop time when we display Correct page
		stop();

		//hide Q1 page
		//OR use $(Questions[questionIndex][0]).hide()
		$(".Q1").hide();

		//display correct page
		$(".correctPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//Increment (correct) so we can display the total questions we got correct
		correct++;

		//incrment so we can move on to Q2 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000);
		


	}
	else
	{
		//stop time when we dsiplay Incorrect page
		stop();

		//hide Q1 page
		//OR use $(Questions[questionIndex]).hide()
		$(".Q1").hide();

		//display incorrect page
		$(".incorrectPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//display the correct choice that should have been selected
		$("#correctAnswer").text(Questions[questionIndex][1]);

		//Increment (inCorrect) so we can display the total questions we got correct
		inCorrect++;

		//incrment so we can move on to Q2 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000);

	}

	
});


//Q2(question2)
$(".choice_selected2").on("click", function()
{
	

	//Store chosen answer in variable
	var yourAnswer = $(this).attr("possibleChoices");
	

	if(yourAnswer === "Dark Knight")
	{
		//stop time when we display Correct page
		stop();

		//hide Q2 page. 
		//OR use $(Questions[questionIndex]).hide()
		$(".Q2").hide()

		//display correct page
		$(".correctPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//Increment (correct) so we can display the total questions we got correct
		correct++;

		//incrment so we can move on to Q2 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000); 
		

	}
	else
	{
		//stop time when we dsiplay Incorrect page
		stop();

		//hide Q2 page
		//OR use $(Questions[questionIndex]).hide()
		$(".Q2").hide();

		//display incorrect page
		$(".incorrectPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//display the correct choice that should have been selected
		$("#correctAnswer").text(Questions[questionIndex][1]);

		//Increment (inCorrect) so we can display the total questions we got correct
		inCorrect++;

		//incrment so we can move on to Q2 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000);
		
	}

	
});

//Q3(question3)
$(".choice_selected3").on("click", function()
{
	

	//Store chosen answer in variable
	var yourAnswer = $(this).attr("possibleChoices");
	

	if(yourAnswer === "Witness")
	{
		//stop time when we display Correct page
		stop();

		//hide Q3 page. 
		//OR use $(Questions[questionIndex]).hide()
		$(".Q3").hide()

		//display correct page
		$(".correctPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//Increment (correct) so we can display the total questions we got correct
		correct++;

		//incrment so we can move on to Q3 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000); 
		

	}
	else
	{
		//stop time when we dsiplay Incorrect page
		stop();

		//hide Q3 page
		//OR use $(Questions[questionIndex]).hide()
		$(".Q3").hide();

		//display incorrect page
		$(".incorrectPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//display the correct choice that should have been selected
		$("#correctAnswer").text(Questions[questionIndex][1]);

		//Increment (inCorrect) so we can display the total questions we got correct
		inCorrect++;

		//incrment so we can move on to Q3 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000);
		

	}
	
});

//Q4(question4)
$(".choice_selected4").on("click", function()
{
	

	//Store chosen answer in variable
	var yourAnswer = $(this).attr("possibleChoices");
	

	if(yourAnswer === "The Hunt For Red October")
	{
		//stop time when we display Correct page
		stop();

		//hide Q2 page. 
		//OR use $(Questions[questionIndex]).hide()
		$(".Q4").hide()

		//display correct page
		$(".correctPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//Increment (correct) so we can display the total questions we got correct
		correct++;

		//incrment so we can move on to Q2 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000); 
		

	}
	else
	{
		//stop time when we dsiplay Incorrect page
		stop();

		//hide Q2 page
		//OR use $(Questions[questionIndex]).hide()
		$(".Q4").hide();

		//display incorrect page
		$(".incorrectPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//display the correct choice that should have been selected
		$("#correctAnswer").text(Questions[questionIndex][1]);

		//Increment (inCorrect) so we can display the total questions we got correct
		inCorrect++;

		//incrment so we can move on to Q2 or next index that contains the next Question to load.
		questionIndex++;

		//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
		//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
		setTimeout(displayNextQuestion, 5000);
		
	}
	
});

//Q5(question5)
$(".choice_selected5").on("click", function()
{

	//Store chosen answer in variable
	var yourAnswer = $(this).attr("possibleChoices");
	

	if(yourAnswer === "Terminator 2")
	{
		//stop time when we display Correct page
		stop();

		//hide Q5 page. 
		//OR use $(Questions[questionIndex]).hide()
		$(".Q5").hide()

		//display correct page
		$(".correctPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//Increment (correct) so we can display the total questions we got correct
		correct++;

		//incrment so we can move on to Q5 or next index that contains the next Question to load.
		questionIndex++;

		//Last Question so now display the results page
		setTimeout(displayResults, 5000); 
		

	}
	else
	{
		//stop time when we dsiplay Incorrect page
		stop();

		//hide Q5 page
		//OR use $(Questions[questionIndex]).hide()
		$(".Q5").hide();

		//display incorrect page
		$(".incorrectPage").show();

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );

		//display the correct choice that should have been selected
		$("#correctAnswer").text(Questions[questionIndex][1]);

		//Increment (inCorrect) so we can display the total questions we got correct
		inCorrect++;

		//incrment so we can move on to Q5 or next index that contains the next Question to load.
		questionIndex++;

		//Last Question so now display the results page
		setTimeout(displayResults, 5000);
		
	}
	
});

//function1
function run()
{
	//place number for countdown inside <div id="time">
	$("#time").text(number);

	//setInterval is a predefined function that will run the function as a loop for every 1 sec
	intervalId = setInterval(decrement, 1000);
}

//function2
function decrement()
{
	number--;

	//Display decremented nubmer in loop
	$("#time").text(number);

	//time = 0: Unanswered Question
	if(number === 0 )
	{
		//stop decrement countdown and stop looping
		stop();

		//Hide the current question page that you are on prior to diplaying outOfTimePage
		$(Questions[questionIndex][0]).hide();

		//Display Unanswered Page
		$(".outOfTimePage").show();

		//Display the Correct Choice that should have been selected
		$("#theCorrectAnswer").text(Questions[questionIndex][1]);

		//display image of movie
		$(".dislayImage").html("<img src=\'assets/images/" + Questions[questionIndex][1] + ".jpg" + "\' height=\'200\' width=\'200\'>" );


		//Increment (unAnswered) to display so we can display the total questions we did Not answer
		unAnswered++;	

		//incrment so we can move on to Q2 or Q3 or Q4 or next index that contains the next Question to load.
		questionIndex++;


		//We need an if-stmt to see if we are on the last question so we can display the results page 
		//instead of the next question page since (.Q5) is the last question
		if(lastQuestion === false)
		{

			//Reset the clock(number = 10) && run time again && display Question2 by calling displayNextQuestion() function but
			//wait 5 secons so udercan watch the correct page get displayed for at leat 5 seconds
			setTimeout(displayNextQuestion, 5000);		
		}
		else if(lastQuestion === true)
		{
			console.log
			//Last Question so now display the results page
			setTimeout(displayResults, 5000);
		}
	}
}

//function 3
function stop()
{
	clearInterval(intervalId);

}

//function 4
function displayNextQuestion()
{
	//Hide Correct Page or Incorrect Page or Out Of Time page
	$(".correctPage").hide();
	$(".incorrectPage").hide();
	$(".outOfTimePage").hide();

	//Reset the clock for the next question
	number = 10;

	//run the time
	run();

	//display next question with choices
	$(Questions[questionIndex][0]).show();
	
	//if we've reached last question(.Q5) then set boolean indicator lastQuestion to False in order for
	//unanwered portion of code to know when to execute the results page instead of next question page
	if(Questions[questionIndex][0] === ".Q5")
	{
		//Used to indicate that we've reached the last question so if the user does not answer then the unanswered
		//portion of the code will know causing the results page to load instead of the next question which is blank
		lastQuestion = true;
	}


}

//Function5
function displayResults()
{
	//Hide Correct Page or Incorrect Page or Out Of Time page
	$(".correctPage").hide();
	$(".incorrectPage").hide();
	$(".outOfTimePage").hide();

	$(".resultsContainer").show();

	//Display total correct answers
	$("#correct").text(correct);

	//Display total incorrect answers
	$("#incorrect").text(inCorrect);

	//Display total unanswered
	$("#unanswered").text(unAnswered);

}