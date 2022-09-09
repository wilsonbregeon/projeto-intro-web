//SEMANA 01

// const animal1 = "gato"
// const tempoMedioDeVida1 = 12
// const extinto1 = false
// const animal2 = "cachorro"
// const tempoMedioDeVida2 = 10
// const extinto2 = false
// const animal3 = "tigre-de-java"
// const tempoMedioDeVida3 = 11 
// const extinto3 = true
// const media = tempoMedioDeVida1 + tempoMedioDeVida2 + tempoMedioDeVida3 / 3 
//   console.log(`A média das operações é de: ${media}`)

// const verificaExtinto = extinto1 && extinto2 && extinto3
//   console.log(`O resultado booleano é: ${verificaExtinto}`)

// const ambiente = ["doméstico", "selvagem"]
//   console.log(`Animal: ${animal1.toUpperCase()}; \nExpectativa de vida: ${tempoMedioDeVida1} anos; \nExtinção: ${extinto1}; \nAmbiente: ${ambiente[0]}`)
//   console.log(`Animal: ${animal2.toUpperCase()}; \nExpectativa de vida: ${tempoMedioDeVida2} anos; \nExtinção: ${extinto2}; \nAmbiente: ${ambiente[0]}`)
//   console.log(`Animal: ${animal3.toUpperCase()}; \nExpectativa de vida: ${tempoMedioDeVida3} anos; \nExtinção: ${extinto3}; \nAmbiente: ${ambiente[1]}`)


//SEMANA 02
const lista1 = {
  Animal: "Gato",
  TempoMedioDeVida: 12,
  Extincao: false,
  Ambiente: "doméstico"
}

const lista2 = {
  Animal: "Cachorro",
  TempoMedioDeVida: 10,
  Extincao: false,
  Ambiente: "doméstico"
}

const lista3 = {
  Animal: "Tigre-de-Java",
  TempoMedioDeVida: 11,
  Extincao: true,
  Ambiente: "selvagem"
}

const lista = []

if(lista1.Extincao){
  lista.push(lista1)
}else{
  alert(`${lista1.Animal} não foi adicionado pois não está em extinção!`)
}

if(lista2.Extincao){
  lista.push(lista2)
}else{
  alert(`${lista2.Animal} não foi adicionado pois não está em extinção!`)
}

if(lista3.Extincao){
  lista.push(lista3)
}else{
  alert(`${lista3.Animal} não foi adicionado pois não está em extinção!`)
}

console.log(lista)






