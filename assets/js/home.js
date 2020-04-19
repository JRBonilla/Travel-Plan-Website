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
    createAttractions('In N Out', 'inO', 'usa'),
    createAttractions('Victoria Street Injection Site', 'vSIS', 'can'),
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

function readMoref1() {
    document.cookie = "attract_type_id=" + current_attraction; 
    window.location.href = 'pages/readMorePages/readMore.php';
}

function readMoref2() {
    document.cookie = "attract_type_id=" + current_attraction2; 
    window.location.href = 'pages/readMorePages/readMore.php';
}

function readMoref3() {
    document.cookie = "attract_type_id=" + current_attraction3; 
    window.location.href = 'pages/readMorePages/readMore.php';
}

function authMaintainPwd() {
    //pwd = document.getElementById("txtMaintain").value;
    
    //console.log(pwd)
    var admin = getCookie("admin");
    if(admin == 1) {
        //alert("correct");
        document.getElementById("maintainContainer").style.display = "block";
        document.getElementById("maintainAuthContainer").style.display = "none";
        document.getElementById("btnAdmin").style.display = "block";
        //document.getElementById("lblIncorrect").style.display = "none";
        document.getElementById("btnMaintain").style.display = "visible";
    }
    else {
        // document.getElementById("lblIncorrect").style.display = "block";
        document.getElementById("btnMaintain").style.display = "none";
    }
}

//Get cookie code found on w3schools
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function logout(){
    //clear cookies
    //document.cookie = "loggedIn=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

    //set cookie
    //document.cookie = "loggedIn=N"; 
    setCookie("loggedIn","N",1);
    setCookie("admin",0,1);
    location.reload();
}

//set cokie function from w3schools
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

