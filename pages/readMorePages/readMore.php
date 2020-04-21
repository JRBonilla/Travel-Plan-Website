<!DOCTYPE html>
<html>
    <!---By clicking on the “Read more”, a new page will appear which is divided into three parts:  
        
    -->
    <head>
        <link rel="stylesheet" type="text/css" href="../../assets/css/readMoreStyles.css">
    </head>
    <body>
        <?php
            session_start();
            include('../attraction-class.php');
            include('../image-class.php');

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
            $attract_type_id = "attract_type_id";
            $this_attraction = new Attraction($_COOKIE[$attract_type_id]);
            $this_attraction_img = new AttractionImage($_COOKIE[$attract_type_id]);
            //$result = $conn->query($sqlQuery);
            $conn->close();
        ?>
        <!--
            - Part1 at the left and center that contains more small size images of the selected place (at least 2 more images), 
        -->
        <div id="part1">
            <!--This is a container for the small size images for part 1-->
            <h3>PICS</h3>
            <img src=
                <?php
                    echo $this_attraction_img->getImagePath1();
                ?> 
            width='180' alt="">
            <img src=
                <?php
                    echo $this_attraction_img->getImagePath2();
                ?> 
            width='180' alt="">
        </div>
        <!--
            - Part2 at the right that contains more detailed description about the selected place e.g.: Date of creation, Name of the founder or builder, Dimensions, Location, Direction, and etc
            The size of the small images should be fixed for any selected item. The shopping cart icon should appear on this page as well.     
        -->
        <div id="part2">
            <h3>ABOUT THIS PLACE</h3>
            <p>
                <b>Date of Creation:</b>
                <?php
                    echo $this_attraction->getDateOfCreation();
                ?>
            </p>
            <p>
                <b>Dimensions:</b>
                <?php
                    echo $this_attraction->getDimensions();
                ?>
            </p>
            <p>
                <b>Founder:</b> 
                <?php
                    echo $this_attraction->getFounder();
                ?>
            </p>
            <p>
                <b>Location:</b> 
                <?php
                    echo $this_attraction->getLocation();
                ?>
            </p>
        </div>
        <!--        
            - Part3 at the bottom contains “Reviews” or “Recent Posts”  about the selected place. Each post should appear with the name of the reviewer and the date and time that it was posted (at least 2 posts be seen)
        -->
        </br></br></br></br></br></br></br></br></br></br></br></br>
        <div id="part3">
            <h3>RECENT POSTS</h3>
            <p>
                <b>
                    <?php
                        echo $this_attraction->getUser1();
                    ?>
                </b>
                <?php
                    echo $this_attraction->getUserDate1();
                ?>       
            </p>
            <p>
                <?php
                    echo $this_attraction->getComment1();
                ?>   
            </p>
            </br>
            <p>
                <b>
                    <?php
                        echo $this_attraction->getUser2();
                    ?>
                </b>
                <?php
                    echo $this_attraction->getUserDate2();
                ?>       
            </p>
            <p>
                <?php
                    echo $this_attraction->getComment2();
                ?>   
            </p>
        </div>
        <div id="iteration3">
            <h2>PRICE</h2>
            <p>
                <b>
                    <?php
                        echo $this_attraction->getPrice();
                    ?>
                </b>
            </p>
        </div>
    </body>
</html>