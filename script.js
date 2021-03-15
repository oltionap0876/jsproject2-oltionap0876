
// Intro to out project
alert ("Hello, we've created a tool that gives you the name of the schools with a certain SAT score");  

// asks for user input on what section they want to look at and puts their choice on the screen
var satSection = prompt("What section of the SAT would you like to look at? (critical reading, writing or math)");
document.write ("<br>"+ "Section: " + satSection + "<br>"); // writes user input on screen


alert("Great choice! Now, what scores are you looking for the school to have?");


//  creates a conditional for each SAT section then asks for a score they are looking for based on the section they want 
if (satSection === "critical reading" , " Critical Reading"){
    var criticalReadingSatScore = prompt( "Enter a score between 200 and 800 ie: 355");
    alert(" Generating a list of schools with the SAT score of " + criticalReadingSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + criticalReadingSatScore + "<br>");
    console.log("<br>"+ "Score: " + criticalReadingSatScore + "<br>");// writes what score user is looking for
} else if (satSection === "Math", "math") {
    var mathSatScore =  prompt( "Enter a score between 200 and 800 ie: 244");
    alert(" Generating a list of schools with the SAT score of " + mathSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + mathSatScore + "<br>");
    console.log ("<br>"+ "Score: " + mathSatScore + "<br>");
} else if (satSection === " Writing", "writing"){
    var writingSatScore = prompt("Enter a score between 200 and 800 ie: 453");
    alert(" Generating a list of schools with the SAT score of " + writingSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + writingSatScore + "<br>");
     console.log ("<br>"+ "Score: " + writingSatScore + "<br>");
}


$.ajax({
                url: 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json',
                dataType: 'json',
                success: function(data) {
    
                    console.log(data);
                     for(var i = 0; i < data.length; i++){
                    
   /*if( criticalReadingSatScore == data[i].sat_critical_reading_avg_score) {
        document.write("<br>" + " School Name: " + data[i].school_name + "<br>");
        document.write ("<br>"+ "Critical Reading score: " + data[i].sat_critical_reading_avg_score + "<br>");
        document.write ("<hr>");
        console.log("<br>"+ "Score: " + data[i].sat_critical_reading_avg_score + "<br>");
        console.log("<br>" + " School Name: " + data[i].school_name + "<br>");
 
   } */
   if ( mathSatScore == data[i].sat_math_avg_score) {
                document.write("<br>" + " School Name: " + data[i].school_name + "<br>");
                document.write("<br>"+ " Math score: " + data[i].sat_math_avg_score + "<br>");
                document.write("<hr>");
                console.log("<br>" + " School Name: " + data[i].school_name + "<br>");
                console.log("<br>"+ "Math score: " + data[i].sat_math_avg_score + "<br>");
                
            } 
    /*if (writingSatScore == data[i].sat_writing_avg_score)
                document.write("<br>" + " School Name: " + data[i].school_name + "<br>");
                document.write ("<br>"+ " Writing score: " + data[i].sat_writing_avg_score + "<br>");
                document.write ("<hr>");
                console.log("<br>" + " School Name: " + data[i].school_name + "<br>");
                console.log("<br>"+ "Writing score: " + data[i].sat_writing_avg_score + "<br>");
               
               
               
             
    
            */
                }}});
                

