<?php
    // Connect to db
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "cps630_assign1_db";
    $sort = $_POST['locationSort'];

    // Create connection
    $conn = new mysqli($servername, $username, $password, $dbname);
    // Check connection
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Retrieve all attractions
    $sqlQuery = "SELECT * FROM `tbl_attractions` ORDER BY ".$sort;
    $result = $conn->query($sqlQuery);
    
    // Display a list of attractions
    echo "<form action='' method='post'>";
    echo "<select size='5' id='location-select' onchange='enableAddButton()'>";
    while ($row = $result->fetch_assoc()) {
        echo "<option val='".$row['attraction_name']."' name='".$row['price']."'>".$row['attraction_name']."</option>";
    }
    echo "</select><br><br><br><br><br>";
    echo "</form>";
?>