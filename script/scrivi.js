$(document).ready(function(){
    
    $('#invia').click(function(){
        var $nome = $('#nome').val();
        var $cognome = $('#cognome').val();
        var $email = $('#email').val();
        
        if ($nome != "" && $cognome != "" && $email != "") {
            $.post("script/registra.php",
                { 
                nome: $nome, 
                cognome: $cognome, 
                email: $email 
                });   
        } else {
            alert("Compila tutti i campi!");
        }
        
        
    });
    
    
});