<!DOCTYPE html>
<html>
  <head>
    <title>Plan Your Travel</title>
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <!--<script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>-->
  </head>
  <body class="container">
    <!--Navigation bar-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <!--Navbar toggle for mobile screens-->
        <div class="navbar-header">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myTopNav">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
        <div class="collapse navbar-collapse">
          <!--Part 1 - Right side-->
          <ul class="nav navbar-nav rightNav">
            <li><a class="button" href="index.php">Home</a></li>
            <li><a class="button" data-toggle="modal" data-target="#aboutModal">About Us</a></li>
            <li><a class="button" data-toggle="modal" data-target="#contactModal">Contact Us</a></li>
            <li><a class="button" data-toggle="modal" data-target="#searchModal">Search</a></li>
            <li><a class="button" data-toggle="modal" onclick="authMaintainPwd()" data-target="#maintainModal">DBMaintain</a></li>
            <li><a class="button" href="#!shoppingCart">Shopping Cart</a></li>
            <li><a class="button" id="btnLoggedIn" data-toggle="modal" data-target="#loginModal">Login</a></li>
            <li><a class="button" id="btnLoggedOut" onclick="logout()">Logout</a></li>
            <li><div id="loggedIN"></div></li>
            <li><a class="button" id="btnRegister" data-toggle="modal" data-target="#registerModal">Register</a></li>
            <li><a class="button" id="btnAdmin" data-toggle="modal" data-target="#adminModal">admin</a></li>
          </ul>
          <!--Parts 2-3 - Left side-->
          <ul class="nav navbar-nav leftNav">
            <li><select id="continents" onchange="updateCountries()">
              <option value="" disabled selected>--- Continents ---</option>
            </select></li>
            <li><select id="countries" onchange="updateAttractions()" style="display:none" class="animated slideInLeft">
              <option value="" disabled selected>--- Countries ---</option>
            </select></li>
            <li><select id="attractions" style="display:none" class="animated slideInLeft">
              <option value="" disabled selected>--- Attractions ---</option>
            </select></li>
            <li><select id="popularPlaces">
              <option value="" disabled selected>--- Popular Places ---</option>
            </select></li>
          </ul>
        </div>
      </div>
    </nav>
  
    <!--About modal-->
    <div class="modal fade" id="aboutModal" tabindex="-1" role="dialog" aria-labelledby="aboutModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Modal title-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="aboutModalLabel">Hello we're CPS630 Group #2!</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <ol>
              <li>Jessye Lam
                <br>
                <p>Currently a 5th year Computer Science co-op student who is interested in pursuing a full stack job in the future.</p></li>
              <li>Christopher Seow
                <br>
                <p>i'm pretty much amazin</p>
              </li>
              <li>Jonathan Bonilla
                <br>
                <p>I am Computer Science student in my final year at Ryerson.</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!--Contact Us modal-->
    <div class="modal fade" id="contactModal" tabindex="-1" role="dialog" aria-labelledby="contactModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Modal title-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="contactModalLabel">We can be contacted at the following:</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <ol>
              <li>Jessye Lam
                <br>
                <p>Email: jdlam@ryerson.ca</p></li>
              <li>Christopher Seow
                <br>
                <p>Email: cseow@ryerson.ca</p></li>
              <li>Jonathan Bonilla
                <br>
                <p>Email: jonathan.bonilla@ryerson.ca</p>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>

    <!--Search modal-->
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

    <!--Login Modal-->
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Modal title-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="loginModalLabel">Login</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <div id="loginAuthContainer">
              <form action="assets\php\login.php" method="post">
                <label for="txtLoginUser">Enter Username:</label>
                <input type="text" id="txtLoginUser" name="txtLoginUser">
                <label for="txtLoginPass">Enter Password:</label>
                <input type="password" id="txtLoginPass" name="txtLoginPass">
                <input type="submit" value="Enter">
              </form>
              <label id="lbldenied" style="display:none"><b></b>Incorrect Username / Password</b></label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--Register Modal-->
    <div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="registerModal">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Modal title-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="registerModal">Register</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <div id="registerAuthContainer">
              <form action="assets\php\register.php" method="post">
                <label for="txtRegisterUser">Enter Username:</label>
                <input type="text" id="txtRegisterUser" name="txtRegisterUser">
                <label for="txtRegisterPass">Enter Password:</label>
                <input type="password" id="txtRegisterPass" name="txtRegisterPass">
                <label for="txtFName">Enter First Name:</label>
                <input type="text" id="txtFName" name="txtFName">
                <label for="txtLName">Enter Last Name:</label>
                <input type="text" id="txtLName" name="txtLName">
                <label for="txtAddress">Address:</label>
                <input type="text" id="txtAddress" name="txtAddress">
                <label for="txtTelNo">Tel No:</label>
                <input type="text" id="txtTelNo" name="txtTelNo">
                <label for="txtEmail">Email:</label>
                <input type="text" id="txtEmail" name="txtEmail">
                <input type="submit" value="Enter">
              </form>
              <label id="lbldenied" style="display:none"><b></b>Incorrect Username / Password</b></label>
            </div>
          </div>
        </div>
      </div>
    </div>

      <!--Admin Modal-->
      <div class="modal fade" id="adminModal" tabindex="-1" role="dialog" aria-labelledby="adminModal">
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <!--Modal title-->
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
              <h4 class="modal-title" id="adminModal">Admin</h4>
            </div>
            <!--Modal body-->
            <div class="modal-body">
              <h5>Register a User<h4>
              <div id="registerUserContainer">
                <form action="assets\php\register.php" method="post">
                  <label for="txtRegisterUser">Enter Username:</label>
                  <input type="text" id="txtRegisterUser" name="txtRegisterUser">
                  <label for="txtRegisterPass">Enter Password:</label>
                  <input type="password" id="txtRegisterPass" name="txtRegisterPass">
                  <label for="txtFName">Enter First Name:</label>
                  <input type="text" id="txtFName" name="txtFName">
                  <label for="txtLName">Enter Last Name:</label>
                  <input type="text" id="txtLName" name="txtLName">
                  <label for="txtAddress">Address:</label>
                  <input type="text" id="txtAddress" name="txtAddress">
                  <label for="txtTelNo">Tel No:</label>
                  <input type="text" id="txtTelNo" name="txtTelNo">
                  <label for="txtEmail">Email:</label>
                  <input type="text" id="txtEmail" name="txtEmail">
                  <input type="submit" value="Enter">
                </form>
                <label id="lbldenied" style="display:none"><b></b>Incorrect Username / Password</b></label>
              </div>
              <h5>Delete A User</h5>
              <div id="registerUserContainer">
                <form action="assets\php\deleteUser.php" method="post">
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
                      $sqlQuery = "SELECT * FROM `tbl_users` ";
                      $result = $conn->query($sqlQuery);
                      echo '<select id="selectDelUser" name="selectDelUser">';
                      echo "<option disabled selected value> -- select a user -- </option>";
                      while($row = $result->fetch_assoc()){
                          echo "<option value='".$row['username']."'>".$row['username']."</option>";
                      }
                      echo "</select>";
                  ?>
                  <input type="submit" value="Enter">
                </form>
                <label id="lbldenied" style="display:none"><b></b>Incorrect Username / Password</b></label>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!--DB Maintain modal-->
    <div class="modal fade" id="maintainModal" tabindex="-1" role="dialog" aria-labelledby="maintainModalLabel">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <!--Modal title-->
          <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">&times;</button>
            <h4 class="modal-title" id="maintainModalLabel">DB Maintain</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <div id="maintainAuthContainer">
              <label for="txtMaintain">Admin Access Required. Login to an Admin Account to continue.</label>
            </div>
            <div id="maintainContainer" style display="none">
              <label for="selectOP">Choose an Operation:</label>
              <!--Select operation dropdown-->
              <form action="pages/maintain.php" method="post">
                <select id="selectOP" name="selectOP">
                  <option disabled selected value> -- select an operation -- </option>
                  <option value="insert">INSERT</option>
                  <option value="delete">DELETE</option>
                  <option value="select">SELECT</option>
                  <option value="update">UPDATE</option>
                </select>
                <input type="submit" value="GO">
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    `  <?php
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
    ?>`
    <!--Images-->
    <div id="imageContainer" class="imageContainer" style="display: none">
      <!--"One medium box at the center with the image of the place"-->
      <div class="card animated fadeInUp" id="image1"></div>
      <br>
      <div class="card animated fadeInUp" id="image2"></div>
      <br>
      <div class="card animated fadeInUp" id="image3"></div>
      <br><br>
    </div>
    <script type="text/javascript" src="assets/js/home.js"></script>
  </body>
</html>