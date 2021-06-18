// Write your JavaScript code here!
// window.addEventListener("load", function(){

function init(){

   let form = document.querySelector('form');
   let inputPilotName = document.querySelector("input[name=pilotName]")
   let inputCopilotName = document.querySelector("input[name=copilotName]");
   let inputFuelLevel = document.querySelector("input[name=fuelLevel]")
   let inputCargoMass = document.querySelector("input[name=cargoMass]")


   this.fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response){
      response.json().then(function(json){

      let missionDestination = document.getElementById("missionTarget");
      // let i = Math.floor(Math.random()*json.length);
      missionDestination.innerHTML= `
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${json[2].name}</li>
   <li>Diameter: ${json[2].diameter}</li>
   <li>Star: ${json[2].star}</li>
   <li>Distance from Earth: ${json[2].distance}</li>
   <li>Number of Moons: ${json[2].moons}</li>
</ol>
<img src="${json[2].image}"></img>`;

        
      });
   });




   
   form.addEventListener("submit", function(event){
      event.preventDefault();  //stop form submission
      



      if(inputPilotName.value === "" || inputCopilotName.value === "" || inputFuelLevel.value === "" || inputCargoMass.value === ""){
         alert("All fields are required!");
      
      }else if(isNaN(inputFuelLevel.value)|| isNaN(inputCargoMass.value)){
         alert("Make sure to enter valid information for each field");
   
      }else if(!isNaN(inputPilotName.value) || !isNaN(inputCopilotName.value)){
         alert("Make sure to enter valid information for each field");
      } else {
  
     
      document.getElementById("pilotStatus").innerHTML= `${inputPilotName.value} is ready for launch!`;
      document.getElementById("copilotStatus").innerHTML= `${inputCopilotName.value}is ready for launch!`;

      if(inputFuelLevel.value < 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("fuelStatus").innerHTML = "There is not enough fuel for the journey"
         document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch";
         document.getElementById("launchStatus").style.color= "red";
      }

      else if(inputCargoMass.value > 10000){
         document.getElementById("faultyItems").style.visibility = "visible";
         document.getElementById("cargoStatus").innerHTML = "There is too much mass for the shuttle to take off."
         document.getElementById("launchStatus").innerHTML = "Shuttle is not ready for launch."
         document.getElementById("launchStatus").style.color= "red";
   

      }else{ 
      document.getElementById("faultyItems").style.visibility = "visible";
      document.getElementById("launchStatus").innerHTML = "Shuttle is ready for launch!"
      document.getElementById("launchStatus").style.color= "green";

      }
   }
});
}

window.addEventListener("load", init);
