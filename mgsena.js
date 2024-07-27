function GerarJogo() {
  let numeroDeJogos=document.getElementById("qnumj").value 
  let numerosPorJogo=document.getElementById("njogo").value 

  let tabela=document.getElementById("Jogo")

  while (tabela.rows.length>=1){
      tabela.deleteRow(0)
  }

  for (let jogos=1;jogos<=numeroDeJogos;jogos++){
      let qtdeLinhas=tabela.rows.length
      let linha = tabela.insertRow(qtdeLinhas)
      linha.insertCell(0).innerHTML=`Jogo${jogos}:`
      let numerosSorteados=[]
      for (let numeros=1;numeros<=numerosPorJogo;numeros++){
          let numero=gn(1,60)
          while(numerosSorteados.indexOf(numero) >= 0){
              numero=gn(1,60)
          }
          numerosSorteados.push(numero)
          
      }

      numerosSorteados.sort(function(a,b){return a- b})

      let coluna=1
      numerosSorteados.forEach(function(numero)
      {
          linha.insertCell(coluna).innerHTML=numero
          coluna++
      })
  }
  }
  function gn(min,max){
  const numero=Math.floor(Math.random()*(max-min)+min)
  return numero
}
    
    
  
  
  
  
  
  
  
  
  
  
  