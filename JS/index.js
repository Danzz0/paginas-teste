document.addEventListener('DOMContentLoaded', function() {
    const path = window.location.pathname;
    console.log(path)
  
    // Verifica se a página é a desejada
    if (path == '/HTML/ciclo.html') {
      // Modifica o atributo de uma classe específica
      const elements = document.getElementsByClassName("imgHome");
      console.log(elements)

      for(let i = 0; i < elements.length; i++){

        elements[i].setAttribute('href', 'index.html');
        elements[i].style.height = 'none';
      } 
    //   elements.forEach(element => {
    //      // Substitua 'meuAtributo' e 'novoValor' pelos valores desejados
    //   });
    }
  });