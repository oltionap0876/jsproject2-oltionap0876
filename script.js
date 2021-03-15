
// Intro to out project
alert ("Hello, we've created a tool that gives you the name of the schools with a certain SAT score in the critical reading section");  

// asks to answer a question based on the alert if its write they can continue if not they have to try again
var satSection = prompt(" Wait... what section of the SAT we're supposed to like to look at? (hint:critical reading)");
document.write ("<br>"+ "Section: " + satSection+ "<br>"); // writes user input on screen



//  creates a conditional so if they get the question right they get asked to input the score
if (satSection === "critical reading"){
    alert("Ahhh! Thank you for reminding me. Now, what scores are you looking for the school to have?");
    var criticalReadingSatScore = prompt( "Enter a score between 200 and 800 ie: 355. If nothing shows up then we didn't find a match");
    alert(" Generating a list of schools with the SAT score of " + criticalReadingSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + criticalReadingSatScore + "<br>");
    console.log("<br>"+ "Score: " + criticalReadingSatScore + "<br>");
} else if(satSection != "critical reading" , " Critical Reading"){
    alert("Nope refresh to try again");
}

$.ajax({
                url: 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json',
                dataType: 'json',
                success: function(data) {
    
                    console.log(data);
  // Loop that ilters through the data and if there are schools with that score it will show you a list but if not nothing will show up on the list                    
for(var i = 0; i < data.length; i++){
if( criticalReadingSatScore === data[i].sat_critical_reading_avg_score) {
        document.write("<br>" + " School Name: " + data[i].school_name + "<br>");
        document.write ("<br>"+ "Critical Reading score: " + data[i].sat_critical_reading_avg_score + "<br>");
        document.write ("<hr>");
        console.log("<br>"+ "Score: " + data[i].sat_critical_reading_avg_score + "<br>");
        console.log("<br>" + " School Name: " + data[i].school_name + "<br>");
   }

    }}});
                

