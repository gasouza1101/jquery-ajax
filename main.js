function consultaCep(){
    var cep = document.getElementById("searcher").value;
    var url = "http://viacep.com.br/ws/"+cep+"/json/";
    $.ajax({
        url: url,
        type: "GET",
        success: function(response){
            if(response.erro == true){
                alert("CEP não encontrado")
            }
            console.log(response);
            $("#rua").html(response.logradouro)
            $("#bairro").html(response.bairro)
            $("#localidade").html(response.localidade)
            $("#estado").html(response.uf)
            $(".consultCep").show();
        },
        error:  function(response){
            alert("CEP não encontrado");
        }
    })
}
$(function(){
    $(".consultCep").hide();
});