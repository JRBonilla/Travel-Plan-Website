var map = L.map('map',{
    center: [30, 0],
    zoom: 2
});

var layerGroup = L.layerGroup().addTo(map);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var purchased = [ false, false ];
var prices = [];
var userLocations = [];

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

// Enables the add button
function enableAddButton() {
    if (userLocations.length < 2) {
        $("#add-btn").attr("disabled", false);
    }
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
    // Add location and price to plan
    userLocations.push($('#location-select').val());
    prices.push($('#location-select').find("option:selected").attr('name'));
    
    // Reset form HTML
    $("#location-sort").prop("selectedIndex", 0);
    $('#sort-results').html(`
        <form>
            <select size="5" id="location-select">
            </select>
            <br><br><br><br><br>
        </form>
    `);
    $("#add-btn").attr("disabled", true);

    // Display image of location or table displaying info
    if (userLocations.length == 1) {
        var current_attraction;
        var reviewHTML = `
            <span class='caption2'>`+userLocations[0]+`</span>
            <br>
            <div id="review">
                <span>Rank: </span>
                <fieldset class="ranking">
                    <span>1</span>
                    <input type="radio" id="1" name="ranking" value="1" />
                    <input type="radio" id="2" name="ranking" value="2" />
                    <input type="radio" id="3" name="ranking" value="3" />
                    <input type="radio" id="4" name="ranking" value="4" />
                    <input type="radio" id="5" name="ranking" value="5" />
                    <span>5</span>
                </fieldset>
                <span>Leave a Review</span>
                <textarea rows="5"></textarea>
                <br><br><br><br>
            </div>
            <button type="submit" class="btn btn-info">Submit</button><br>
        `;

        $("#imageContainer").show();
        if (userLocations[0] == 'White House') {
            current_attraction = 1;
            $("#image1").html("<img src='assets/img/whiteHouse.jpg' class='image' width='400' alt='White House'>" + reviewHTML);
        }
        else if (userLocations[0] == 'CN Tower') {
            current_attraction = 4;
            $("#image1").html("<img src='assets/img/cnTower.jpg' class='image' width='400' alt='CN Tower'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Great Wall of China') {
            current_attraction = 11;
            $("#image1").html("<img src='assets/img/greatWoC.jpg' class='image' width='400' alt='Great Wall of China'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Eiffel Tower') {
            current_attraction = 7;
            $("#image1").html("<img src='assets/img/eiffelT.jpg' class='image' width='400' alt='Effiel Tower'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Mount Fuji') {
            current_attraction = 9;
            $("#image1").html("<img src='assets/img/fuji.jpg' class='image' width='400' alt='Mount Fuji'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Grand Canyon') {
            current_attraction = 2;
            $("#image1").html("<img src='assets/img/grandC.jpg' class='image' width='400' alt='Grand Canyon'>" + reviewHTML);
        }
        else if (userLocations[0] == 'In N Out') {
            current_attraction = 21;
            $("#image1").html("<img src='assets/img/ino.jpg' class='image' width='400' alt='In N Out'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Niagra Falls') {
            current_attraction = 3;
            $("#image1").html("<img src='assets/img/niagraF.jpg' class='image' width='400' alt='Niagra Falls'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Victoria Street Injection Site') {
            current_attraction = 22;
            $("#image1").html("<img src='assets/img/vsis.jpg' class='image' width='400' alt='Victoria Street Injection Site'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Stone Henge') {
            current_attraction = 5;
            $("#image1").html("<img src='assets/img/stoneH.jpg' class='image' width='400' alt='Stone Henge'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Tower of London') {
            current_attraction = 6;
            $("#image1").html("<img src='assets/img/towerL.jpg' class='image' width='400' alt='Tower of London'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Big Ben') {
            current_attraction = 23;
            $("#image1").html("<img src='assets/img/bigB.jpg' class='image' width='400' alt='Big Ben'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Louvre Museum') {
            current_attraction = 8;
            $("#image1").html("<img src='assets/img/louvreM.jpg' class='image' width='400' alt='Louvre Museum'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Notre Dame') {
            current_attraction = 24;
            $("#image1").html("<img src='assets/img/notre.jpg' class='image' width='400' alt='Notre Dame'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Imperial Tokyo') {
            current_attraction = 10;
            $("#image1").html("<img src='assets/img/imperialT.jpg' class='image' width='400' alt='Imperial Tokyo'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Akihabara') {
            current_attraction = 25;
            $("#image1").html("<img src='assets/img/aki.jpg' class='image' width='400' alt='Akibahara'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Terracotta Army') {
            current_attraction = 12;
            $("#image1").html("<img src='assets/img/terracotta.jpg' class='image' width='400' alt='Terracotta Army'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Summer Palace') {
            current_attraction = 26;
            $("#image1").html("<img src='assets/img/summperp.jpg' class='image' width='400' alt='Summer Palace'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Great Barrier Reef') {
            current_attraction = 13;
            $("#image1").html("<img src='assets/img/reef.jpg' class='image' width='400' alt='Great Barrier Reef'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Uluru') {
            current_attraction = 14;
            $("#image1").html("<img src='assets/img/uluru.jpg' class='image' width='400' alt='Uluru'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Sydney Harbour Bridge') {
            current_attraction = 27;
            $("#image1").html("<img src='assets/img/sydneyB.jpg' class='image' width='400' alt='Sydney Bridge'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Milford Sound') {
            current_attraction = 15;
            $("#image1").html("<img src='assets/img/milford.jpg' class='image' width='400' alt='Milford Sound'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Mount Cook') {
            current_attraction = 16;
            $("#image1").html("<img src='assets/img/cook.jpg' class='image' width='400' alt='Mount Cook'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Waitomo') {
            current_attraction = 28;
            $("#image1").html("<img src='assets/img/waitomo.jpg' class='image' width='400' alt='Waitomo'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Kruger National Park') {
            current_attraction = 17;
            $("#image1").html("<img src='assets/img/kruger.jpg' class='image' width='400' alt='Kruger National Park'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Cape of Good Hope') {
            current_attraction = 18;
            $("#image1").html("<img src='assets/img/capeG.jpg' class='image' width='400' alt='Cape of Good Hope'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Robben Island') {
            current_attraction = 29;
            $("#image1").html("<img src='assets/img/robben.jpg' class='image' width='400' alt='Robben Island'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Yankari National Park') {
            current_attraction = 19;
            $("#image1").html("<img src='assets/img/yankari.jpg' class='image' width='400' alt='Yankari National Park'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Zuma Rock') {
            current_attraction = 20;
            $("#image1").html("<img src='assets/img/zuma.jpg' class='image' width='400' alt='Zuma Rock'>" + reviewHTML);
        }
        else if (userLocations[0] == 'Olumo') {
            current_attraction = 30;
            $("#image1").html("<img src='assets/img/olumo.jpg' class='image' width='400' alt='Olumo'>" + reviewHTML);
        }
    }
    else {
        $("#imageContainer").hide();
    }

    if (userLocations.length == 2) {
        $("#comparison").show();
        var locationA = userLocations[0];
        var locationB = userLocations[1];
        $.post("assets/php/compare.php", { locationA: locationA, locationB: locationB }, function(data) {
            $("#compare-table").html(data);
        });
    }
    
    addToCart(3);
}

// Adds the plan
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
        for (var i = 0; i < userLocations.length; i++) {
            if (i >= 1) {
                planTitle += ", ";
            }
            planTitle += userLocations[i];
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
        map.setView([40, -90], 4);
        break
        case 2:
        locations = Europe;
        map.setView([50, 0], 6);
        break;
        case 3:
        locations = getLocationCoordinates();
        map.setView([30, 0], 2);
        break;
    }

    // Add the locations to the map
    L.geoJSON(locations, {
        style: function(feature) {
            return feature.properties && feature.properties.style;
        },
        
        onEachFeature: onEachFeature,

        pointToLayer: function(feature, latlng) {
            return L.marker(latlng);
        }
    }).addTo(layerGroup);
}

function getLocationCoordinates() {
    var userLocationCoords = {
        "type": "FeatureCollection",
        "features": []
    };

    for (var i = 0; i < userLocations.length; i++) {
        var nameA = userLocations[i];
        for (var j = 0; j < AllLocations.features.length; j++) {
            var nameB = AllLocations.features[j].properties.popupContent;
            if (nameA == nameB) {
                userLocationCoords.features.push(AllLocations.features[j]);
            }
        }
    }
    return userLocationCoords;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}