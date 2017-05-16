$(document).ready(function(){
    
    var dbsize = 0;
    //blocco di query per l'ordine della tabella in base alle colonne
    var sortIdAsc = "SELECT * FROM utenti ORDER BY id ASC";
    var sortIdDesc = "SELECT * FROM utenti ORDER BY id DESC";
    var sortNamAsc = "SELECT * FROM utenti ORDER BY nome ASC";
    var sortNamDesc = "SELECT * FROM utenti ORDER BY nome DESC";
    var sortCogAsc = "SELECT * FROM utenti ORDER BY cognome ASC";
    var sortCogDesc = "SELECT * FROM utenti ORDER BY cognome DESC";
    var sortMailAsc = "SELECT * FROM utenti ORDER BY email ASC";
    var sortMailDesc = "SELECT * FROM utenti ORDER BY email DESC";
    
    var query = "SELECT * FROM utenti";
    
    var statoId = "off";
    var statoNome = "off";
    var statoCognome = "off";
    var statoEmail = "off";
    
    interroga();
    
    $('#SortId').click(function(){
        if (statoId == "off") {
            query = sortIdAsc;
            $('#tabella td').remove();
            interroga();
            statoId = "on";
        } else if (statoId == "on") {
            query = sortIdDesc;
            $('#tabella td').remove();
            interroga();
            statoId = "off";
        }
        
    });
    
    $('#SortNam').click(function(){
        if (statoNome == "off") {
            query = sortNamAsc;
            $('#tabella td').remove();
            interroga();
            statoNome = "on";
        } else if (statoNome == "on") {
            query = sortNamDesc;
            $('#tabella td').remove();
            interroga();
            statoNome = "off";
        }
    });
    
    $('#SortCog').click(function(){
        if (statoCognome == "off") {
            query = sortCogAsc;
            $('#tabella td').remove();
            interroga();
            statoCognome = "on";
        } else if (statoCognome == "on") {
            query = sortCogDesc;
            $('#tabella td').remove();
            interroga();
            statoCognome = "off";
        }
    });
    
    $('#SortMail').click(function(){
        if (statoEmail == "off") {
            query = sortMailAsc;
            $('#tabella td').remove();
            interroga();
            statoEmail = "on";
        } else if (statoEmail == "on") {
            query = sortMailDesc;
            $('#tabella td').remove();
            interroga();
            statoEmail = "off";
        }  
    });
    

    function interroga() {
        $.ajax({                                      
        url: 'script/utenti.php',
        type: 'POST',
        data: {query:query},
        dataType: 'json',
        success: function(data)
            {
            dbsize = Object.keys(data).length;
            var i = 0;
            //console.log("L'array contiene " + dbsize + " elementi.");
            while (i < dbsize) {
                var id = data[i].id;              
                var nome = data[i].nome;            
                var cognome = data[i].cognome;
                var email = data[i].email;
            
            
                $('#tabella').append("<tr><td id=\"idT\">"+id+"</td><td>"+nome+"</td><td>"+cognome+"</td><td>"+email+"</td><td><img class=\"elimina\" src=\"img/redx.png\"/></td></tr>");
                i = i + 1;
                }
          
            } 
        
        });
    }
    
    $('body').on("click",".elimina", function(){
       
      
        var $idRigaElimina = $(this).parents('tr').children('#idT').html();
        var $queryE = "DELETE from utenti WHERE id = " + $idRigaElimina;
        
            $.post("script/elimina.php",
                { 
                queryE: $queryE 
            });
            $('#tabella td').remove();
            interroga();
});
    
    });
