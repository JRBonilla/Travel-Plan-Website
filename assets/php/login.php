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
                $admin = $row["admin"];
                //clear cookies
                //setcookie("loggedIn", "", time() - 3600);
                //setcookie("username", "", time() - 3600);

                //set cookies
                setcookie("loggedIn", "Y", time() + (86400 * 30), "/");
                setcookie("username", $username, time() + (86400 * 30), "/");
                setcookie("admin",$admin, time() + (86400 * 30), "/");
                echo 'Login Successful, returning to home screen';
            }
            else
            {
                echo 'Login Unsuccessful, returning to home screen'; 
                setcookie("loggedIn", "N", time() + (86400 * 30), "/");
                $_SESSION["loggedIn"] = "N";
            }

        ?>
    </body>
</html>

