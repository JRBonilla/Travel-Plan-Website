// Global variables
var map             = L.map('map',{ center: [30, 0], zoom: 2 });
var layerGroup      = L.layerGroup().addTo(map);
var purchased       = [ false, false ];
var customLocations = [];
var markers         = [];
var prices          = [];

// Create map layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);


// Collapses a plan card
function collapse(planID) {
    element = "#" + planID;

    if ($(element).is(':visible')) {
        $(element).hide();
    }
    else {
        $(element).show();
    }
}

// Enables the add button if the custom plan has less than 2 locations
function enableAddButton() {
    if (customLocations.length < 2) {
        enableButton("add-btn");
    }
}

// Enables a button given an id
function enableButton(buttonID) {
    $("#" + buttonID).attr('disabled', false);
}

// Disables a button given an id
function disableButton(buttonID) {
    $("#" + buttonID).attr('disabled', true);
}

// Sends the location-sort value to locationSort.php
$("#location-sort").change(function() {  
    var locationSort = $(this).val();
    $.post("assets/php/locationSort.php", { locationSort: locationSort }, function(data) {
        $("#sort-results").html(data);
    });
});

// Adds a location to the custom plan
function addLocation() {
    var newLocation = $('#location-select').val();
    
    // Cannot add the same location twice
    if (customLocations.length == 0 || newLocation != customLocations[0]) { 
        // Add location and price to plan
        customLocations.push(newLocation);
        prices.push($('#location-select').find("option:selected").attr('name'));
        
        // Reset location sort form HTML
        $("#location-sort").prop("selectedIndex", 0);
        $('#sort-results').html(`
            <form>
                <select size="5" id="location-select">
                </select>
                <br><br><br><br><br>
            </form>
        `);

        // Reset add button
        $("#add-btn").attr("disabled", true);
        
        addToCart(3);

        // Display image of location or table displaying info
        if (customLocations.length == 1) {
            var reviewHTML = `
                <span class='caption2'>`+customLocations[0]+`</span>
                <br>
                <div id="review-div">
                    <span>Rank: </span>
                    <form class="ranking" id="reviewForm" onchange="enableButton('review-btn')">
                        <span>1</span>
                        <input type="radio" id="1" name="ranking" value="1" />
                        <input type="radio" id="2" name="ranking" value="2" />
                        <input type="radio" id="3" name="ranking" value="3" />
                        <input type="radio" id="4" name="ranking" value="4" />
                        <input type="radio" id="5" name="ranking" value="5" />
                        <span>5</span>
                    </form>
                    <span>Leave a Review</span>
                    <textarea rows="5" name="review" form="reviewForm"></textarea>
                    <br><br><br><br>
                </div>
                <button id="review-btn" type="button" onclick="submitReview(this)" class="btn btn-info" disabled>Submit</button><br>
            `;

            $("#imageContainer").show();
            if (customLocations[0] == 'White House') {
                $("#image1").html("<img src='assets/img/whiteHouse.jpg' class='image' width='400' alt='White House'>" + reviewHTML);
            }
            else if (customLocations[0] == 'CN Tower') {
                $("#image1").html("<img src='assets/img/cnTower.jpg' class='image' width='400' alt='CN Tower'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Great Wall of China') {
                $("#image1").html("<img src='assets/img/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Eiffel Tower') {
                $("#image1").html("<img src='assets/img/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Mount Fuji') {
                $("#image1").html("<img src='assets/img/fuji.jpg' class='image' width='400' alt='Mount Fuji'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Grand Canyon') {
                $("#image1").html("<img src='assets/img/grandC.jpg' class='image' width='400' alt='Grand Canyon'>" + reviewHTML);
            }
            else if (customLocations[0] == 'In N Out') {
                $("#image1").html("<img src='assets/img/ino.jpg' class='image' width='400' alt='In N Out'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Niagara Falls') {
                $("#image1").html("<img src='assets/img/niagaraF.jpg' class='image' width='400' alt='Niagara Falls'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Victoria Street Injection Site') {
                $("#image1").html("<img src='assets/img/vsis.jpg' class='image' width='400' alt='Victoria Street Injection Site'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Stone Henge') {
                $("#image1").html("<img src='assets/img/stoneH.jpg' class='image' width='400' alt='Stone Henge'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Tower of London') {
                $("#image1").html("<img src='assets/img/towerL.jpg' class='image' width='400' alt='Tower of London'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Big Ben') {
                $("#image1").html("<img src='assets/img/bigB.jpg' class='image' width='400' alt='Big Ben'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Louvre Museum') {
                $("#image1").html("<img src='assets/img/louvreM.jpg' class='image' width='400' alt='Louvre Museum'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Notre Dame') {
                $("#image1").html("<img src='assets/img/notre.jpg' class='image' width='400' alt='Notre Dame'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Imperial Tokyo') {
                $("#image1").html("<img src='assets/img/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Akihabara') {
                $("#image1").html("<img src='assets/img/aki.jpg' class='image' width='400' alt='Akibahara'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Terracotta Army') {
                $("#image1").html("<img src='assets/img/terracotta.jpg' class='image' width='400' alt='Terracotta Army'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Summer Palace') {
                $("#image1").html("<img src='assets/img/summperp.jpg' class='image' width='400' alt='Summer Palace'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Great Barrier Reef') {
                $("#image1").html("<img src='assets/img/reef.jpg' class='image' width='400' alt='Great Barrier Reef'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Uluru') {
                $("#image1").html("<img src='assets/img/uluru.jpg' class='image' width='400' alt='Uluru'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Sydney Harbour Bridge') {
                $("#image1").html("<img src='assets/img/sydneyB.jpg' class='image' width='400' alt='Sydney Bridge'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Milford Sound') {
                $("#image1").html("<img src='assets/img/milford.jpg' class='image' width='400' alt='Milford Sound'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Mount Cook') {
                $("#image1").html("<img src='assets/img/cook.jpg' class='image' width='400' alt='Mount Cook'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Waitomo') {
                $("#image1").html("<img src='assets/img/waitomo.jpg' class='image' width='400' alt='Waitomo'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Kruger National Park') {
                $("#image1").html("<img src='assets/img/kruger.jpg' class='image' width='400' alt='Kruger National Park'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Cape of Good Hope') {
                $("#image1").html("<img src='assets/img/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Robben Island') {
                $("#image1").html("<img src='assets/img/robben.jpg' class='image' width='400' alt='Robben Island'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Yankari National Park') {
                $("#image1").html("<img src='assets/img/yankari.jpg' class='image' width='400' alt='Yankari National Park'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Zuma Rock') {
                $("#image1").html("<img src='assets/img/zuma.jpg' class='image' width='400' alt='Zuma Rock'>" + reviewHTML);
            }
            else if (customLocations[0] == 'Olumo') {
                $("#image1").html("<img src='assets/img/olumo.jpg' class='image' width='400' alt='Olumo'>" + reviewHTML);
            }
        }
        else {
            $("#imageContainer").hide();
        }

        // Display the comparison table
        if (customLocations.length == 2) {
            $("#comparison").show();
            var locationA = customLocations[0];
            var locationB = customLocations[1];

            var markerA = markers[0].getLatLng();
            var markerB = markers[2].getLatLng();
            var distance = (((markerA.distanceTo(markerB)).toFixed(0)/1000)) + ' km';

            $.post("assets/php/compare.php", { locationA: locationA, locationB: locationB, distance: distance }, function(data) {
                $("#compare-table").html(data);
            });
        }
    }
}

// Submits the review to the database
function submitReview() {
    // TODO: Actually submit review to database.

    $("#review-div").html(`
        <span class="animated fadeIn">Thank you for your feedback!</span>
    `);
    $("#review-btn").hide();
}

// Adds the plan to the cart
function addToCart(planID) {
    $('#order').html(generateOrder(planID));
    $('#order').show();
    updateMap(planID);
}

// Generates the HTML for the order
var generateOrder = function(planID) {
    var planTitle = "";
    switch (parseInt(planID)) {
        case 1:
        planTitle = "North American Tour";
        break;
        case 2:
        planTitle = "European Tour"
        break;
        case 3:
        for (var i = 0; i < customLocations.length; i++) {
            if (i >= 1) {
                planTitle += ", ";
            }
            planTitle += customLocations[i];
        }
        break;
    }

    var order = `
    <div class='planCard animated fadeInUp'>
        <p class='planCard-title'>`+planTitle+`</p>
        <hr>
        <div class='planCard-body'>
            <div id="part-1">
                <label for="quant[1]">Number of travelers:</label>
                <p class="input-group">
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-default btn-number" onclick="changeValue(this)" disabled="disabled" data-type="minus" data-field="quant[1]">
                            <span class="glyphicon glyphicon-minus"></span>
                        </button>
                    </span>
                    <input type="text" name="quant[1]" class="form-control input-number" id='numTravelers' onchange="updateButtons(this)" value="1" min="1" max="10">
                    <span class="input-group-btn">
                        <button type="button" class="btn btn-default btn-number" onclick="changeValue(this)" data-type="plus" data-field="quant[1]">
                            <span class="glyphicon glyphicon-plus"></span>
                        </button>
                    </span>
                </p>
                <button type="button" onclick="submitNumTravelers(`+planID+`)" class="btn btn-info">Next</button>
            </div>
            <div id="part-2" class="animated fadeIn">
                <div id="passengerList"></div>
                <br><br><br>
                <button type="button" onclick="submitOrder(`+planID+`)" id="purchase-button" class="btn btn-info">Submit Purchase</button>
                <button type="button" onclick="changeOrder(`+planID+`)" id="previous-button" class="btn btn-info">Return</button>
            </div>
            <div id="part-3" class="animated fadeIn">
                <p>Thank you for your purchase!</p>
            </div>
        </div>
    </div>
    `;
    return order;
};

// Changes the value when the plus/minus button is clicked
function changeValue(element) {
    fieldName  = $(element).attr('data-field');
    type       = $(element).attr('data-type');
    input      = $("input[name='"+fieldName+"']");
    currentVal = parseInt(input.val());

    if (!isNaN(currentVal)) {
        if (type == 'minus') {
            if (currentVal > input.attr('min')) {
                input.val(currentVal - 1).change();
            }
            if (parseInt(input.val()) == input.attr('min')) {
                $(element).attr('disabled', true);
            }
        }
        else if (type == 'plus') {
            if (currentVal < input.attr('max')) {
                input.val(currentVal + 1).change();
            }
            if (parseInt(input.val()) == input.attr('max')) {
                $(element).attr('disabled', true);
            }
        }
    }
    else {
        input.val(0);
    }
}

// Updates whether or not plus/minus buttons should be disabled based on min/max values
function updateButtons(element) {
    minValue   = parseInt($(element).attr('min'));
    maxValue   = parseInt($(element).attr('max'));
    currentVal = parseInt($(element).val());
    name       = $(element).attr('name');

    if (currentVal >= minValue) {
        $(".btn-number[data-type='minus'][data-field='"+name+"']").removeAttr('disabled');
    }
    else {
        alert("Sorry, the minimum value was reached.");
        $(element).val($(element).data('oldValue'));
    }

    if (currentVal <= maxValue) {
        $(".btn-number[data-type='plus'][data-field='"+name+"']").removeAttr('disabled');
    }
    else {
        alert("Sorry, the maximum value was reached.");
        $(element).val($(element).data('oldValue'));
    }
}

// Submits the number of travelers to the order
function submitNumTravelers(planID) {
    $('#part-1').hide();
    $('#part-2').show();

    numTravelers = $('#numTravelers').val();

    // Calculate the total price
    var totalTicketPrice = 0;
    switch (parseInt(planID)) {
        case 1:
        totalTicketPrice = 1500 * numTravelers;
        break;
        case 2:
        totalTicketPrice = 2000 * numTravelers;
        break;
        case 3:
        for (var i = 0; i < prices.length; i++) {
            totalTicketPrice += prices[i];
        }
        totalTicketPrice = totalTicketPrice * numTravelers;
        break;
    }
    totalTicketPrice = totalTicketPrice.toFixed(2);

    var total = totalTicketPrice * 1.13;
    var taxes = total - totalTicketPrice;

    // Generate the list + price HTML
    var priceHTML = "<span id='price'><b>Price:</b> $"+numberWithCommas(totalTicketPrice)+" CAD</span><br><br>";
    var taxesHTML = "<span id='price'><b>Taxes:</b> $"+numberWithCommas(taxes.toFixed(2))+" CAD</span><br><br>";
    var totalHTML = "<span id='price'><b>Total:</b> $"+numberWithCommas(total.toFixed(2))+" CAD</span><br><br>";

    listPlusPrice = generateTravelerList(numTravelers) + priceHTML + taxesHTML + totalHTML;
    $('#passengerList').html(listPlusPrice);

    if (!isPurchased(planID)) {
        $('#purchase-button').removeAttr('disabled');
    }
    else {
        $('#purchase-button').attr('disabled', true);
    }
}

// Generates the list of travelers and their ages
function generateTravelerList(numTravelers) {
    var travelerList = " ";
    for (var i = 0; i < numTravelers; i++) {
        travelerList += `
        <label for="quant[`+(i+2)+`]">Traveler #`+(i+1)+` age:</label>
        <p class="input-group">
            <span class="input-group-btn">
                <button type="button" class="btn btn-default btn-number" onclick="changeValue(this)" disabled="disabled" data-type="minus" data-field="quant[`+(i+2)+`]">
                    <span class="glyphicon glyphicon-minus"></span>
                </button>
            </span>
            <input type="text" name="quant[`+(i+2)+`]" class="form-control input-number" onchange="updateButtons(this)" value="1" min="1" max="120">
            <span class="input-group-btn">
                <button type="button" class="btn btn-default btn-number" onclick="changeValue(this)" data-type="plus" data-field="quant[`+(i+2)+`]">
                    <span class="glyphicon glyphicon-plus"></span>
                </button>
            </span>
        </p>
        `;
    }
    return travelerList;
};

// Returns to part 1 so the user can modify the number of travelers
function changeOrder(planID) {
    $('#part-2').hide();
    $('#part-1').show();
}

// Submits the order
function submitOrder(planID) {
    $('#part-2').hide();
    $('#part-3').show();

    if (planID != 3) {
        purchased[planID-1] = true;
    }
}

// Checks if the plan has been purchased or not
function isPurchased(planID) {
    if (planID != 3 && purchased[planID - 1] == true) {
        return true;
    }
    return false;
}

// Adds pop up content to each marker
function onEachFeature(feature, layer) {
    layer.bindPopup(feature.properties.popupContent);
    layer.on('mouseover', function(e) {
        this.openPopup();
    });
    layer.on('mouseout', function(e) {
        this.closePopup();
    });
}

// Updates the map to show the tour locations
function updateMap(planID) {
    var locations;
    layerGroup.clearLayers();

    // Select the locations depending on the planID
    switch (parseInt(planID)) {
        case 1:
        locations = NorthAmerica;
        break
        case 2:
        locations = Europe;
        break;
        case 3:
        locations = getLocationCoordinates();
        break;
    }

    // Add the locations to the map
    L.geoJSON(locations, {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            var marker = L.marker(latlng);
            if (markers[0] != marker) {
                markers.push(marker);
            }
            return marker;
        }
    }).addTo(layerGroup);

    // Zoom the map in or out to show all markers
    var group = new L.featureGroup(markers);
    map.fitBounds(group.getBounds());

    // Draw a path between the locations
    if (locations.features.length >= 2) {
        var path = L.polyline(getPathCoordinates(locations)).addTo(map);
        
        // Calculate the distance of the path
        var markerA = markers[0].getLatLng();
        var markerB = markers[2].getLatLng();
        var distance = (((markerA.distanceTo(markerB)).toFixed(0)/1000)) + ' km';
        
        path.bindPopup(distance);
        path.openPopup();
        
        // Add a distance popup to the path line on mouseover
        path.on('mouseover', function(e) {
            var layer = e.target;
            layer.bindPopup(distance);
            layer.openPopup();
        });

        // Close the distance popup of the path line on mouseout
        path.on('mouseout', function(e) {
            var layer = e.target;
            layer.closePopup();
        })
    }
}

// Calculates the coordinates for the line path
function getPathCoordinates(data) {
    var features = data.features, c = [];
    
    for (var i = 0; i < features.length; i++) {
        var feature = features[i];
        if (feature.geometry.type == "Point") {
            c.push(feature.geometry.coordinates.reverse());
        }
    }

    return c;
}

// Returns the coordinates of the locations in the custom plan
function getLocationCoordinates() {
    var userLocationCoords = {
        "type": "FeatureCollection",
        "features": []
    };

    for (var i = 0; i < customLocations.length; i++) {
        var nameA = customLocations[i];
        for (var j = 0; j < AllLocations.features.length; j++) {
            var nameB = AllLocations.features[j].properties.popupContent;
            if (nameA == nameB) {
                userLocationCoords.features.push(AllLocations.features[j]);
            }
        }
    }
    return userLocationCoords;
}

// Given a number, adds commas to help readability
function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}