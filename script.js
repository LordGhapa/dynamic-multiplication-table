(() => {
  const inputN1 = document.querySelector('#n1')
  const inputN2 = document.querySelector('#n2')
  const res = document.querySelector('#res')
  const btnGerar = document.querySelector('#gerar')
  const tabela = document.querySelector('#tabela')

  let tabuada;
  let tabuadaAte;

  function Geradora() {
    Carregando()//telaa de carregamento como coloca ???????????

    tabuada = inputN1.value == '' || inputN1.value > 250 ? 10 : inputN1.value
    tabuadaAte = inputN2.value == '' || inputN2.value > 250 ? 10 : inputN2.value
    tabela.innerHTML = ' '

    for (let i = 1; i <= tabuada; i++) {
      tabela.innerHTML += `<ul> <p>Tabuada do ${i}</p></ul>`

      let multiplicador = ''

      for (let j = 1; j <= tabuadaAte; j++) {
        multiplicador += `<li>${i}x${j}  = ${i * j}</li>`
      }

      tabela.childNodes[i].innerHTML += multiplicador
    }

    res.innerHTML = `${tabuada} X ${tabuadaAte} = ${tabuada * tabuadaAte}`
  }

  btnGerar.addEventListener('click', Geradora)

  function Carregando() {
   
    res.innerHTML = 'Carregando'
  }
  Geradora()
})()
