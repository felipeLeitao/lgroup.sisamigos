
//Equivalente ao document.ready
//Ele vai fazer com que nosso código javascript seja executado assim que nosso html tiver sido renderizado
$(function () {

    $("#cadastrar").click(function () {
        //alert("Cliquei no cadastrar");

        if ($("#nome").val().length > 2 ) {
            
            var url = "http://servicekluh.azurewebsites.net/api/amigo";

            var method = "POST";

            var amigo = {
                "NM_AMIGO" : $("#nome").val(),
                "DS_EMAIL": $("#email").val(),
                "NR_TELEFONE": $("#telefone").val(),
                "DT_NASCIMENTO" : $("#nascimento").val()
            };

            $.ajax({
                //Pra onde nois vai
                url: url,
                //Como nois vai
                method: method,
                //O que nois vai leva
                data: amigo,

                //Vai ser disparado se foi e voltou com sucesso (status 200)
                success: function () {
                    alert("Amigo Cadastado com sucesso!!");

                    //Limpa todos os campos da nossa tela
                    $("input").val("");
                },

                //Vai ser disparado caso tenha acontecido um erro
                error: function () {
                    alert("Deu ruim!");
                }
            });

        }

        else {
            alert("Dados incompletos");

            //todo: por um focus no nome...
        }


    });

});