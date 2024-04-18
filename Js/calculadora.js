function sim(){
  let div = document.getElementById("op-adicionais")
  if(div.style.display == 'none'){
      div.style.display = 'block'
  }
  else{
      div.style.display = 'block'
  }

}
function nao(){
  let div = document.getElementById("op-adicionais")
  if(div.style.display == 'block'){
      div.style.display = 'none'
  }
  else{
      div.style.display = 'none'
  }
}

function equipe(){
  let div = document.getElementById("pontos-p")
  if(div.style.display == 'none'){
    div.style.display = 'block'
}
else{
    div.style.display = 'block'
}
}


function calcular(){
  let leite = Number(document.getElementById('leite').value)
  let sangue = Number(document.getElementById('sangue').value)
  let acao = Number(document.getElementById('acao').value)
  let mascote = Number(document.getElementById('mascote').value)
  let quiz = Number(document.getElementById('quiz').value)
  let extra = Number(document.getElementById('extra').value)
  let kit = Number(document.getElementById('kit').value)
  let kit2 = Number(document.getElementById('kit2').value)
  let lata = Number(document.getElementById('lata').value)
  let arroz5 = Number(document.getElementById('arroz5').value)
  let arroz1 = Number(document.getElementById('arroz1').value)
  let feijao2 = Number(document.getElementById('feijao2').value)
  let feijao1 = Number(document.getElementById('feijao1').value)
  let macarrao = Number(document.getElementById('macarrao').value)
  let oleo = Number(document.getElementById('oleo').value)
  let equipe = window.document.getElementById('equipe').value
  let valKit
  leite = leite * 2
  sangue = sangue * 20
  kit2 = kit2 *30
  lata = lata*15
  arroz5 = arroz5*5
  arroz1 = arroz1*1
  feijao2 = feijao2*2
  feijao1 = feijao1*1
  macarrao = macarrao*.5
  oleo = oleo *1

  if(kit >= 91){
      valKit = 5000
  }else if(kit >=72 && kit < 91){
      valKit= 4000
  }else if(kit >= 45 && kit < 72){
      valKit = 2500
  }else if(kit >=20 && kit < 45){
      valKit = 1000
  }else{
      valKit = 0
  }


  if (equipe == 'amarelo'){
  window.document.getElementById("resp-amarelo").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo
}
  else if (equipe == 'laranja'){
  window.document.getElementById("resp-laranja").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo
}
  else if (equipe == 'roxo'){
  window.document.getElementById("resp-roxo").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo
}
  else if (equipe == 'verde'){
  window.document.getElementById("resp-verde").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo
}
  else if (equipe == 'vermelho'){
  window.document.getElementById("resp-vermelho").innerHTML = leite + sangue + acao + mascote + quiz + extra + valKit + kit2 + lata + arroz5 + arroz1 + feijao1 + feijao2 + macarrao + oleo
}

}
