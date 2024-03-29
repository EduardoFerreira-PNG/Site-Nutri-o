let botaoAdicionar = document.querySelector("#buscar-pacientes");

botaoAdicionar.addEventListener("click", function(){
     
let xhr = new XMLHttpRequest();

xhr.open("GET","https://api-pacientes.herokuapp.com/pacientes")

xhr.addEventListener("load", function(){
    let erroAjax = document.querySelector("#erro-ajax");

    if( xhr.status == 200){
        
        erroAjax.classList.add("invisivel")
        let resposta = xhr.responseText;
        let pacientes = JSON.parse(resposta);
    
        console.log(pacientes);
        
        pacientes.forEach( function(paciente) {
          adicionaPacienteNaTabela(paciente);
        });
    } else {
        console.log(xhr.status);
        console.log(xhr.responseText);
        erroAjax.classList.remove("invisivel")
    }

});


xhr.send();

});
