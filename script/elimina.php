<?php

$dbname = "registrazione";
$host = "localhost";
$user = "root";
$pass = "";


$link = mysqli_connect($host, $user, $pass, $dbname);

mysqli_select_db ($link, $dbname) 
or die('Impossibile connettersi al Database: ' . mysql_error());

$query = $_POST['queryE'];

$eseguiquery = mysqli_query($link,$query);





?>