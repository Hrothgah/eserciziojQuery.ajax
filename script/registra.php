<?php

$dbname = "registrazione";
$host = "localhost";
$user = "root";
$pass = "";

$nome = $_POST['nome'];
$cognome = $_POST['cognome'];
$email = $_POST['email'];



$link = mysqli_connect($host, $user, $pass, $dbname);

mysqli_select_db ($link, $dbname) 
or die('Impossibile connettersi al Database: ' . mysql_error());

$query = "
Insert into utenti SET
nome='$nome',
cognome='$cognome',
email='$email'
";

$eseguiquery = mysqli_query($link,$query);





?>