$( document ).ready(function() {
    //check if someone is logged in
    var loggedInCheck = getCookie("loggedIn");
    var admin = getCookie("admin");
    authMaintainPwd();
    //if user is logged in
    if (loggedInCheck == "Y") {
        var username = getCookie("username");
        document.getElementById("loggedIN").innerHTML = "Currently logged in as: " + username;
        document.getElementById("loggedIN").style.display = "block";
        document.getElementById("btnLoggedIn").style.display = "none";
        document.getElementById("btnLoggedOut").style.display = "block";
        document.getElementById("btnRegister").style.display = "none";
    }
    //else if user is not logged in
    else {
        document.getElementById("loggedIN").style.display = "none";
        document.getElementById("btnLoggedIn").style.display = "block";
        document.getElementById("btnLoggedOut").style.display = "none";
        document.getElementById("btnRegister").style.display = "block";
    }
    // Popular places
    $("#popularPlaces").on("change",function() {
        // Display the image cards
        $('#imageContainer').show();

        if (this.value == 'whiteHouse') {
            current_attraction = 1;
            $("#image1").html("<img src='assets/img/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 2;
            $("#image2").html("<img src='assets/img/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 21;
            $("#image3").html("<img src='assets/img/ino.jpg' class='image' width='400' alt='In N Out'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'cnTower') {
            current_attraction = 4;
            $("#image1").html("<img src='assets/img/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 3;
            $("#image2").html("<img src='assets/img/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 22;
            $("#image3").html("<img src='assets/img/vsis.jpg' class='image' width='400' alt='VSIS'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'wallC') {
            current_attraction = 11;
            $("#image1").html("<img src='assets/img/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 12;
            $("#image2").html("<img src='assets/img/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 26;
            $("#image3").html("<img src='assets/img/summerp.jpg' class='image' width='400' alt='Summer Palace'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'eiffelT') {
            current_attraction = 7;
            $("#image1").html("<img src='assets/img/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 8;
            $("#image2").html("<img src='assets/img/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 24;
            $("#image3").html("<img src='assets/img/notre.jpg' class='image' width='400' alt='Notre Dame'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'fuji') {
            current_attraction = 9;
            $("#image1").html("<img src='assets/img/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 10;
            $("#image2").html("<img src='assets/img/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 25;
            $("#image3").html("<img src='assets/img/aki.jpg' class='image' width='400' alt='Akibahara'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
    });

    // Attractions
    $("#attractions").on("change",function() {
        // Display the image cards
        $('#imageContainer').show();

        if (this.value == 'whiteHouse') {
            current_attraction = 1;
            $("#image1").html("<img src='assets/img/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 2;
            $("#image2").html("<img src='assets/img/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 21;
            $("#image3").html("<img src='assets/img/ino.jpg' class='image' width='400' alt='In N Out'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'cnTower') {
            current_attraction = 4;
            $("#image1").html("<img src='assets/img/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 3;
            $("#image2").html("<img src='assets/img/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 22;
            $("#image3").html("<img src='assets/img/vsis.jpg' class='image' width='400' alt='VSIS'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'wallC') {
            current_attraction = 11;
            $("#image1").html("<img src='assets/img/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 12;
            $("#image2").html("<img src='assets/img/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 26;
            $("#image3").html("<img src='assets/img/summerp.jpg' class='image' width='400' alt='Summer Palace'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'eiffelT') {
            current_attraction = 7;
            $("#image1").html("<img src='assets/img/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 8;
            $("#image2").html("<img src='assets/img/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 24;
            $("#image3").html("<img src='assets/img/notre.jpg' class='image' width='400' alt='Notre Dame'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'fuji') {
            current_attraction = 9;
            $("#image1").html("<img src='assets/img/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 10;
            $("#image2").html("<img src='assets/img/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 25;
            $("#image3").html("<img src='assets/img/aki.jpg' class='image' width='400' alt='Akibahara'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'grandC') {
            current_attraction = 2;
            $("#image1").html("<img src='assets/img/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 1;
            $("#image2").html("<img src='assets/img/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 21;
            $("#image3").html("<img src='assets/img/ino.jpg' class='image' width='400' alt='In N Out'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'inO') {
            current_attraction = 21;
            $("#image1").html("<img src='assets/img/ino.jpg' class='image' width='400' alt='In N Out'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 1;
            $("#image2").html("<img src='assets/img/whiteHouse.jpg' class='image' width='400' alt='White House'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 2;
            $("#image3").html("<img src='assets/img/grandC.jpg' class='image' width='400' alt='Grand Canyon'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'niagraF') {
            current_attraction = 3;
            $("#image1").html("<img src='assets/img/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 4;
            $("#image2").html("<img src='assets/img/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 22;
            $("#image3").html("<img src='assets/img/vsis.jpg' class='image' width='400' alt='Victoria Street Injection Site'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'vSIS') {
            current_attraction = 22;
            $("#image1").html("<img src='assets/img/vsis.jpg' class='image' width='400' alt='Victoria Street Injection Site'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 4;
            $("#image2").html("<img src='assets/img/cnTower.jpg' class='image' width='400' alt='CN Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 3;
            $("#image3").html("<img src='assets/img/niagraF.jpg' class='image' width='400' alt='Niagra Falls'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'stoneH') {
            current_attraction = 5;
            $("#image1").html("<img src='assets/img/stoneH.jpg' class='image' width='400' alt='Stone Henge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 6;
            $("#image2").html("<img src='assets/img/towerL.jpg' class='image' width='400' alt='Tower of London'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 23;
            $("#image3").html("<img src='assets/img/bigB.jpg' class='image' width='400' alt='Big Ben'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'towerL') {
            current_attraction = 6;
            $("#image1").html("<img src='assets/img/towerL.jpg' class='image' width='400' alt='Tower of London'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 5;
            $("#image2").html("<img src='assets/img/stoneH.jpg' class='image' width='400' alt='Stone Henge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 23;
            $("#image3").html("<img src='assets/img/bigB.jpg' class='image' width='400' alt='Big Ben'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'bigB') {
            current_attraction = 23;
            $("#image1").html("<img src='assets/img/bigB.jpg' class='image' width='400' alt='Big Ben'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 5;
            $("#image2").html("<img src='assets/img/stoneH.jpg' class='image' width='400' alt='Stone Henge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 6;
            $("#image3").html("<img src='assets/img/towerL.jpg' class='image' width='400' alt='Tower of London'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'louvreM') {
            current_attraction = 8;
            $("#image1").html("<img src='assets/img/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 7;
            $("#image2").html("<img src='assets/img/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 24;
            $("#image3").html("<img src='assets/img/notre.jpg' class='image' width='400' alt='Notre Dame'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'notreD') {
            current_attraction = 24;
            $("#image1").html("<img src='assets/img/notre.jpg' class='image' width='400' alt='Notre Dame'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 7;
            $("#image2").html("<img src='assets/img/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 8;
            $("#image3").html("<img src='assets/img/louvreM.jpg' class='image' width='400' alt='Louvre Museum'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'imperialT') {
            current_attraction = 10;
            $("#image1").html("<img src='assets/img/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 9;
            $("#image2").html("<img src='assets/img/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 25;
            $("#image3").html("<img src='assets/img/aki.jpg' class='image' width='400' alt='Akibahara'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'aki') {
            current_attraction = 25;
            $("#image1").html("<img src='assets/img/aki.jpg' class='image' width='400' alt='Akibahara'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 9;
            $("#image2").html("<img src='assets/img/fuji.jpg' class='image' width='400' alt='Mount Fuji'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 10;
            $("#image3").html("<img src='assets/img/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'terracotta') {
            current_attraction = 12;
            $("#image1").html("<img src='assets/img/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 11;
            $("#image2").html("<img src='assets/img/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 26;
            $("#image3").html("<img src='assets/img/summerp.jpg' class='image' width='400' alt='Summer Palace'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'summerP') {
            current_attraction = 26;
            $("#image1").html("<img src='assets/img/summperp.jpg' class='image' width='400' alt='Summer Palace'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 11;
            $("#image2").html("<img src='assets/img/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 12;
            $("#image3").html("<img src='assets/img/terracotta.jpg' class='image' width='400' alt='Terracotta Army'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'reef') {
            current_attraction = 13;
            $("#image1").html("<img src='assets/img/reef.jpg' class='image' width='400' alt='Great Barrier Reef'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 14;
            $("#image2").html("<img src='assets/img/uluru.jpg' class='image' width='400' alt='Uluru'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 27;
            $("#image3").html("<img src='assets/img/sydneyB.jpg' class='image' width='400' alt='Sydney Bridge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'uluru') {
            current_attraction = 14;
            $("#image1").html("<img src='assets/img/uluru.jpg' class='image' width='400' alt='Uluru'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 13;
            $("#image2").html("<img src='assets/img/reef.jpg' class='image' width='400' alt='Great Barrier Reef'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 27;
            $("#image3").html("<img src='assets/img/sydneyB.jpg' class='image' width='400' alt='Sydney Bridge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'sydneyB') {
            current_attraction = 27;
            $("#image1").html("<img src='assets/img/sydneyB.jpg' class='image' width='400' alt='Sydney Bridge'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 13;
            $("#image2").html("<img src='assets/img/reef.jpg' class='image' width='400' alt='Great Barrier Reef'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 14;
            $("#image3").html("<img src='assets/img/uluru.jpg' class='image' width='400' alt='Uluru'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'milford') {
            current_attraction = 15;
            $("#image1").html("<img src='assets/img/milford.jpg' class='image' width='400' alt='Milford Sound'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 16;
            $("#image2").html("<img src='assets/img/cook.jpg' class='image' width='400' alt='Mount Cook'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 28;
            $("#image3").html("<img src='assets/img/waitomo.jpg' class='image' width='400' alt='Waitomo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'cook') {
            current_attraction = 16;
            $("#image1").html("<img src='assets/img/cook.jpg' class='image' width='400' alt='Mount Cook'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 15;
            $("#image2").html("<img src='assets/img/milford.jpg' class='image' width='400' alt='Milford Sound'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 28;
            $("#image3").html("<img src='assets/img/waitomo.jpg' class='image' width='400' alt='Waitomo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'waitomo') {
            current_attraction = 28;
            $("#image1").html("<img src='assets/img/waitomo.jpg' class='image' width='400' alt='Waitomo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 15;
            $("#image2").html("<img src='assets/img/milford.jpg' class='image' width='400' alt='Milford Sound'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 16;
            $("#image3").html("<img src='assets/img/cook.jpg' class='image' width='400' alt='Mount Cook'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'kruger') {
            current_attraction = 17;
            $("#image1").html("<img src='assets/img/kruger.jpg' class='image' width='400' alt='Kruger National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 18;
            $("#image2").html("<img src='assets/img/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 29;
            $("#image3").html("<img src='assets/img/robben.jpg' class='image' width='400' alt='Robben Island'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'capeG') {
            current_attraction = 18;
            $("#image1").html("<img src='assets/img/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 17;
            $("#image2").html("<img src='assets/img/kruger.jpg' class='image' width='400' alt='Kruger National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 29;
            $("#image3").html("<img src='assets/img/robben.jpg' class='image' width='400' alt='Robben Island'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'robben') {
            current_attraction = 29;
            $("#image1").html("<img src='assets/img/robben.jpg' class='image' width='400' alt='Robben Island'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 17;
            $("#image2").html("<img src='assets/img/kruger.jpg' class='image' width='400' alt='Kruger National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 18;
            $("#image3").html("<img src='assets/img/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'yankari') {
            current_attraction = 19;
            $("#image1").html("<img src='assets/img/yankari.jpg' class='image' width='400' alt='Yankari National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 20;
            $("#image2").html("<img src='assets/img/zuma.jpg' class='image' width='400' alt='Zuma Rock'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 30;
            $("#image3").html("<img src='assets/img/olumo.jpg' class='image' width='400' alt='Olumo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'zuma') {
            current_attraction = 20;
            $("#image1").html("<img src='assets/img/zuma.jpg' class='image' width='400' alt='Zuma Rock'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 19;
            $("#image2").html("<img src='assets/img/yankari.jpg' class='image' width='400' alt='Yankari National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 30;
            $("#image3").html("<img src='assets/img/olumo.jpg' class='image' width='400' alt='Olumo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
        else if (this.value == 'olumo') {
            current_attraction = 30;
            $("#image1").html("<img src='assets/img/olumo.jpg' class='image' width='400' alt='Olumo'> <span class='caption'>Text below the image <a href='#' onclick='readMoref1()'>Read More</a></span>");
            current_attraction2 = 20;
            $("#image2").html("<img src='assets/img/zuma.jpg' class='image' width='400' alt='Zuma Rock'> <span class='caption'>Text below the image <a href='#' onclick='readMoref2()'>Read More</a></span>");
            current_attraction3 = 19;
            $("#image3").html("<img src='assets/img/yankari.jpg' class='image' width='400' alt='Yankari National Park'> <span class='caption'>Text below the image <a href='#' onclick='readMoref3()'>Read More</a></span>");
        }
  });
});

addOptions(continentSelect, continents);
addOptions(popularSelect, popularPlaces);















