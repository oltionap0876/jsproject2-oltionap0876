 $.ajax({
                url: 'https://data.cityofnewyork.us/resource/f9bf-2cp4.json',
                dataType: 'json',
                success: function(data) {
                    console.log(data);
                }
            });

let url = "https://data.cityofnewyork.us/resource/f9bf-2cp4.json";

fetch (url)
.then(response => response.json())
  .then(data => {
  console.log(data);
  var schoolsArray = data;
  
  data.schoolsArray.map(Schools => {
      
     document.write(schoolsArray.school_name);
      
  });
  
  });
  

alert ("Hello, we've created a tool that gives you the name of the schools with a certain SAT score");  //Introduction

var satSection = prompt("What section of the SAT would you like to look at? (critical reading, writing or math)");// asks for user input 
document.write ("<br>"+ "Section: " + satSection + "<br>"); // writes user input on screen

alert("Great choice! Now, what scores are you looking for the school to have?"); 

//  creates a conditional for each SAT section then asks for a score they are looking fo
if (satSection === "critical reading" , " Critical Reading"){
    var criticalReadingSatScore = prompt( "Enter a score between 200 and 800 ie: 355");
    alert(" Generating a list of schools with the SAT score of " + criticalReadingSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + criticalReadingSatScore + "<br>"); // writes what score user is looking for
} else if (satSection === "Math", "math") {
    var mathSatScore =  prompt( "Enter a score between 200 and 800 ie: 244");
    alert(" Generating a list of schools with the SAT score of " + mathSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + mathSatScore + "<br>");
} else if (satSection === " Writing", "writing"){
    var writingSatScore = prompt("Enter a score between 200 and 800 ie: 453");
    alert(" Generating a list of schools with the SAT score of " + writingSatScore + " in the " + satSection + " section " );
    document.write ("<br>"+ "Score: " + writingSatScore + "<br>");
}


;



//  creates a conditional for each SAT section then asks for a score they are looking fo
//  creates a conditional for each SAT section then asks for a score they are looking for

for(var i = 0; i < score.length; i++){
    if(score[i].value.index0f("f") == userNum){
        document.write(score[i].score + "<br>");
    }
}


