
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
  createCountries('United Kingdom', 'uk', 'eu'),
  createCountries('France', 'fr', 'eu'),
  createCountries('Japan', 'jap', 'asia'),
  createCountries('China', 'cn', 'asia'),
  createCountries('Australia', 'australia', 'aus'),
  createCountries('New Zealand', 'nz', 'aus'),
  createCountries('South Africa', 'saf', 'af'),
  createCountries('Nigeria', 'nig', 'af'),
];

var attractions = [
  createAttractions('White House', 'whiteHouse', 'usa'),
  createAttractions('Grand Canyon', 'grandC', 'usa'),
  createAttractions('Niagra Falls', 'niagraF', 'can'),
  createAttractions('CN Tower', 'cnTower', 'can'),
  createAttractions('Stonehenge', 'stoneH', 'uk'),
  createAttractions('Tower of London', 'towerL', 'uk'),
  createAttractions('Eiffel Tower', 'eiffelT', 'fr'),
  createAttractions('Louvre Museum', 'louvreM', 'fr'),
  createAttractions('Mount Fuji', 'fuji', 'jap'),
  createAttractions('Imperial Tokyo', 'imperialT', 'jap'),
  createAttractions('Great Wall of China', 'wallC', 'cn'),
  createAttractions('Terracotta Army', 'terracotta', 'cn'),
  createAttractions('Great Barrier Reef', 'reef', 'australia'),
  createAttractions('Uluru', 'uluru', 'australia'),
  createAttractions('Milford Sound', 'milford', 'nz'),
  createAttractions('Mount Cook', 'cook', 'nz'),
  createAttractions('Kruger National Park', 'kruger', 'saf'),
  createAttractions('Cape of Good Hope', 'capeG', 'saf'),
  createAttractions('Yankari National Park', 'yankari', 'nig'),
  createAttractions('Zuma Rock', 'zuma', 'nig'),
];

var popularPlaces = [
  createPopular('White House', 'whiteHouse'),
  createPopular('CN Tower', 'cnTower'),
  createPopular('Great Wall of China', 'wallC'),
  createPopular('Eiffel Tower', 'eiffelT'),
  createPopular('Mount Fuji', 'fuji'),
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

$( document ).ready(function() {
  $("#popularPlaces").on("change",function() {
    if (this.value == 'whiteHouse2') {
      $("#image1").html("<img src='assets/whiteHouse.jpg' class='image1' width='400' alt='White House'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
      $("#image2").html("<img src='assets/whiteHouse.jpg' width='180' alt='White House'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
      $("#image3").html("<img src='assets/whiteHouse.jpg' width='180' alt='White House'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
      $("#image4").html("<img src='assets/whiteHouse.jpg' width='180' alt='White House'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
    }
    else if (this.value == 'cnTower') {
      $("#image1").html("<img src='assets/cnTower.jpg' class='image1' width='400' alt='CN Tower'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
      $("#image2").html("<img src='assets/cnTower.jpg' width='180' alt='CN Tower'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
      $("#image3").html("<img src='assets/cnTower.jpg' width='180' alt='CN Tower'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
      $("#image4").html("<img src='assets/cnTower.jpg' width='180' alt='CN Tower'> <span class='caption1'>Text below the image <a href=''>Read More</a></span>");
    }
    /*
    else if (this.value == 'cnTower') {
      $("#image1").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image2").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image3").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image4").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
    }
    else if (this.value == 'cnTower') {
      $("#image1").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image2").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image3").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image4").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
    }
    else if (this.value = 'cnTower') {
      $("#image1").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image2").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image3").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
      $("#image4").html("<img src='assets/whiteHouse.jpg' alt='White House'>");
    }
    */
  });
});

$("#countries").hide();
$("#attractions").hide();
addOptions(continentSelect, continents);
addOptions(popularSelect, popularPlaces);















