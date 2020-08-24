
// Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. 
// Display those properties when a user clicks on a place's name. 
// Complete the business logic for your place object (including specs, which should go in your README). 
// If you complete the business logic, you may work on adding a user interface. (See tonight's lessons for more.)

function PlacesWeveBeen() {
  this.destinations = [];
  this.currentId = 0;
}

PlacesWeveBeen.prototype.addDestination  = function(destination) {
  destination.id=this.assignId();
  this.destinations.push(destination)
}

PlacesWeveBeen.prototype.assignId = function() {
  this.currentId +=1;
  return this.currentId;
}


function Destination(location, landmarks, season, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.season = season;
  this.notes = notes;
}


// let placesWeveBeen = new PlacesWeveBeen();
// let destination = new Destination("Portland", "Moda Center", "Spring", "Cherry blossoms bloom");
// let destination2 = new Destination("Seattle", "Gum Wall", "Winter", "sticky");
// placesWeveBeen.addDestination(destination);
// placesWeveBeen.addDestination(destination2);

// User Interface Logic

let placesWeveBeen = new PlacesWeveBeen();

function displayPlacesDetails(placesWeveBeenToDisplay) {
  let placesList = $("ul#places");
  let htmlForPlacesInfo = "";
  placesWeveBeenToDisplay.destinations.forEach(function(destination) {
    htmlForPlacesInfo += "<li id=" + destination.id + ">" + destination.location + destination.landmarks + destination.season + destination.notes + "</li>";
  });
  placesList.html(htmlForPlacesInfo);
};



 
$(document).ready(function() {
  $("form#inputForm").submit(function(event) {
    event.preventDefault();
    const inputtedLocation = $("input#location").val();
    const inputtedLandmarks = $("input#landmarks").val();
    const inputtedSeason = $("input#season").val();
    const inputtedNotes = $("input#notes").val();
    let newDestination = new Destination(inputtedLocation, inputtedLandmarks, inputtedSeason, inputtedNotes);
    placesWeveBeen.addDestination(newDestination);
    displayPlacesDetails(placesWeveBeen);

    
  });
});