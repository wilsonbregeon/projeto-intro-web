SEMANA 03

1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2, altere a forma que a característica de array dos itens seja escrita como um laço que guarde todos os valores da propriedade array do objeto em uma mesma string. Utilize esta string no relatório.
💡 Chamamos este processo de reescrever um código já escrito, de refatoração.
Exemplo:
//ANTES 
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] 

//DEPOIS
FULANO
idade: 33
verificou email?: false
projetos: "Projeto de HTML,Projeto de CSS,Projeto React" 
2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço. Ou seja, você não deve mais imprimir individualmente cada item do relatório. Cada item deve ser exibido a partir de uma iteração do laço. Para testar, adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
//ANTES 
console.log(elementos[0].item);

//DEPOIS
FULANO
for(elemento in elementos){
  console.log(elemento.item);
}
3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório com os dados do objeto.
4. Crie uma função que recebe um array de objetos e uma string. Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado.