<!DOCTYPE html>
<html>
  <head>
    <title>Plan Your Travel</title>
    <!--main page head stuff-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    <script type="text/javascript" src="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/js/bootstrap.min.js"></script>

    <!--Shopping Cart head stuff-->
    <meta content="text/html; charset=utf-8" http-equiv="Content-Type">
    <meta content="utf-8" http-equiv="encoding">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <link rel="stylesheet" type="text/css" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="assets/css/styles.css">
    <link rel="stylesheet" type="text/css" href="assets/css/animate.css">
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.6.0/dist/leaflet.css"
      integrity="sha512-xwE/Az9zrjBIphAcBb3F6JVqxf46+CDLwfLMHloNu6KEQCAWi6HcDUbeOfBIptF7tcCzusKFjFw2yuvEpDL9wQ=="
      crossorigin="">
    <script src="https://unpkg.com/leaflet@1.6.0/dist/leaflet.js"
      integrity="sha512-gZwIG9x3wUXg2hdXF6+rVkLF/0Vi9U8D2Ntg4Ga5I5BZpVkVxlJWbSQtXPSiUTtC0TjtGOmxa1AJPuV0CPthew=="
      crossorigin=""></script>
    <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
    
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular.min.js"></script>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.9/angular-route.js"></script>
  </head>
  <body ng-app="myApp" class="container">
  <body class="container">
    <!--Navigation bar-->
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <li><div id="loggedIN"></div></li><br>
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
            <li><a class="button" data-toggle="modal" data-target="#aboutModal">About</a></li>
            <li><a class="button" data-toggle="modal" data-target="#contactModal">Contact</a></li>
            <li><a class="button" data-toggle="modal" data-target="#searchModal">Search</a></li>
            <li><a class="button" href="#!plans">Plans</a></li>
            <li><a class="button" id="btnLoggedIn" data-toggle="modal" data-target="#loginModal">Login</a></li>
            <li><a class="button" id="btnLoggedOut" onclick="logout()">Logout</a></li>
            <li><a class="button" id="btnRegister" data-toggle="modal" data-target="#registerModal">Register</a></li>
            <li><a class="button" id="btnAdmin" data-toggle="modal" data-target="#adminModal">admin</a></li>
            <li><a class="button" id="btnMaintain" data-toggle="modal" onclick="authMaintainPwd()" data-target="#maintainModal">DBMaintain</a></li>
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
            <h4 class="modal-title" id="searchModalLabel">Search</h4>
          </div>
          <!--Modal body-->
          <div class="modal-body">
            <!-- TODO: Add a form with: a search bar to enter text, check boxes or radio btns to filter by country, attraction etc, and a submit btn-->
            <form action="assets\php\search.php"  method="POST" id="searchCForm">
              <label>Search Country:</label>
              <div class="searchBar">
                <input type="text" id="searchCInput" name="searchCInput"><input type="submit" name="searchCSubmit">
              </div>
            </form><br>
            <form action="assets\php\search.php"  method="POST" id="searchAForm">
              <label>Search Attraction Type:</label>
              <div class="searchBar">
                <input type="text" id="searchAInput" name="searchAInput"><input type="submit" name="searchASubmit">
              </div>
            </form><br>
			      <form action="assets\php\search.php"  method="POST" id="searchNForm">
              <label>Search Attraction Name:</label>
              <div class="searchBar">
                <input type="text" id="searchNInput" name="searchNInput"><input type="submit" name="searchNSubmit">
              </div>
            </form><br>
			      <form action="assets\php\search.php"  method="POST" id="searchPForm">
              <label>Sort By Price:</label>
              <div class="searchBar">
                <select id="searchPInput">
                  <option value="ASC">Ascending</option>
                  <option value="DESC">Descending</option>
                </select>
                <input type="submit" name="searchPSubmit">
              </div>
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
                <input type="text" id="txtLoginUser" name="txtLoginUser"><br>
                <label for="txtLoginPass">Enter Password:</label>
                <input type="password" id="txtLoginPass" name="txtLoginPass"><br>
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
                <input type="text" id="txtRegisterUser" name="txtRegisterUser"><br>
                <label for="txtRegisterPass">Enter Password:</label>
                <input type="password" id="txtRegisterPass" name="txtRegisterPass"><br>
                <label for="txtFName">Enter First Name:</label>
                <input type="text" id="txtFName" name="txtFName"><br>
                <label for="txtLName">Enter Last Name:</label>
                <input type="text" id="txtLName" name="txtLName"><br>
                <label for="txtAddress">Address:</label>
                <input type="text" id="txtAddress" name="txtAddress"><br>
                <label for="txtTelNo">Tel No:</label>
                <input type="text" id="txtTelNo" name="txtTelNo"><br>
                <label for="txtEmail">Email:</label>
                <input type="text" id="txtEmail" name="txtEmail"><br>
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
                  <input type="text" id="txtRegisterUser" name="txtRegisterUser"><br>
                  <label for="txtRegisterPass">Enter Password:</label>
                  <input type="password" id="txtRegisterPass" name="txtRegisterPass"><br>
                  <label for="txtFName">Enter First Name:</label>
                  <input type="text" id="txtFName" name="txtFName"><br>
                  <label for="txtLName">Enter Last Name:</label>
                  <input type="text" id="txtLName" name="txtLName"><br>
                  <label for="txtAddress">Address:</label>
                  <input type="text" id="txtAddress" name="txtAddress"><br>
                  <label for="txtTelNo">Tel No:</label>
                  <input type="text" id="txtTelNo" name="txtTelNo"><br>
                  <label for="txtEmail">Email:</label>
                  <input type="text" id="txtEmail" name="txtEmail"><br>
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
    
    <div ng-view></div>
    <script>
        var app = angular.module("myApp", ["ngRoute"]);
        app.config(function($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl : "main.php"
            })
            .when("/plans", {
                templateUrl : "plan.php"
            });
        });
    </script>
  </body>
</html>
