
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
var current_attraction,current_attraction2 = 0;

var continents = [
  createContinents('North America', 'am'),
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
  createAttractions('In and Out', 'InO', 'usa'),
  createAttractions('Victoria Street Injection Site', 'VSIS', 'can'),
  createAttractions('Big Ben', 'bigB', 'uk'),
  createAttractions('Notre-Dame', 'notreD', 'fr'),
  createAttractions('Akihabara', 'aki', 'jap'),
  createAttractions('Summer Palace', 'summerP', 'cn'),
  createAttractions('Sydney Harbor Bridge', 'sydneyB', 'australia'),
  createAttractions('Waitomo', 'waitomo', 'nz'),
  createAttractions('Robben Island', 'robben', 'saf'),
  createAttractions('Olumo Rock', 'olumo', 'nig'),
  
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

function readMoref1()
{
  document.cookie = "attract_type_id=" + current_attraction; 
  window.location.href = 'pages/readMorePages/readMore.php';
}

function readMoref2()
{
  document.cookie = "attract_type_id=" + current_attraction2; 
  window.location.href = 'pages/readMorePages/readMore.php';
}

function readMoref3()
{
  document.cookie = "attract_type_id=" + current_attraction3; 
  window.location.href = 'pages/readMorePages/readMore.php';
}

$( document ).ready(function() {
  // Popular places
  $("#popularPlaces").on("change",function() {
    // Display the image cards
    $('#imageContainer').show();

    if (this.value == 'whiteHouse') {
      current_attraction = 1;
      $("#image1").html("<img src='assets/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      current_attraction2 = 2;
      $("#image2").html("<img src='assets/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
      current_attraction3 = 22;
      $("#image3").html("<img src='assets/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
    }
    else if (this.value == 'cnTower') {
      current_attraction = 4;
      $("#image1").html("<img src='assets/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      current_attraction2 = 3;
      $("#image2").html("<img src='assets/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'wallC') {
      current_attraction = 11;
      $("#image1").html("<img src='assets/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      current_attraction2 = 12;
      $("#image2").html("<img src='assets/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'eiffelT') {
      current_attraction = 7;
      current_attraction2 = 8;
      $("#image1").html("<img src='assets/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'fuji') {
      current_attraction = 9;
      current_attraction2 = 10;
      $("#image1").html("<img src='assets/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
  });

  // Attractions
  $("#attractions").on("change",function() {
    // Display the image cards
    $('#imageContainer').show();

    if (this.value == 'whiteHouse') {
      current_attraction = 1;
      current_attraction2 = 2;
      $("#image1").html("<img src='assets/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'cnTower') {
      current_attraction = 4;
      current_attraction2 = 3;
      $("#image1").html("<img src='assets/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'wallC') {
      current_attraction = 11;
      $("#image1").html("<img src='assets/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'eiffelT') {
      current_attraction = 7;
      current_attraction2 = 8;
      $("#image1").html("<img src='assets/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'fuji') {
      current_attraction = 9;
      current_attraction2 = 10;
      $("#image1").html("<img src='assets/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'grandC')
    {
      current_attraction = 2;
      current_attraction2 = 1;
      $("#image1").html("<img src='assets/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'niagraF')
    {
      current_attraction = 3;
      current_attraction2 = 4;
      $("#image1").html("<img src='assets/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'stoneH')
    {
      current_attraction = 5;
      current_attraction2 = 6;
      $("#image1").html("<img src='assets/stoneH.jpg' class='image' width='400' alt='Stone Henge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/towerL.jpg' class='image' width='400' alt='Tower of London'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'towerL')
    {
      current_attraction = 6;
      current_attraction2 = 5;
      $("#image1").html("<img src='assets/towerL.jpg' class='image' width='400' alt='Tower of London'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/stoneH.jpg' class='image' width='400' alt='Stone Henge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'louvreM')
    {
      current_attraction = 8;
      current_attraction2 = 7;
      $("#image1").html("<img src='assets/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'imperialT')
    {
      current_attraction = 10;
      current_attraction2 = 9;
      $("#image1").html("<img src='assets/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'terracotta')
    {
      current_attraction = 12;
      current_attraction2 = 11;
      $("#image1").html("<img src='assets/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'reef')
    {
      current_attraction = 13;
      current_attraction2 = 14;
      $("#image1").html("<img src='assets/reef.jpg' class='image' width='400' alt='Great Barrier Reef'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/uluru.jpg' class='image' width='400' alt='Uluru'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'uluru')
    {
      current_attraction = 14;
      current_attraction2 = 13;
      $("#image1").html("<img src='assets/uluru.jpg' class='image' width='400' alt='Uluru'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/reef.jpg' class='image' width='400' alt='Great Barrier Reef'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'milford')
    {
      current_attraction = 15;
      current_attraction2 = 16;
      $("#image1").html("<img src='assets/milford.jpg' class='image' width='400' alt='Milford Sound'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/cook.jpg' class='image' width='400' alt='Mount Cook'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'cook')
    {
      current_attraction = 16;
      current_attraction2 = 15;
      $("#image1").html("<img src='assets/cook.jpg' class='image' width='400' alt='Mount Cook'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/milford.jpg' class='image' width='400' alt='Milford Sound'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'kruger')
    {
      current_attraction = 17;
      current_attraction2 = 18;
      $("#image1").html("<img src='assets/kruger.jpg' class='image' width='400' alt='Kruger National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'capeG')
    {
      current_attraction = 18;
      current_attraction2 = 17;
      $("#image1").html("<img src='assets/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image3").html("<img src='assets/kruger.jpg' class='image' width='400' alt='Kruger National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'yankari')
    {
      current_attraction = 19;
      current_attraction2 = 20;
      $("#image1").html("<img src='assets/yankari.jpg' class='image' width='400' alt='Yankari National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/zuma.jpg' class='image' width='400' alt='Zuma Rock'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
    else if (this.value == 'zuma')
    {
      current_attraction = 20;
      current_attraction2 = 19;
      $("#image1").html("<img src='assets/zuma.jpg' class='image' width='400' alt='Zuma Rock'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
      $("#image2").html("<img src='assets/yankari.jpg' class='image' width='400' alt='Yankari National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
    }
  });
});

addOptions(continentSelect, continents);
addOptions(popularSelect, popularPlaces);















