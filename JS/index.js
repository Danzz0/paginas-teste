document.addEventListener('DOMContentLoaded', function() {

  /* esse IntersectionObserver é um objeto de uma api do navegdor
     que me permite saber se um elemento html está aparecendo na tela do usuário */

  const elementoObservado = new IntersectionObserver(objetosCarregados => { 

    objetosCarregados.forEach(paragrafo => {

      if ( paragrafo.isIntersecting ) {

        paragrafo.target.classList.add('visivel'); // vai adicionar a classe 'visivel' se o elemento estiver aparecendo na tela 
      } else {
        paragrafo.target.classList.remove('visivel');
      }

    });
  }, {
    threshold: 1 
  });

  const hiddenElements = document.querySelectorAll('.escondido');
  hiddenElements.forEach(el => elementoObservado.observe(el));
});








