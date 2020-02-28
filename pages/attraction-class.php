<?php

class Attraction
{  
    private $attractId;
    private $attractionName;
    private $countryId;
    private $typeId;    
    private $dateOfCreation;
    private $dimensions;
    private $founder;
    private $location;
    private $user1;
    private $userDate1;
    private $comment1;
    private $user2;
    private $userDate2;
    private $comment2;

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
        $this->attractionName = $row["attraction_name"];
        $this->countryId = $row["country_id"];
        $this->typeId = $row["type_id"];
        $this->dateOfCreation = $row["date-of-creation"];
        $this->dimensions = $row["dimensions"];   
        $this->founder = $row["founder"];
        $this->location = $row["location"];

        $this->user1 = $row["user_1"];
        $this->userDate1 = $row["user_date_1"];   
        $this->comment1 = $row["comment_1"];
        $this->user2 = $row["user_2"];
        $this->userDate2 = $row["user_date_2"];   
        $this->comment2 = $row["comment_2"];
   }    
    
   public function getAttractionName() 
   {
        return $this->attractionName;       
   }
   public function getCountryId() 
   {
        return $this->countryId;       
   }
   public function getTypeId() 
   {
        return $this->typeId;       
   }
   public function getDateOfCreation() 
   {
        return $this->dateOfCreation;       
   }
   public function getDimensions() 
   {
        return $this->dimensions;       
   }
   public function getFounder() 
   {
        return $this->founder;       
   }
   public function getLocation() 
   {
        return $this->location;       
   }
   public function getUser1() 
   {
        return $this->user1;       
   }
   public function getUserDate1() 
   {
        return $this->userDate1;       
   }
   public function getComment1() 
   {
        return $this->comment1;       
   }
   public function getUser2() 
   {
        return $this->user2;       
   }
   public function getUserDate2() 
   {
        return $this->userDate2;       
   }
   public function getComment2() 
   {
        return $this->comment2;       
   }
    
}
?>