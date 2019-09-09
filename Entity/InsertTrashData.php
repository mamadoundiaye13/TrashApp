<?php

// Importing DBConfig.php file.
include 'DBConfig.php';

// Creating connection.
$con = mysqli_connect($HostName,$HostUser,$HostPass,$DatabaseName);

// Verifie la connexion
if (!$con) {
    echo "Erreur : Impossible de se connecter à MySQL." . PHP_EOL;
    echo "Errno de débogage : " . mysqli_connect_errno() . PHP_EOL;
    echo "Erreur de débogage : " . mysqli_connect_error() . PHP_EOL;
    exit;
}

// Getting the received JSON into $json variable.
$json = file_get_contents('php://input');

// decoding the received JSON and store into $obj variable.
$obj = json_decode($json,true);

// Populate User name from JSON $obj array and store into $name.
$longitude = $obj['longitude'];

// Populate User email from JSON $obj array and store into $email.
$latitude = $obj['latitude'];

// Populate address from JSON $obj array and store into $address.
$address = $obj['address'];

// Populate code_postal from JSON $obj array and store into $code_postal.
$is_active = 1;

// Creating SQL query and insert the record into MySQL database table.
$Sql_Query = "insert into TrashDetailsTable (longitude,latitude,address,is_active) values ('$longitude','$latitude','$address','$is_active')";
if(mysqli_query($con,$Sql_Query)){
        // If the record inserted successfully then show the message.
        $MSG = 'Trash Added Successfully' ;
        // Converting the message into JSON format.
        $json = json_encode($MSG);
        // Echo the message.
        echo $json ;
    }
else{
        echo 'Try Again';
    }

mysqli_close($con);
