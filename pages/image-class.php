<?php

class AttractionImage
{  
    private $attractId;  
    private $imagePath1;
    private $imagePath2;
    private $imageAlt1;
    private $imageAlt2;


   // constructor
   function __construct($attract_Id) 
   { 
       //connect to DB
        $servername = "localhost";
        $username = "root";
        $password = "";
        $dbname = "cps630_assign1_db";
        
        //get attraction info based on passed id
        $sqlQuery = "SELECT * FROM `tbl_attractions` WHERE `attract_id` = $attract_Id";

        // Create connection
        $conn = new mysqli($servername, $username, $password, $dbname);
        // Check connection
        if ($conn->connect_error) {
            die("Connection failed: " . $conn->connect_error);
        }

        $result = $conn->query($sqlQuery);
        $row = $result->fetch_assoc();
        
        $conn->close();

        $this->attractId = $attract_Id;

        $this->imagePath1 = $row["image_path_1"];
        $this->imagePath2 = $row["image_path_2"];
        $this->imageAlt1 = $row["image_alt_1"];
        $this->imageAlt2 = $row["image_alt_2"];

   }    
    


   public function getImagePath1() 
   {
        return $this->imagePath1;       
   }
   public function getImagePath2() 
   {
        return $this->imagePath2;       
   }
   public function getImageAlt1() 
   {
        return $this->imageAlt1;       
   }
   public function getImageAlt2() 
   {
        return $this->imageAlt2;       
   }
    
}
?>