function consultaCep(){
    var cep = document.getElementById("searcher").value;
    var url = "http://viacep.com.br/ws/"+cep+"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            console.log(response);
            $("#dados").html(response.logradouro)
        }
    })
}