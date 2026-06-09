// Atividade 09 - Procurando um nome
// Crie um array com 5 nomes.
// Peça um nome ao usuário.
// Utilize um for para verificar se o nome existe no vetor.
// Caso encontre:
// Nome encontrado!
// Caso contrário:
// Nome não encontrado!
const readline = require("readline-sync")

let nomes = ["Nic","Gabi","Carlos","Pussidonio","Rick"]
let n = readline.question("Escreva um nome: ")

for(let i = 0; i <5; i++){
   if(n === nomes[i]){
    console.log("Nome encontrado!")
    break
   } 
   else{
    console.log("Nome não encontrado!")
    break
   }
}
