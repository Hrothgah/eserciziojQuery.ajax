$(document).ready(function(){
    $('#ricerca').click(function(){
        var dbsize = 0;
        //var $ambito = $('.ambito:checked').val();
        var $ambito = $('.ambito:selected').val();
        var $testoR = $('#testoR').val();
        var parametri = " WHERE " + $ambito + " LIKE '%" + $testoR + "%'";
        var query = "SELECT * FROM utenti" + parametri;
        
        $('#tabellaR td').remove();
        ricerca();

        function ricerca() {
            $.ajax({                                      
            url: 'script/ricerca.php',
            type: 'POST',
            data: {query:query},
            dataType: 'json',
            success: function(data)
                {
                dbsize = Object.keys(data).length;
                
                    if (dbsize != 0) {
                    $('.modal-body p').remove();
                    var i = 0;
                    //console.log("L'array contiene " + dbsize + " elementi.");
                    while (i < dbsize) {
                        var id = data[i].id;              
                        var nome = data[i].nome;            
                        var cognome = data[i].cognome;
                        var email = data[i].email;
            
                        $('#tabellaR').append("<tr><td>"+id+"</td><td>"+nome+"</td><td>"+cognome+"</td><td>"+email+"</td></tr>");
                        i = i + 1;
                    }   
          
                    } else {
                        $('.modal-body p').remove();
                        $('.modal-body').append("<p style=\"color: red;\">Nessun utente trovato con i criteri di ricerca immessi. Riprova.</p>");
                    }
                }
            });
        }
    });
    
  });