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