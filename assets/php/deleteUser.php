<html>
    <head>
        <meta http-equiv="refresh" content="4;url=../../index.php"/>
    </head>
    <body>
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
            $user = $_POST['selectDelUser'];

            $sqlQuery = "DELETE FROM tbl_users WHERE username='$user'";
            $result = $conn->query($sqlQuery);
            echo 'Successfully Deleted User, returning to home screen';
        ?>
    </body>
</html>

