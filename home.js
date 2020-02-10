
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

function aboutUs() {
  $("#aboutBox").show();
}

function contactUs() {
  $("#contactBox").show();
}

function shoppingCart() {
  $("#shoppingCart").show();
}

function closeContact() {
  $("#contactBox").hide();
}

function closeAbout() {
  $("#aboutBox").hide();
}

function closeShoppingCart() {
  $("#shoppingCart").hide();
}

$( document ).ready(function() {
  // Popular places
  $("#popularPlaces").on("change",function() {
    if (this.value == 'whiteHouse') {
      $("#image1").html("<img src='assets/whiteHouse.jpg' class='image1 animated fadeInUp' width='400' alt='White House'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore2.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/grandC.jpg' class='image1 animated fadeInUp' width='400' alt='Grand Canyon'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore6.html'>Read More</a></span>");
    }
    else if (this.value == 'cnTower') {
      $("#image1").html("<img src='assets/cnTower.jpg' class='image1 animated fadeInUp' width='400' alt='CN Tower'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore2.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/niagraF.jpg' class='image1 animated fadeInUp' width='400' alt='Niagra Falls'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore7.html'>Read More</a></span>");
    }
    else if (this.value == 'wallC') {
      $("#image1").html("<img src='assets/greatWoC.jpg' class='image1 animated fadeInUp' width='400' alt='Great Wall of China'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore3.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/terracotta.jpg' class='image1 animated fadeInUp' width='400' alt='Terracotta Army'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore12.html'>Read More</a></span>");
    }
    else if (this.value == 'eiffelT') {
      $("#image1").html("<img src='assets/eiffelT.jpg' class='image1 animated fadeInUp' width='400' alt='Effiel Tower'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore4.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/louvreM.jpg' class='image1 animated fadeInUp' width='400' alt='Louvre Museum'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore10.html'>Read More</a></span>");
    }
    else if (this.value == 'fuji') {
      $("#image1").html("<img src='assets/fuji.jpg' class='image1 animated fadeInUp' width='400' alt='Mount Fuji'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore5.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/imperialT.jpg' class='image1 animated fadeInUp' width='400' alt='Imperial Tokyo'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore11.html'>Read More</a></span>");
    }
  });

  // Attractions
  $("#attractions").on("change",function() {
    if (this.value == 'whiteHouse') {
      $("#image1").html("<img src='assets/whiteHouse.jpg' class='image1 animated fadeInUp' width='400' alt='White House'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore2.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/grandC.jpg' class='image1 animated fadeInUp' width='400' alt='Grand Canyon'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore6.html'>Read More</a></span>");
    }
    else if (this.value == 'cnTower') {
      $("#image1").html("<img src='assets/cnTower.jpg' class='image1 animated fadeInUp' width='400' alt='CN Tower'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore2.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/niagraF.jpg' class='image1 animated fadeInUp' width='400' alt='Niagra Falls'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore7.html'>Read More</a></span>");
    }
    else if (this.value == 'wallC') {
      $("#image1").html("<img src='assets/greatWoC.jpg' class='image1 animated fadeInUp' width='400' alt='Great Wall of China'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore3.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/terracotta.jpg' class='image1 animated fadeInUp' width='400' alt='Terracotta Army'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore12.html'>Read More</a></span>");
    }
    else if (this.value == 'eiffelT') {
      $("#image1").html("<img src='assets/eiffelT.jpg' class='image1 animated fadeInUp' width='400' alt='Effiel Tower'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore4.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/louvreM.jpg' class='image1 animated fadeInUp' width='400' alt='Louvre Museum'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore10.html'>Read More</a></span>");
    }
    else if (this.value == 'fuji') {
      $("#image1").html("<img src='assets/fuji.jpg' class='image1 animated fadeInUp' width='400' alt='Mount Fuji'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore5.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/imperialT.jpg' class='image1 animated fadeInUp' width='400' alt='Imperial Tokyo'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore11.html'>Read More</a></span>");
    }
    else if (this.value == 'grandC')
    {
      $("#image1").html("<img src='assets/grandC.jpg' class='image1 animated fadeInUp' width='400' alt='Grand Canyon'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore6.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/whiteHouse.jpg' class='image1 animated fadeInUp' width='400' alt='White House'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore2.html'>Read More</a></span>");
    }
    else if (this.value == 'niagraF')
    {
      $("#image1").html("<img src='assets/niagraF.jpg' class='image1 animated fadeInUp' width='400' alt='Niagra Falls'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore7.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/cnTower.jpg' class='image1 animated fadeInUp' width='400' alt='CN Tower'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore2.html'>Read More</a></span>");
    }
    else if (this.value == 'stoneH')
    {
      $("#image1").html("<img src='assets/stoneH.jpg' class='image1 animated fadeInUp' width='400' alt='Stone Henge'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore8.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/towerL.jpg' class='image1 animated fadeInUp' width='400' alt='Tower of London'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore9.html'>Read More</a></span>");
    }
    else if (this.value == 'towerL')
    {
      $("#image1").html("<img src='assets/towerL.jpg' class='image1 animated fadeInUp' width='400' alt='Tower of London'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore9.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/stoneH.jpg' class='image1 animated fadeInUp' width='400' alt='Stone Henge'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore8.html'>Read More</a></span>");
    }
    else if (this.value == 'louvreM')
    {
      $("#image1").html("<img src='assets/louvreM.jpg' class='image1 animated fadeInUp' width='400' alt='Louvre Museum'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore10.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/louvreM.jpg' width='180' alt='Louvre Museum'> <span class='caption1 animated fadeInUp'>Text below the image <a href=''>Read More</a></span>");
    }
    else if (this.value == 'imperialT')
    {
      $("#image1").html("<img src='assets/imperialT.jpg' class='image1 animated fadeInUp' width='400' alt='Imperial Tokyo'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore11.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/eiffelT.jpg' class='image1 animated fadeInUp' width='400' alt='Effiel Tower'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore4.html'>Read More</a></span>");
    }
    else if (this.value == 'terracotta')
    {
      $("#image1").html("<img src='assets/terracotta.jpg' class='image1 animated fadeInUp' width='400' alt='Terracotta Army'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore12.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/greatWoC.jpg' class='image1 animated fadeInUp' width='400' alt='Great Wall of China'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore3.html'>Read More</a></span>");
    }
    else if (this.value == 'reef')
    {
      $("#image1").html("<img src='assets/reef.jpg' class='image1 animated fadeInUp' width='400' alt='Great Barrier Reef'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore13.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/uluru.jpg' class='image1 animated fadeInUp' width='400' alt='Uluru'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore14.html'>Read More</a></span>");
    }
    else if (this.value == 'uluru')
    {
      $("#image1").html("<img src='assets/uluru.jpg' class='image1 animated fadeInUp' width='400' alt='Uluru'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore14.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/reef.jpg' class='image1 animated fadeInUp' width='400' alt='Great Barrier Reef'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore13.html'>Read More</a></span>");
    }
    else if (this.value == 'milford')
    {
      $("#image1").html("<img src='assets/milford.jpg' class='image1 animated fadeInUp' width='400' alt='Milford Sound'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore15.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/cook.jpg' class='image1 animated fadeInUp' width='400' alt='Mount Cook'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore16.html'>Read More</a></span>");
    }
    else if (this.value == 'cook')
    {
      $("#image1").html("<img src='assets/cook.jpg' class='image1 animated fadeInUp' width='400' alt='Mount Cook'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore16.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/milford.jpg' class='image1 animated fadeInUp' width='400' alt='Milford Sound'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore15.html'>Read More</a></span>");
    }
    else if (this.value == 'kruger')
    {
      $("#image1").html("<img src='assets/kruger.jpg' class='image1 animated fadeInUp' width='400' alt='Kruger National Park'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore17.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/capeG.jpg' class='image1 animated fadeInUp' width='400' alt='Cape of Good Hope'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore18.html'>Read More</a></span>");
    }
    else if (this.value == 'capeG')
    {
      $("#image1").html("<img src='assets/capeG.jpg' class='image1 animated fadeInUp' width='400' alt='Cape of Good Hope'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore18.html'>Read More</a></span>");
      $("#image3").html("<img src='assets/kruger.jpg' class='image1 animated fadeInUp' width='400' alt='Kruger National Park'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore17.html'>Read More</a></span>");
    }
    else if (this.value == 'yankari')
    {
      $("#image1").html("<img src='assets/yankari.jpg' class='image1 animated fadeInUp' width='400' alt='Yankari National Park'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore19.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/zuma.jpg' class='image1 animated fadeInUp' width='400' alt='Zuma Rock'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore20.html'>Read More</a></span>");
    }
    else if (this.value == 'zuma')
    {
      $("#image1").html("<img src='assets/zuma.jpg' class='image1 animated fadeInUp' width='400' alt='Zuma Rock'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore20.html'>Read More</a></span>");
      $("#image2").html("<img src='assets/yankari.jpg' class='image1 animated fadeInUp' width='400' alt='Yankari National Park'> <span class='caption1 animated fadeInUp'>Text below the image <a href='pages/readMorePages/readMore19.html'>Read More</a></span>");
    }
  });
});

addOptions(continentSelect, continents);
addOptions(popularSelect, popularPlaces);















