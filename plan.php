<!DOCTYPE html>
<html>
  <body class="container">
    <!--Plan section-->
    <div class="container-fluid">
      <!--Create a Plan & Order-->
      <table class="table">
        <thead>
          <tr>
            <th class="col-xs-6">Create a Plan</th>
            <th class="col-xs-5">Order</th>
          </tr>
        </thead>
        <tbody class="animated fadeInUp">
          <tr>
            <td>
              <!--Create a Plan-->
              <div class="planCard">
                <a onclick="collapse('UserPlan')" class="planCard-collapse">&#8964;</a>
                <p class="planCard-title">Create a Plan</p>
                <hr>
                <div class="planCard-body" id="UserPlan">
                  <!--Adds a location-->
                  <div id="add-location">
                    <b><p>Find a location</p></b>
                    <span>Sort by:</span>
                    <select id="location-sort">
                      <option disabled selected value> -- Select an option -- </option>
                      <option value="price">Price (low to high)</option>
                      <option value="attraction_name">Name (A-Z)</option>
                      <option value="country_id">Country</option>
                      <option value="location">Location</option>
                    </select><br><br>
                    <div id="sort-results">
                      <form>
                        <select size="5" id="location-select">
                        </select>
                        <br><br><br><br><br>
                      </form>
                    </div>
                  </div>
                  <button id="add-btn" type="button" class="btn btn-info" disabled="true" onclick="addLocation()">Add</button>
                </div>
              </div><br><br>
              <div id="imageContainer" class="imageContainer" style="display: none">
                <!--"One medium box at the center with the image of the place"-->                
                <div class="card2 animated fadeInUp" id="image1"></div>
                <br>
              </div>
              <div id="comparison" class="planCard animated fadeInUp" style="display: none">
                <a onclick="collapse('compare-table')" class="planCard-collapse">&#8964;</a>
                <p class="planCard-title">Comparison</p>
                <hr>
                <div class="planCard-body" id="compare-table">
                </div>
              </div>
            </td>
            <td>
              <div id="order"></div>
            </td>
          </tr>
        </tbody>
      </table>
      <!--Popular Travel Plans-->
      <table class="table">
        <thead>
          <tr>
            <th class="col-xs-6">Popular Travel Plans</th>
            <th class="col-xs-5"></th>
          </tr>
        </thead>
        <tbody class="animated fadeInUp">
          <tr>
            <td>
              <div class="planCard">
                <a onclick="collapse('NATour')" class="planCard-collapse">&#8964;</a>
                <p class="planCard-title">North American Tour</p>
                <hr>
                <div class="planCard-body" id="NATour">
                  <p><b>Locations: </b> CN Tower (CA), Niagara Falls (CA), White House (US), Grand Canyon (US)</p>
                  <p><b>Start Date:</b> March 1, 2020</p>
                  <p><b>Duration:</b> 2 months</p>
                  <p><b>Air fare:</b> $1000 CAD </p>
                  <p><b>Tour ID number:</b> 2390</p>
                  <p><b>Total Price:</b> $1500 CAD</p>
                  <button type="button" id="1" onclick="addToCart(this.id)" class="btn btn-info">Select</button>
                </div>
              </div>
              <br>
              <div class="planCard">
                <a id="2" onclick="collapse('EUTour')" class="planCard-collapse">&#8964;</a>
                <p class="planCard-title">European Tour</p>
                <hr>
                <div class="planCard-body" id="EUTour">
                  <p><b>Locations:</b> Stonehenge (UK), Tower of London (UK), Eiffel Tower (FR), Louvre Museum (FR)</p>
                  <p><b>Start Date:</b> April 1, 2020</p>
                  <p><b>Duration:</b> 3 months</p>
                  <p><b>Air fare:</b> $1500 CAD</p>
                  <p><b>Tour ID number:</b> 3423</p>
                  <p><b>Total Price:</b> $2000 CAD</p>
                  <button type="button" id="2" onclick="addToCart(this.id)" class="btn btn-info">Select</button>
                </div>
              </div>
            </td>
            <td>
            </td>
          </tr>
        </tbody>
      </table>
      
      <!--Map-->
      <div id="map"></div><br>

      <script type="text/javascript" src="assets/js/plans.js"></script>
      <script type="text/javascript" src="assets/js/Locations.js"></script>
      <script type="text/javascript" src="assets/js/home.js"></script>
    </div>
  </body>
</html>