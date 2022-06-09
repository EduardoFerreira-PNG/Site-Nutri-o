let tabela = document.querySelector("table");

tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
        event.target.parentNode.remove();

    },500);

});


//var removePacientes = document.querySelectorAll(".paciente");
//
//removePacientes.forEach(function(paciente) {
//    paciente.addEventListener("dblclick", function() {
//        this.remove();
//    });
//});  