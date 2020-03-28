<html>
    <head>
        <meta http-equiv="refresh" content="2;url=../../index.php"/>
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
            $username = $_POST['txtLoginUser'];
            $password = $_POST['txtLoginPass'];

            $sqlQuery = "SELECT * FROM tbl_users WHERE username='$username'";
            $result = $conn->query($sqlQuery);
            $row = $result->fetch_assoc();
            if($row["password"] == $password)
            {
                $_SESSION["loggedIn"] = "Y";
                $_SESSION["username"] = $username;
                setcookie("loggedIn", "Y", time() + (86400 * 30), "/");
                setcookie("username", $username, time() + (86400 * 30), "/");
                echo 'Login Successful, returning to home screen';
            }
            else
            {
                echo 'Login Unsuccessful, returning to home screen'; 
                $_SESSION["loggedIn"] = "N";
            }

        ?>
    </body>
</html>

