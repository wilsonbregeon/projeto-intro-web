// SEMANA 01

// const selecao1 = "Brasil"
// const copaDoMundo1 = 5
// const jogouTodasCopas1 = true
// const copaGanha1 = [1958, 1962, 1970, 1994, 2002]

// const selecao2 = "Argentina"
// const copaDoMundo2 = 2
// const jogouTodasCopas2 = false
// const copaGanha2 = [1978, 1986]

// const selecao3 = "Itália"
// const copaDoMundo3 = 4
// const jogouTodasCopas3 = false
// const copaGanha3 = [1934, 1938, 1982, 2006]

// const mediaValores = copaDoMundo1 + copaDoMundo2 + copaDoMundo3 / 3
// console.log(`O resultado da média é: ${mediaValores}`)

// const verificaBooleano = jogouTodasCopas1 && jogouTodasCopas2 && jogouTodasCopas3
// console.log(`O resultado booleano é: ${verificaBooleano}`)

// console.log(`Seleção: ${selecao1.toUpperCase()}; \nGanhou a Copa ${copaDoMundo1} vezes; \nJogou todas as Copas: ${jogouTodasCopas1}; \nAno em que foi campeão: ${copaGanha1}.` )
// console.log(`Seleção: ${selecao2.toUpperCase()}; \nGanhou a Copa ${copaDoMundo2} vezes; \nJogou todas as Copas: ${jogouTodasCopas2}; \nAno em que foi campeão: ${copaGanha2}.`)
// console.log(`Seleção: ${selecao3.toUpperCase()}; \nGanhou a Copa ${copaDoMundo3} vezes; \nJogou todas as Copas: ${jogouTodasCopas3}; \nAno em que foi campeão: ${copaGanha3}.`)

//============================================================================================================================================

//SEMANA 02

// const selecaoBrasileira = {
//   selecao : "Brasil",
//   copaDoMundo : 5,
//   jogouTodasCopas : true,
//   copaGanha : [1958, 1962, 1970, 1994, 2002]
// }

// const selecaoArgentina = {
//   selecao : "Argentina",
//   copaDoMundo : 2,
//   jogouTodasCopas : false,
//   copaGanha : [1978, 1986]
// }

// const selecaoItaliana = {
//   selecao : "Itália",
//   copaDoMundo : 4,
//   jogouTodasCopas : false,
//   copaGanha : [1934, 1938, 1982, 2006]
// }

// const arraySelecoes = []
// const selecoes = arraySelecoes.push(selecaoBrasileira, selecaoArgentina, selecaoItaliana)
// console.log(arraySelecoes)

// if(selecaoBrasileira.jogouTodasCopas === true){
//   arraySelecoes.push(selecaoBrasileira)
//   console.log(arraySelecoes)
// }else{
  //alert("Seleção brasileira não adicionada, pois não jogou todas as Copas!")
//}

// if(selecaoArgentina.jogouTodasCopas === true){
//   arraySelecoes.push(selecaoArgentina)
//   console.log(arraySelecoes)
// }else{
  //alert("Seleção argentina não adicionada, pois não jogou todas as Copas!")
//}

// if(selecaoItaliana.jogouTodasCopas === true){
//   arraySelecoes.push(selecaoItaliana)
//   console.log(arraySelecoes)
// }else{
  //alert("Seleção italiana não adicionada, pois não jogou todas as Copas!")
//}

//============================================================================================================================================

//SEMANA 03

//   const arraySelecoes = [ 
//     {
//     selecao : "Brasil",
//     copaDoMundo : 5,
//     jogouTodasCopas : true,
//     copaGanha : [1958, 1962, 1970, 1994, 2002]
//   },
  
//   {
//     selecao : "Argentina",
//     copaDoMundo : 2,
//     jogouTodasCopas : false,
//     copaGanha : [1978, 1986]
//   },
  
//   {
//     selecao : "Itália",
//     copaDoMundo : 4,
//     jogouTodasCopas : false,
//     copaGanha : [1934, 1938, 1982, 2006]
//   }
// ]

// console.log(`Seleção: ${arraySelecoes[0].selecao}; \nCopas conquistadas: ${arraySelecoes[0].copaDoMundo}; \nJogou todas as Copas: ${arraySelecoes[0].jogouTodasCopas}; \nAnos em que foi campeão: ${arraySelecoes[0].copaGanha}.`)

// console.log(`Seleção: ${arraySelecoes[1].selecao}; \nCopas conquistadas: ${arraySelecoes[1].copaDoMundo}; \nJogou todas as Copas: ${arraySelecoes[1].jogouTodasCopas}; \nAnos em que foi campeão: ${arraySelecoes[1].copaGanha}.`)

// console.log(`Seleção: ${arraySelecoes[2].selecao}; \nCopas conquistadas: ${arraySelecoes[2].copaDoMundo}; \nJogou todas as Copas: ${arraySelecoes[2].jogouTodasCopas}; \nAnos em que foi campeão: ${arraySelecoes[2].copaGanha}.`)

// for(selecoes of arraySelecoes){
//   for(selecoes2 in selecoes){
//     console.log(`${selecoes2} : ${selecoes[selecoes2]}`)
//   }
// }

// const selecoes = arraySelecoes.map((pais)=>{
//   return (`Seleção: ${pais.selecao}`)  
// })

// console.log(selecoes)



// function recebeArrayDeSelecoes() {
//   const selecaoEscolhida = prompt("Escolha uma das seleções possíveis. Brasil, Argentina ou Itália!")
//   if(selecaoEscolhida === "Brasil"){
//     return `A seleção escolhida foi: ${arraySelecoes[0].selecao}; \nA seleção possui: ${arraySelecoes[0].copaDoMundo} Copas; \nJogou todas as Copas? ${arraySelecoes[0].jogouTodasCopas}; \nAno em que venceu a Copa: ${arraySelecoes[0].copaGanha}.` 
//   }else if(selecaoEscolhida === "Argentina") {
//     return `A seleção escolhida foi: ${arraySelecoes[1].selecao}; \nA seleção possui: ${arraySelecoes[1].copaDoMundo} Copas; \nJogou todas as Copas? ${arraySelecoes[1].jogouTodasCopas}; \nAno em que venceu a Copa: ${arraySelecoes[1].copaGanha}.` 
//   }else if(selecaoEscolhida === "Itália"){
//     return `A seleção escolhida foi: ${arraySelecoes[2].selecao}; \nA seleção possui: ${arraySelecoes[2].copaDoMundo} Copas; \nJogou todas as Copas? ${arraySelecoes[2].jogouTodasCopas}; \nAno em que venceu a Copa: ${arraySelecoes[2].copaGanha}.` 
//   }else{
//     alert("Seleção não encontrada!")
//   }
  
// }

// console.log(recebeArrayDeSelecoes())

//===========================================================================================================================================




