<html>
    <head>
        <meta http-equiv="refresh" content="5;url=../../index.php"/>
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

            $username = $_POST['txtRegisterUser'];
            $password = $_POST['txtRegisterPass'];
            $fname = $_POST['txtFName'];
            $lname = $_POST['txtLName'];
            $address = $_POST['txtAddress'];
            $telNo = $_POST['txtTelNo'];
            $email = $_POST['txtEmail'];

            $sqlQuery = "SELECT * FROM tbl_users WHERE `username` = '$username'";
            $result = $conn->query($sqlQuery);
            if ($conn->query($sqlQuery) === TRUE) {
                echo 'Unsuccessful, username is taken, returning to home screen'; 
            }
            else
            {
                $sqlQuery2 = "INSERT INTO `tbl_users` (`username`, `password`, `fname`, `lname`, `address`, `telno`, `email`) VALUES ('$username', '$password', '$fname', '$lname', '$address', '$telNo', '$email')";
                if ($conn->query($sqlQuery2) === TRUE) {
                   // $_SESSION["loggedIn"] = "Y";
                    //$_SESSION["username"] = $username;
                    //setcookie("loggedIn", "Y", time() + (86400 * 30), "/");
                    //setcookie("username", $username, time() + (86400 * 30), "/");
                    echo 'Successfully Registered, returning to home screen';
                } else {
                    echo "Error: " . $sqlQuery . "<br>" . $conn->error;
                }
            }
        ?>
    </body>
</html>

