function addToCart(planID) {
    if (planID == 1) {
        $('#order').html(`
            <div class='planCard animated fadeInUp'>
                <p class='planCard-title'>Plan #1</p>
                <hr/>
                <span class='planCard-body'></span>
            </div>
        `);
    }
    else if (planID == 2) {
        $('#order').html(`
        <div class='planCard animated fadeInUp'>
            <p class='planCard-title'>Plan #2</p>
            <hr/>
            <span class='planCard-body'></span>
        </div>
    `);
    }

    $('#order').show();
}

var map = L.map('map',{
    center: [30, 0],
    zoom: 2
});

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var markers = [];