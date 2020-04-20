<?php
    // Connect to db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cps630_assign1_db";
    $locationA = $_POST['locationA'];
    $locationB = $_POST['locationB'];
    $distance = $_POST['distance'];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve the location A's row from the database
    $locationAQuery = "SELECT * FROM `tbl_attractions` WHERE attraction_name = '".$locationA."'";
    $resultA = $conn->query($locationAQuery);
    $rowA = $resultA->fetch_assoc();

    // Retrieve the location B's row from the database
    $locationBQuery = "SELECT * FROM `tbl_attractions` WHERE attraction_name = '".$locationB."'";
    $resultB = $conn->query($locationBQuery);
    $rowB = $resultB->fetch_assoc();

    // The comparison table HTML
    echo "<table class='table' style='width:96%'>";
    echo "<thead>";
    echo "<tr>";
    echo "<th class=`col-xs-6`></th>";
    echo "<th class=`col-xs-5`>".$locationA."</th>";
    echo "<th class=`col-xs-4`>".$locationB."</th>";
    echo "</tr>";
    echo "<tr>";
    echo "<td><b>Location</b></td>";
    echo "<td>".$rowA['location']."</td>";
    echo "<td>".$rowB['location']."</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td><b>Price</b></td>";
    echo "<td>$".$rowA['price']."</td>";
    echo "<td>$".$rowB['price']."</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<tr>";
    echo "<td><b>Date</b></td>";
    echo "<td>".$rowA['date-of-creation']."</td>";
    echo "<td>".$rowB['date-of-creation']."</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td><b>Founder</b></td>";
    echo "<td>".$rowA['founder']."</td>";
    echo "<td>".$rowB['founder']."</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td><b>Distance</b></td>";
    echo "<td>".$distance."</td>";
    echo "<td>".$distance."</td>";
    echo "</tr>";
    echo "<tr>";
    echo "<td><b>Average Ranking</b></td>";
    echo "<td>".$rowA['rank']."</td>";
    echo "<td>".$rowB['rank']."</td>";
    echo "</tr>";
    echo "</thead>";
    echo "</table>";
?>