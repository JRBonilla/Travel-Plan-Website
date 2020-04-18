var map = L.map('map',{
    center: [30, 0],
    zoom: 2
});

var layerGroup = L.layerGroup().addTo(map);

var purchased = [ false, false ];

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Adds the plan
function addToCart(planID) {
    $('#order').html(generateOrder(planID));
    $('#order').show();
    updateMap(planID);
}

// Generates the HTML for the order
var generateOrder = function(planID) {
    var planTitle;
    switch (parseInt(planID)) {
        case 1:
        planTitle = "North American Tour";
        break;
        case 2:
        planTitle = "European Tour"
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

    purchased[planID-1] = true;
}

// Checks if the plan has been purchased or not
function isPurchased(planID) {
    if (purchased[planID - 1] == true) {
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

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}