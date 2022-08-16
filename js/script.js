var resultTabuada = [];


function calculaTabuada(){
  resultTabuada = [];
  let numForm = document.getElementById("formulario").value;

  document.getElementById("formulario").value = "";

  for(let i = 1;i<=10;i++){

    resultTabuada.push(numForm*i);
  }
  mostraResultadoTabuada(resultTabuada);
  
}

function mostraResultadoTabuada(resultTabuada){

  var resultTabuadaDiv = document.getElementById("result-tabuada");
  let tituloResultado = document.createElement("h3");
  tituloResultado.innerHTML = "";
  resultTabuadaDiv.innerHTML = "";

  let container = document.getElementById("container");
  for(let i =0;i<10;i++){
    console.log(resultTabuada[i]);
  }

  
  tituloResultado.innerHTML = "Resultado:";
  tituloResultado.style.textAlign = "center";
  resultTabuadaDiv.append(tituloResultado);
  

  for(let i =0;i<10;i++){
    let paragrafo = document.createElement("p");
    paragrafo.innerHTML = resultTabuada[i];
    paragrafo.style.textAlign = "center";
    paragrafo.style.margin = "auto";
    resultTabuadaDiv.appendChild(paragrafo); 
  }
  
}

function limpaTabuada(){
  window.location.reload();
}







