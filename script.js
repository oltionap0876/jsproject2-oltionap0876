$.ajax({
    url: 'https://data.cityofnewyork.us/Education/2012-SAT-Results/f9bf-2cp4',
    dataType: 'json',
    success: function(data) {
        console.log(data);
    }
});

alert("Hello, we've created a tool that gives you the name of the schools with a certain SAT score");

var satSection = prompt("What section of the SAT would you like to look at? (critical reading, writing or math)");
var userSection = function(satSection) {
    if ( satSection === critical reading){
        return 
    }
    if ( satSection === writing){
        return 
    }
    if ( satSection === math){
        return 
    }
    
};



/*alert("Great choice! Now, what scores are you looking for the school to have?");
if (satSection = critical reading)// Reminder for isabel: remember to code the right way this is just a "notecatcher "
var scoreRangeCriticalReading = promt("Enter the score between 200-800 that you want to see and we'll give you the schools with that score");
if (satSection = writing)
if (satSection = math)
// Reminder for isabel: remember to code the right way this is just a "notecatcher "
*/
