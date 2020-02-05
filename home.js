
function createContinents(name, id) {
  return {
    name: name,
    id: id,
  };
}

function createCountries(name, id, continent) {
  return {
    name: name,
    id: id,
    continent: continent,
  };
}

function createAttractions(name, id, country) {
  return {
    name: name,
    id: id,
    country: country,
  };
}

function createPopular(name, id) {
  return {
    name: name,
    id: id,
  };
}

function removeOptions(select) {
  while (select.options.length > 1) {                
    select.remove(1);
  }
  
  select.value = "";
}

function addOptions(select, options) {
  console.log(select, options)
  options.forEach(function(option) {
    select.options.add(new Option(option.name, option.id));
  });
}

var continentSelect = document.getElementById('continents');
var countrySelect = document.getElementById('countries');
var attractionsSelect = document.getElementById('attractions');
var popularSelect = document.getElementById('popularPlaces');

var continents = [
  createContinents('America', 'am'),
  createContinents('Europe', 'eu'),
  createContinents('Asia', 'asia'),
  createContinents('Australia', 'aus'),
  createContinents('Africa', 'af'),
];

var countries = [
  createCountries('USA', 'usa', 'am'),
  createCountries('Canada', 'can', 'am'),
  createCountries('Mexico', 'mex', 'am'),
  createCountries('Brazil', 'br', 'am'),
  createCountries('Argentina', 'arg', 'am'),
  createCountries('United Kingdom', 'uk', 'eu'),
  createCountries('France', 'fr', 'eu'),
  createCountries('Germany', 'ger', 'eu'),
  createCountries('Spain', 'spa', 'eu'),
  createCountries('Russia', 'rus', 'eu'),
  createCountries('Japan', 'jap', 'asia'),
  createCountries('China', 'cn', 'asia'),
  createCountries('South Korea', 'sk', 'asia'),
  createCountries('India', 'ind', 'asia'),
  createCountries('Saudi Arabia', 'sa', 'asia'),
  createCountries('Australia', 'australia', 'aus'),
  createCountries('New Zealand', 'nz', 'aus'),
  createCountries('Samoa', 'sam', 'aus'),
  createCountries('Fiji', 'fj', 'aus'),
  createCountries('Palau', 'pal', 'aus'),
  createCountries('South Africa', 'saf', 'af'),
  createCountries('Nigeria', 'nig', 'af'),
  createCountries('Kenya', 'ken', 'af'),
  createCountries('Ghana', 'gha', 'af'),
  createCountries('Morocco', 'mor', 'af'),
];

var attractions = [
  createAttractions('White House', 'whiteHouse', 'usa'),
  createAttractions('Grand Canyon', 'grandC', 'usa'),
  createAttractions('Statue of Liberty', 'statueL', 'usa'),
  createAttractions('Yellowstone', 'yellowStone', 'usa'),
  createAttractions('Mount Rushmore', 'mountR', 'usa'),
  createAttractions('Niagra Falls', 'niagraF', 'can'),
  createAttractions('CN Tower', 'cnTower', 'can'),
  createAttractions('Rocky Mountains', 'rockyM', 'can'),
  createAttractions('Vancouver Island', 'vanI', 'can'),
  createAttractions('Parliament Hill', 'parH', 'can'),
];

var popularPlaces = [
  createPopular('White House', 'whiteHouse2'),
  createPopular('CN Tower', 'cnTower'),
  createPopular('', ''),
  createPopular('', ''),
  createPopular('', ''),
 ];

function updateCountries() {
  var selectedContinent = continentSelect.value;
  var options = countries.filter(function(country) {
    return country.continent === selectedContinent;
  });
  $("#countries").show();
  $("#attractions").hide();
  removeOptions(countrySelect);
  removeOptions(attractionsSelect);
  addOptions(countrySelect, options);
}

function updateAttractions() {
  var selectedCountry = countrySelect.value;
  var options = attractions.filter(function(attraction) {
    return attraction.country === selectedCountry;
  });
  $("#attractions").show();
  removeOptions(attractionsSelect);
  addOptions(attractionsSelect, options);
}

$("#popularPlaces").on("change", function() {
   if (this.value= 'whiteHouse2') {
	   $("#image1").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image2").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image3").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image4").html("<img src='whiteHouse.jpg' alt='White House'>");
   }
   else if (this.value = 'cnTower') {
	   $("#image1").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image2").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image3").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image4").html("<img src='whiteHouse.jpg' alt='White House'>");
   }
   else if (this.value = 'cnTower') {
	   $("#image1").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image2").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image3").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image4").html("<img src='whiteHouse.jpg' alt='White House'>");
   }
   else if (this.value = 'cnTower') {
	   $("#image1").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image2").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image3").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image4").html("<img src='whiteHouse.jpg' alt='White House'>");
   }
   else if (this.value = 'cnTower') {
	   $("#image1").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image2").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image3").html("<img src='whiteHouse.jpg' alt='White House'>");
	   $("#image4").html("<img src='whiteHouse.jpg' alt='White House'>");
   }
});

$("#countries").hide();
$("#attractions").hide();
addOptions(continentSelect, continents);
addOptions(popularSelect, popularPlaces);















