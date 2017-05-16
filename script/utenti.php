<?php 

$dbname = "registrazione";
$host = "localhost";
$user = "root";
$pass = "";

$link = mysqli_connect($host, $user, $pass, $dbname);

if (mysqli_connect_errno()) {
    printf("Connect failed: %s\n", mysqli_connect_error());
    exit();
}

//mysqli_select_db ($link, $dbname) 
//or die('Impossibile connettersi al Database: ' . mysql_error());

$query = $_POST['query'];

$eseguiquery = mysqli_query($link,$query);

$array = array();
          
//$array = mysqli_fetch_row($eseguiquery);

while ($row = mysqli_fetch_array($eseguiquery)) {
        // array temporaneo
        $product = array();
        $product["id"] = $row["id"];
        $product["nome"] = $row["nome"];
        $product["cognome"] = $row["cognome"];
        $product["email"] = $row["email"];



        
        array_push($array, $product);
}
    
//print_r($array);
  
echo json_encode($array);

?>