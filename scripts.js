  // JavaScript for TP5
function loadFileInto(fromFile, whereTo) {

	// creating a new XMLHttpRequest object
	ajax = new XMLHttpRequest();

	// defines the GET/POST method, source, and async value of the AJAX object
	ajax.open("GET", fromFile, true);

	// provides code to do something in response to the AJAX request
	ajax.onreadystatechange = function() {
			if ((this.readyState == 4) && (this.status == 200)) {
				document.querySelector(whereTo).innerHTML = this.responseText;
				
			} else if ((this.readyState == 4) && (this.status != 200)) {
				console.log("Error: " + this.responseText);
			}
		
	} // end ajax.onreadystatechange function

	// initiate request and wait for response
	ajax.send();

}

// new Recipe object
function Recipe(recipeName, contributorName, imageURL, ingredientsURL, equipmentURL, directionsURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  this.ingredients = ingredientsURL;
  this.equipment = equipmentURL;
  this.directions = directionsURL
  
  this.displayRecipe = function() {
    
    document.querySelector("#SteakBanner h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#SteakBanner").style.backgroundImage = "url(" + this.imageURL + ")";
    loadFileInto(this.ingredients, "#ingredients ul");
    loadFileInto(this.equipment, "#equipment ul");
    loadFileInto(this.directions, "#directions ol");
    
  }
  
}

FiletMignon = new Recipe("Filet Mignon",
                         "Niel",
                         "https://images.unsplash.com/photo-1607116176195-b81b1f41f536?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=884&q=80L",
                         "ingredients.html",
                         "equipment.html",
                         "directions.html"
                        );

CashewChicken = new Recipe("Cashew Chicken",
                         "Mariah",
                         "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
                         "chicken-ingredients.html",
                         "chicken-equipment.html",
                         "chicken-directions.html"
                        );

Pancakes = new Recipe("Old Fashioned Pancakes",
                         "Maddy",
                         "https://images.unsplash.com/photo-1541288097308-7b8e3f58c4c6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
                         "pancakes-ingredients.html",
                         "pancakes-equipment.html",
                         "pancakes-directions.html"
                        );




window.onload = function() {
  
  document.querySelector("#firstRecipe").onclick = function() {
    FiletMignon.displayRecipe();
  }
  
  document.querySelector("#secondRecipe").onclick = function() {
    CashewChicken.displayRecipe();
  }
  
  document.querySelector("#thirdRecipe").onclick = function() {
    Pancakes.displayRecipe();
  }  
  
  
}

    // JavaScript for TP7