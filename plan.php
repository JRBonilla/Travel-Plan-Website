<!DOCTYPE html>
<html>
  <body>
    <div class="modal fade" id="searchModal" tabindex="-1" role="dialog" aria-labelledby="searchModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Modal title-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="searchModalLabel">SEARCH</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <!-- TODO: Add a form with: a search bar to enter text, check boxes or radio btns to filter by country, attraction etc, and a submit btn-->
            <form method="POST" id="searchCForm">
              <label> Search Country: </label>
              <input type="text" id="searchCInput" name="searchCInput"><br><br>
              <input type="submit" name="searchCSubmit">
            </form>
            <form method="POST" id="searchAForm">
              <label> Search Attraction Type: </label>
              <input type="text" id="searchAInput" name="searchAInput"><br><br>
              <input type="submit" name="searchASubmit">
            </form>
            <form method="POST" id="searchNForm">
              <label> Search Attraction Name: </label>
              <input type="text" id="searchNInput" name="searchNInput"><br><br>
              <input type="submit" name="searchNSubmit">
            </form>
            <form method="POST" id="searchPForm">
              <label> Sort By Price: </label>
              <select id="searchPInput">
                <option value="ASC">Ascending</option>
                <option value="DESC">Descending</option>
              </select>
              <input type="submit" name="searchPSubmit">
            </form>
          </div>
        </div>
      </div>
    </div>
    <?php
        //connect to db
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "cps630_assign1_db";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }
        if(isset($_POST['searchCSubmit'])){
            $country = $_POST['searchCInput'];
            $sql = "SELECT * FROM `tbl_attractions` INNER JOIN `tbl_country` ON `tbl_attractions`.`country_id`=`tbl_country`.`country_id` WHERE `tbl_country`.`country`= '$country'";
            $result = $conn->query($sql);
            echo "<div class=\"searchDiv\">";
            echo "<table border = \"2\">"; 
            echo "<tr>";
            echo "<th>Attraction</th>";
            echo "<th>Date of Creation</th>";
            echo "<th>Founder</th>";
            echo "<th>Dimensions</th>";
            echo "<th>Location</th>";
            echo "<th>Price</th>";
            echo "<th>Read More</th>";
            echo "</tr>";
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>".$row["attraction_name"]."</td>";
                echo "<td>".$row["date-of-creation"]."</td>";
                echo "<td>".$row["founder"]."</td>";
                echo "<td>".$row["dimensions"]."</td>";
                echo "<td>".$row["location"]."</td>";
                echo "<td>".$row["price"]."</td>";
                echo "<td><a href='#' onclick='readMore(".$row["attract_id"].")'>Read More</a></td>";
                echo "</tr>";
            }
            echo "</table>";
            echo "</div>";
        }
        if(isset($_POST['searchASubmit'])){
            $attractionType = $_POST['searchAInput'];
            $sql = "SELECT * FROM `tbl_attractions` INNER JOIN `tbl_attract_type` ON `tbl_attractions`.`type_id`=`tbl_attract_type`.`type_id` WHERE `tbl_attract_type`.`type_name`= '$attractionType'";
            $result = $conn->query($sql);
            echo "<div class=\"searchDiv\">";
            echo "<table border = \"2\">"; 
            echo "<tr>";
            echo "<th>Attraction</th>";
            echo "<th>Date of Creation</th>";
            echo "<th>Founder</th>";
            echo "<th>Dimensions</th>";
            echo "<th>Location</th>";
            echo "<th>Price</th>";
            echo "<th>Read More</th>";
            echo "</tr>";
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>".$row["attraction_name"]."</td>";
                echo "<td>".$row["date-of-creation"]."</td>";
                echo "<td>".$row["founder"]."</td>";
                echo "<td>".$row["dimensions"]."</td>";
                echo "<td>".$row["location"]."</td>";
                echo "<td>".$row["price"]."</td>";
                echo "<td><a href='#' onclick='readMore(".$row["attract_id"].")'>Read More</a></td>";
                echo "</tr>";
            }
            echo "</table>";
            echo "</div>";
        }

        if(isset($_POST['searchNSubmit'])){
            $attractionName = $_POST['searchNInput'];
            $sql = "SELECT * FROM `tbl_attractions` WHERE `attraction_name`= '$attractionName'";
            $result = $conn->query($sql);
            echo "<div class=\"searchDiv\">";
            echo "<table border = \"2\">"; 
            echo "<tr>";
            echo "<th>Attraction</th>";
            echo "<th>Date of Creation</th>";
            echo "<th>Founder</th>";
            echo "<th>Dimensions</th>";
            echo "<th>Location</th>";
            echo "<th>Price</th>";
            echo "<th>Read More</th>";
            echo "</tr>";
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>".$row["attraction_name"]."</td>";
                echo "<td>".$row["date-of-creation"]."</td>";
                echo "<td>".$row["founder"]."</td>";
                echo "<td>".$row["dimensions"]."</td>";
                echo "<td>".$row["location"]."</td>";
                echo "<td>".$row["price"]."</td>";
                echo "<td><a href='#' onclick='readMore(".$row["attract_id"].")'>Read More</a></td>";
                echo "</tr>";
            }
            echo "</table>";
            echo "</div>";
        }
        
        if(isset($_POST['searchPSubmit'])){
            $order = $_POST['searchPInput'];
            $sql = "SELECT * FROM `tbl_attractions` ORDER BY price '$order'";
            $result = $conn->query($sql);
            echo "<div class=\"searchDiv\">";
            echo "<table border = \"2\">"; 
            echo "<tr>";
            echo "<th>Attraction</th>";
            echo "<th>Date of Creation</th>";
            echo "<th>Founder</th>";
            echo "<th>Dimensions</th>";
            echo "<th>Location</th>";
            echo "<th>Price</th>";
            echo "<th>Read More</th>";
            echo "</tr>";
            while($row = $result->fetch_assoc()){
                echo "<tr>";
                echo "<td>".$row["attraction_name"]."</td>";
                echo "<td>".$row["date-of-creation"]."</td>";
                echo "<td>".$row["founder"]."</td>";
                echo "<td>".$row["dimensions"]."</td>";
                echo "<td>".$row["location"]."</td>";
                echo "<td>".$row["price"]."</td>";
                echo "<td><a href='#' onclick='readMore(".$row["attract_id"].")'>Read More</a></td>";
                echo "</tr>";
            }
            echo "</table>";
            echo "</div>";
        }
    ?>
    <div>
      <form method="POST" id="ranking">
        <label> Ranking </label>
        <input type="text" id="rankingAttraction" name="rankingAttraction">
        <?php
            $sqlQuery = "SELECT * FROM `tbl_attractions` ";
            $result = $conn->query($sqlQuery);
            echo '<select id="selectAttraction" name="selectAttraction>';
            echo "<option disabled selected value> -- select an attraction -- </option>";
            while($row = $result->fetch_assoc()){
                echo "<option value='".$row['attraction_name']."></option>";
            }
            echo "</select>";
        ?>
        <input type="submit" name="rankingSubmit">
      </form>
      <?php
          if(isset($_POST['rankingSubmit'])){
              echo "Successfully ranked!";
          }
      ?>
    </div>
    <div>
      <form method="POST" id="review">
        <label> Write Review </label>
        <?php
            $sqlQuery = "SELECT * FROM `tbl_attractions` ";
            $result = $conn->query($sqlQuery);
            echo '<select id="selectUpAttraction" name="selectUpAttraction">';
            echo "<option disabled selected value> -- select a attraction type -- </option>";
            while($row = $result->fetch_assoc()){
                echo "<option value='".$row['attract_id']."'>".$row['attraction_name']."</option>";
            }
            echo "</select>";
        ?>
        <label> Review: </label>
        <input type="text" id="writeReview" name="writeReview"><br>
        <label> Username: </label>
        <input type="text" id="userReview" name="userReview"><br>
        <input type="submit" name="reviewSubmit">
      </form>
      <?php
          if(isset($_POST['reviewSubmit'])){
              $attract_id = $_POST['selectUpAttraction'];
              $review = $_POST['writeReview'];
              $user = $_POST['userReview'];
              $sqlQuery = "UPDATE `tbl_attractions` SET `user_1` = '$user', `comment_1` = $review WHERE `tbl_attractions`.`attract_id` = $attract_id"; 
              echo $sqlQuery;
              if ($conn->query($sqlQuery) === TRUE) {
                  echo "Review successfully updated ";
              } else {
                  echo "Error: " . $sqlQuery . "<br>" . $conn->error;
              }
          }
      ?>
    </div>
    <div>
      <form method="POST" id="distance">
        <label> Calculate Distance </label><br>
        <label> Attraction 1 </label>
        <?php
            $sqlQuery = "SELECT * FROM `tbl_attractions` ";
            $result = $conn->query($sqlQuery);
            echo '<select id="selectUpAttraction" name="selectUpAttraction">';
            echo "<option disabled selected value> -- select a attraction type -- </option>";
            while($row = $result->fetch_assoc()){
                echo "<option value='".$row['attract_id']."'>".$row['attraction_name']."</option>";
            }
            echo "</select>";
        ?>
        <br><label> Attraction 2 </label>
        <?php
            $sqlQuery = "SELECT * FROM `tbl_attractions` ";
            $result = $conn->query($sqlQuery);
            echo '<select id="selectUpAttraction2" name="selectUpAttraction2">';
            echo "<option disabled selected value> -- select a attraction type -- </option>";
            while($row = $result->fetch_assoc()){
                echo "<option value='".$row['attract_id']."'>".$row['attraction_name']."</option>";
            }
            echo "</select>";
        ?>
        <input type="submit" name="distanceSubmit">
      </form>
      <?php
          if(isset($_POST['distanceSubmit'])){
              $attract_id = $_POST['selectUpAttraction'];
              $attract_id2 = $_POST['selectUpAttraction2'];
              $sqlQuery = "SELECT * FROM `tbl_attractions` WHERE 'tbl_attractions`.'attract_id' = $attract_id"; 
              if ($conn->query($sqlQuery) === TRUE) {
                  $row = $result->fetch_assoc();
                  $distance = $row['distance'];
              } else {
                  echo "Error: " . $sqlQuery . "<br>" . $conn->error;
              }
              $sqlQuery = "SELECT * FROM `tbl_attractions` WHERE 'tbl_attractions`.'attract_id' = $attract_id2"; 
              if ($conn->query($sqlQuery) === TRUE) {
                  $row = $result->fetch_assoc();
                  $distance2 = $row['distance'];
              } else {
                  echo "Error: " . $sqlQuery . "<br>" . $conn->error;
              }
              if($distance2>$distance1){
                  $distance3 = $distance2-$distance1;
                  echo "The distance between the two is ", $distance3;
              }
              else if($distance1>$distance2){
                  $distance3 = $distance1-$distance2;
                  echo "The distance between the two is ", $distance3;
              }
          }
      ?>
    </div>
    <div>
      <form method="POST" id="invoice">
        <label> Calculate Invoice </label>
        <?php
            $sqlQuery = "SELECT * FROM `tbl_attractions` ";
            $result = $conn->query($sqlQuery);
            echo '<select id="selectUpAttraction" name="selectUpAttraction">';
            echo "<option disabled selected value> -- select a attraction type -- </option>";
            while($row = $result->fetch_assoc()){
                echo "<option value='".$row['attract_id']."'>".$row['attraction_name']."</option>";
            }
            echo "</select>";
        ?>
        <br><label> Number of children: </label>
        <input type="text" id="children" name="children"><br>

        <br><label> Number of adults: </label>
        <input type="text" id="adult" name="adult"><br>
        <input type="submit" name="invoiceSubmit">
      </form>
      <?php
          if(isset($_POST['invoiceSubmit'])){
              $attract_id = $_POST['selectUpAttraction'];
              $children = $_POST['children'];
              $adult = $_POST['adult'];
              $sqlQuery = "SELECT * FROM `tbl_attractions` WHERE 'tbl_attractions`.'attract_id' = $attract_id"; 
              if ($conn->query($sqlQuery) === TRUE) {
                  $row = $result->fetch_assoc();
                  $price = $row['price'];
              } else {
                  echo "Error: " . $sqlQuery . "<br>" . $conn->error;
              }
              $invoice = ($children * 0.5 * price) + ($adult * price);
              echo "Your invoice is ", $invoice;
          }
      ?>
    </div>
  </body>
</html>