
// Create a website where you can keep track of all the places you've been. Each destination should be an object with multiple properties, like location, landmarks, time of year, notes, etc. Display those properties when a user clicks on a place's name. Complete the business logic for your place object (including specs, which should go in your README). If you complete the business logic, you may work on adding a user interface. (See tonight's lessons for more.)

function PlacesWeveBeen() {
  this.destinations = [];
  this.currentId = 0;
}

PlacesWeveBeen.prototype.addDestination  = function(destination) {
  this.destinations.push(destination)
}



function Destination(location, landmarks, timeOfYear, notes) {
  this.location = location;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


let placesWeveBeen = new PlacesWeveBeen();
let destination = new Destination("Portland", "Moda Center", "Spring", "Cherry blossoms bloom");
let destination2 = new Destination("Seattle", "Gum Wall", "Winter", "sticky");
placesWeveBeen.addDestination(destination);
placesWeveBeen.addDestination(destination2);