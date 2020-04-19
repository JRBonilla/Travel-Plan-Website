<?php
    // Connect to db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cps630_assign1_db";
    $locationA = $_POST['locationA'];
    $locationB = $_POST['locationB'];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    echo "<table class='table' style='width:96%'>";
      echo "<thead>";
        echo "<tr>";
          echo "<th class=`col-xs-6`></th>";
          echo "<th class=`col-xs-5`>".$locationA."</th>";
          echo "<th class=`col-xs-4`>".$locationB."</th>";
        echo "</tr>";
        echo "<tr>";
          echo "<td>Location</td>";
          echo "<td></td>";
          echo "<td></td>";
        echo "</tr>";
        echo "<tr>";
          echo "<td>Price</td>";
          echo "<td></td>";
          echo "<td></td>";
        echo "</tr>";
        echo "<tr>";
          echo "<td>Distance</td>";
          echo "<td></td>";
          echo "<td></td>";
        echo "</tr>";
      echo "</thead>";
    echo "</table>";
?>