

let pacientes = document.querySelectorAll(".paciente");

for (let i = 0; i < pacientes.length; i++){

    let paciente = pacientes[i]
    
    let tdPeso = paciente.querySelector(".info-peso");
    let peso = tdPeso.textContent;
    
    let tdAltura = paciente.querySelector(".info-altura");
    let altura = tdAltura.textContent;
    
    let resultImc = paciente.querySelector(".info-imc");
    
    let pesoValido = validaPeso(peso);
    let alturaValida = validaAltura(altura);

    if(!pesoValido){
        pesoValido = false;
        tdPeso.textContent = "Peso Invalido";
        paciente.classList.add("paciente__invalido");
    
    }
    
    if(!alturaValida){
        alturaValida = false;
        tdAltura.textContent = "Altura invalida";
        paciente.classList.add("paciente__invalido");
        
    }
    
    
    if(pesoValido && alturaValida === true){
        let imc = calculaImc(peso,altura);
        resultImc.textContent = imc;
    
    } else {
        resultImc.textContent = "nao calculado por informações erradas";
    }
}

function validaPeso(peso){
    if(peso >= 0 && peso < 200){
        return true;
    }else{
        return false;
        
    }
}

function validaAltura(altura){
    if(altura >= 0 && altura <= 3.0){
        return true;

    }else{
        return false;
    }
}

function calculaImc(peso,altura){
    let imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);

}



