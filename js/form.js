let btnAdicionar = document.querySelector("#adicionar-paciente");
btnAdicionar.addEventListener("click", function (event) {
  event.preventDefault();

  let form = document.querySelector("#form-adiciona");
  let paciente = obtemPacienteDoFormulario(form);

  let pacienteTr = montaTr(paciente);

  if(!validaPaciente(paciente)){
      alert("peso invalido");
      return;

  }

  let tabela = document.querySelector("#tabela-pacientes");

  tabela.appendChild(pacienteTr);

  form.reset();

  function obtemPacienteDoFormulario() {
    let paciente = {
      nome: form.nome.value,
      peso: form.peso.value,
      altura: form.altura.value,
      gordura: form.altura.value,
      imc: calculaImc(form.peso.value, form.altura.value),
    };

    return paciente;
  }

  function montaTr(paciente) {
    let pacienteTr = document.createElement("tr");
    pacienteTr.classList.add("paciente");

    pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
    pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
    pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
    pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
    pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

    return pacienteTr;
  }


  function montaTd(dado, classe){
      let td = document.createElement("td");
      td.textContent = dado;
      td.classList.add(classe);

      return td;
  }

  function validaPaciente(paciente){
    if(validaPeso(paciente.peso)){
        return true;

    }else{

        return false;
    }
  }





});
