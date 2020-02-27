<!DOCTYPE html>
<html>
    <head>
        <h1 id="headTitle">Database Maintainance </h1>
        <link rel="stylesheet" type="text/css" href="../assets/css/maintain.css">
        <script type="text/javascript" src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.1.min.js"></script>
        <script type="text/javascript" src="../assets/js/maintain.js"></script>
        <?php
            session_start();
            //get the operation from previous page
            $operation = $_POST["selectOP"];

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
        ?>
        <script>
            $( document ).ready(function() {
                console.log("ready");
                if ("<?php echo $operation ?>" == "insert")
                {
                    document.getElementById("insertContainer").style.display = "block";
                }
                else if ("<?php echo $operation ?>" == "delete")
                {
                    document.getElementById("deleteContainer").style.display = "block";
                }
                else if ("<?php echo $operation ?>" == "update")
                {
                    document.getElementById("updateContainer").style.display = "block";
                }
            });
        </script>
    </head>

    <body>
        <div id="insertContainer">
            <!--Insert New Continent-->
            <div id="inContinent">
                <form method="post">
                    <h2>Insert new Continent</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    </br>
                    <label for="txtContinent">Enter Continent Name: </label>
                    <input type="text" id="txtContinent" name="txtContinent">
                    </br>
                    <input type="submit" id="btnInContinent" name="btnInContinent" value="GO">
                </form>
            </div>  
            <br>

            <!--Insert New Country-->
            <div id="inCountry">
                <form method="post">
                    <h2>Insert new Country</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    </br>
                    <label for="txtCountry">Enter Country Name: </label>
                    <input type="text" id="txtCountry" name="txtCountry">
                    </br>
                    <label for="selectInContinentID">Select Continent This Country is in: </label>
                    <!--Loop through db to get the continents-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_continent` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectInContinentID" name="selectInContinentID">';
                        echo "<option disabled selected value> -- select a continent -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['continent_id']."'>".$row['continent']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>
                    <input type="submit" id="btnInCountry" name="btnInCountry" value="GO">
                </form>
                </br>
            </div>  

            <!--Insert New Attraction-->
            <div id="inAttraction">
                <form method="post">
                    <h2>Insert new Attraction</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    </br>
                    
                    <!--attraction_name-->
                    <label for="txtAttraction">Enter Attraction Name: </label>
                    <input type="text" id="txtAttraction" name="txtAttraction">
                    </br>
                    
                    <!--country_id-->
                    <label for="selectInCountryID">Select Country This Attraction is in: </label>
                    <!--Loop through db to get the continents-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_country` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectInCountryID" name="selectInCountryID">';
                        echo "<option disabled selected value> -- select a country -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['country_id']."'>".$row['country']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>

                    <!--type_id-->
                    <label for="selectInAttractTypeID">Select Type of Attraction this is: </label>
                    <!--Loop through db to get the attraction types-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_attract_type` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectInAttractTypeID" name="selectInAttractTypeID">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['type_id']."'>".$row['type_name']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>

                    <!--date-of-creation-->
                    <label for="txtAttractDOC">Enter This Attraction's Date of Creation: </label>
                    <input type="text" id="txtAttractDOC" name="txtAttractDOC">
                    </br>

                    <!--dimensions-->
                    <label for="txtaDimensions">Enter This Attraction's Dimensions: </label>
                    <textarea rows = "5" cols = "60" id="txtaDimensions" name ="txtaDimensions"></textarea>
                    </br>

                    <!--founder-->
                    <label for="txtFounder">Enter This Attraction's Founder: </label>
                    <input type="text" id="txtFounder" name="txtFounder">
                    </br>

                    <!--Location-->
                    <label for="txtLocation">Enter This Attraction's Location: </label>
                    <input type="text" id="txtLocation" name="txtLocation">
                    </br>

                    <!--img path 1-->
                    <label for="txtImgPath1">Enter This Attraction's First Image Path: </label>
                    <input type="text" id="txtImgPath1" name="txtImgPath1">
                    </br>

                    <!--img path 2-->
                    <label for="txtImgPath2">Enter This Attraction's Second Image Path: </label>
                    <input type="text" id="txtImgPath2" name="txtImgPath2">
                    </br>

                    <!--img alt 1-->
                    <label for="txtImgAlt1">Enter This Attraction's First Image Alt: </label>
                    <input type="text" id="txtImgAlt1" name="txtImgAlt1">
                    </br>

                    <!--img alt 2-->
                    <label for="txtImgAlt2">Enter This Attraction's Second Image Alt: </label>
                    <input type="text" id="txtImgAlt2" name="txtImgAlt2">
                    </br>

                    <input type="submit" id="btnInAttraction" name="btnInAttraction" value="GO">
                </form>
            </div>  
        </div>
        <div id="deleteContainer">
            <!--Delete Continent-->
            <div id="delContinent">
                <form method="post">
                    <h2>Delete a Continent</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    <label for="selectDelContinent">Select Continent to Delete from DB: </label>
                    <!--Loop through db to get the Continents so user can select one to delete-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_continent` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectDelContinent" name="selectDelContinent">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['continent_id']."'>".$row['continent']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>
                    <input type="submit" id="btnDelContinent" name="btnDelContinent" value="GO">
                </form>
            </div>  
            <br>

            <!--Delete Country-->
            <div id="delCountry">
                <form method="post">
                    <h2>Delete a Country</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    <label for="selectDelCountry">Select Continent to Delete from DB: </label>
                    <!--Loop through db to get the Continents so user can select one to delete-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_country` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectDelCountry" name="selectDelCountry">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['country_id']."'>".$row['country']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>
                    <input type="submit" id="btnDelCountry" name="btnDelCountry" value="GO">
                </form>
                </br>
            </div>  

            <!--Delete Attraction-->
            <div id="delAttraction">
                <form method="post">
                    <h2>Delete an Attraction</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    <label for="selectDelAttraction">Select Attraction to Delete from DB: </label>
                    <!--Loop through db to get the Continents so user can select one to delete-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_attractions` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectDelAttraction" name="selectDelAttraction">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['attract_id']."'>".$row['attraction_name']."</option>";
                        }
                        echo "</select>";
                    ?>
                    
                    </br>
                    <input type="submit" id="btnDelAttraction" name="btnDelAttraction" value="GO">
                </form>
            </div>  
        </div>
        <div id="selectContainer">

        </div>
        <div id="updateContainer">
            <!--Update Continent-->
            <div id="upContinent">
                <form method="post">
                    <h2>Update a Continent</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    <label for="selectUpContinent">Select Continent to Delete from DB: </label>
                    <!--Loop through db to get the Continents so user can select one to delete-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_continent` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectUpContinent" name="selectUpContinent">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['continent_id']."'>".$row['continent']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>
                    <label for="txtUpContinent">Enter Updated Continent Name: </label>
                    <input type="text" id="txtUpContinent" name="txtUpContinent">
                    </br>
                    <input type="submit" id="btnUpContinent" name="btnUpContinent" value="GO">
                </form>
            </div>  
            <br>

            <!--Update Country-->
            <div id="upCountry">
                <form method="post">
                    <h2>Update a Country</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    <label for="selectUpCountry">Select Country to Update from DB: </label>
                    <!--Loop through db to get the Continents so user can select one to delete-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_country` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectUpCountry" name="selectUpCountry">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['country_id']."'>".$row['country']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>
                    <label for="txtUpContinent">Enter Updated Country Name: </label>
                    <input type="text" id="txtUpCountry" name="txtUpCountry">
                    </br>
                    <input type="submit" id="btnUpCountry" name="btnUpCountry" value="GO">
                </form>
                </br>
            </div>  

            <!--Delete Attraction-->
            <div id="upAttraction">
                <form method="post">
                    <h2>Update an Attraction</h2>
                    <input type="text" id="selectOP" name="selectOP" value="<?php echo $operation ?>">
                    <label for="selectUpAttraction">Select Attraction to Delete from DB: </label>
                    <!--Loop through db to get the Continents so user can select one to delete-->
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
                    </br>
                    
                    <label for="txtUpAttraction">Enter Updated Attraction Name: </label>
                    <input type="text" id="txtUpAttraction" name="txtUpAttraction">
                    </br>

                    <!--type_id-->
                    <label for="selectUpAttractTypeID">Select Updated Type of Attraction this is: </label>
                    <!--Loop through db to get the attraction types-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_attract_type` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectUpAttractTypeID" name="selectUpAttractTypeID">';
                        echo "<option disabled selected value> -- select a attraction type -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['type_id']."'>".$row['type_name']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>

                    <!--country_id-->
                    <label for="selectUpCountryID">Select Updated Country This Attraction is in: </label>
                    <!--Loop through db to get the continents-->
                    <?php
                        $sqlQuery = "SELECT * FROM `tbl_country` ";
                        $result = $conn->query($sqlQuery);
                        echo '<select id="selectUpCountryID" name="selectUpCountryID">';
                        echo "<option disabled selected value> -- select a country -- </option>";
                        while($row = $result->fetch_assoc()){
                            echo "<option value='".$row['country_id']."'>".$row['country']."</option>";
                        }
                        echo "</select>";
                    ?>
                    </br>

                    <!--date-of-creation-->
                    <label for="txtAttractDOC">Enter This Attraction's Updated Date of Creation: </label>
                    <input type="text" id="txtAttractDOC" name="txtAttractDOC">
                    </br>

                    <!--dimensions-->
                    <label for="txtaDimensions">Enter This Attraction's Updated Dimensions: </label>
                    <textarea rows = "5" cols = "60" id="txtaDimensions" name ="txtaDimensions"></textarea>
                    </br>

                    <!--founder-->
                    <label for="txtFounder">Enter This Attraction's Updated Founder: </label>
                    <input type="text" id="txtFounder" name="txtFounder">
                    </br>

                    <!--Location-->
                    <label for="txtLocation">Enter This Attraction's Updated Location: </label>
                    <input type="text" id="txtLocation" name="txtLocation">
                    </br>

                    <!--img path 1-->
                    <label for="txtImgPath1">Enter This Attraction's Updated First Image Path: </label>
                    <input type="text" id="txtImgPath1" name="txtImgPath1">
                    </br>

                    <!--img path 2-->
                    <label for="txtImgPath2">Enter This Attraction's Updated Second Image Path: </label>
                    <input type="text" id="txtImgPath2" name="txtImgPath2">
                    </br>

                    <!--img alt 1-->
                    <label for="txtImgAlt1">Enter This Attraction's Updated First Image Alt: </label>
                    <input type="text" id="txtImgAlt1" name="txtImgAlt1">
                    </br>

                    <!--img alt 2-->
                    <label for="txtImgAlt2">Enter This Attraction's Updated Second Image Alt: </label>
                    <input type="text" id="txtImgAlt2" name="txtImgAlt2">
                    </br>
                    <input type="submit" id="btnUpAttraction" name="btnUpAttraction" value="GO">
                </form>
            </div>
        </div>

        <?php
            //insert new continent
            if(isset($_POST['btnInContinent'])) { 
                $new_continent = $_POST['txtContinent'];
                $sqlQuery = "INSERT INTO `tbl_continent` (`continent_id`, `continent`) VALUES ('', '$new_continent');";
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            } 
            else if(isset($_POST['btnInCountry'])) {
                $new_country = $_POST['txtCountry'];
                $continent_id = $_POST['selectInContinentID'];
                $sqlQuery = "INSERT INTO `tbl_country` (`country_id`, `continent_id`, `country`) VALUES ('', $continent_id, '$new_country');";
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnInAttraction'])) {
                $attraction_name = $_POST['txtAttraction'];
                $country_id = $_POST['selectInCountryID'];
                $type_id = $_POST['selectInAttractTypeID'];
                $d_o_c = $_POST['txtAttractDOC'];
                $dimensions = $_POST['txtaDimensions'];
                $founder = $_POST['txtFounder'];
                $location = $_POST['txtLocation'];
                $imgPath1 = $_POST['txtImgPath1'];
                $imgPath2 = $_POST['txtImgPath2'];
                $imgAlt1 = $_POST['txtImgAlt1'];
                $imgAlt2 = $_POST['txtImgAlt2'];
                $sqlQuery = "INSERT INTO `tbl_attractions` (`attract_id`, `attraction_name`, `country_id`, `type_id`, `date-of-creation`, `dimensions`, `founder`, `location`, `image_path_1`, `image_path_2`, `image_alt_1`, `image_alt_2`, `user_1`, `user_date_1`, `comment_1`, `user_2`, `user_date_2`, `comment_2`) VALUES ('', '$attraction_name', $country_id, $type_id, '$d_o_c', '$dimensions', '$founder', '$location', '$imgPath1', '$imgPath2', '$imgAlt1', '$imgAlt2','','','','','','');";
                //echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "New record created successfully";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnDelContinent'])) {
                $continent_id = $_POST['selectDelContinent'];
                $sqlQuery = "DELETE FROM `tbl_continent` WHERE `tbl_continent`.`continent_id` = $continent_id";
                //echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "Record successfully removed ";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnDelCountry'])) {
                $country_id = $_POST['selectDelCountry'];
                $sqlQuery = "DELETE FROM `tbl_country` WHERE `tbl_country`.`country_id` = $country_id";
                //echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "Record successfully removed ";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnDelAttraction'])) {
                $attract_id = $_POST['selectDelAttraction'];
                $sqlQuery = "DELETE FROM `tbl_attractions` WHERE `tbl_attractions`.`attract_id` = $attract_id";
                //echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "Record successfully removed ";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnUpContinent'])) {
                $continent_id = $_POST['selectUpContinent'];
                $continent = $_POST['txtUpContinent'];
                $sqlQuery = "UPDATE `tbl_continent` SET `continent` = '$continent' WHERE `tbl_continent`.`continent_id` = $continent_id";
                //echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "Record successfully updated ";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnUpCountry'])) {
                $country_id = $_POST['selectUpCountry'];
                $country = $_POST['txtUpCountry'];
                $sqlQuery = "UPDATE `tbl_country` SET `country` = '$country' WHERE `tbl_country`.`country_id` = $country_id";
                //echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "Record successfully updated ";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            else if(isset($_POST['btnUpAttraction'])) {
                $attract_id = $_POST['selectUpAttraction'];
                $attraction_name = $_POST['txtUpAttraction'];
                $country_id = $_POST['selectUpCountryID'];
                $type_id = $_POST['selectUpAttractTypeID'];
                $d_o_c = $_POST['txtAttractDOC'];
                $dimensions = $_POST['txtaDimensions'];
                $founder = $_POST['txtFounder'];
                $location = $_POST['txtLocation'];
                $imgPath1 = $_POST['txtImgPath1'];
                $imgPath2 = $_POST['txtImgPath2'];
                $imgAlt1 = $_POST['txtImgAlt1'];
                $imgAlt2 = $_POST['txtImgAlt2'];
                $sqlQuery = "UPDATE `tbl_attractions` SET `attraction_name` = '$attraction_name', `type_id` = $type_id, `date-of-creation` = '$d_o_c', `dimensions` = '$dimensions', `founder` = '$founder', `location` = '$location', `image_path_1` = '$imgPath1', `image_path_2` = '$imgPath2', `image_alt_1` = '$imgAlt1', `image_alt_2` =  '$imgAlt2' WHERE `tbl_attractions`.`attract_id` = $attract_id"; 
                echo $sqlQuery;
                if ($conn->query($sqlQuery) === TRUE) {
                    echo "Record successfully updated ";
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
            
        ?>
        </br>
        <input type="button" onclick="location.href='../index.php';" value="Go Home" />
    </body>
</html>