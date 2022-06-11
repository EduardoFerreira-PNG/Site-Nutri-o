let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
     
let xhr = new XMLHttpRequest();

xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")

xhr.addEventListener("load", function(){
    let resposta = xhr.responseText;
    let pacientes = JSON.parse(resposta);

    console.log(pacientes)
    
    pacientes.forEach( function(paciente) {
        adicionaPacienteNaTabela(paciente);
    });
});

xhr.send();

});
