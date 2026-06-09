// Atividade 01 - Números pares e ímpares
// Peça ao usuário quantos números ele deseja cadastrar.
// Crie dois arrays:
// Pares
// Impares
// Solicite os números ao usuário.
// Utilize um if/else para verificar cada número e armazená-lo no vetor correto.
// Ao final, exiba:
// Lista de números pares
// Lista de números ímpares


const readline = require("readline-sync")

let quant = readline.questionFloat("Quantos números deseja cadastrar? ")
let par = []
let impar = []


for(let i = 0; i < quant; i++){
    let number = readline.questionFloat(`Escreva o ${i+1}º número: `)
   
   
   
    if(number % 2 == 0 ){
    par.push(number)
    
}
else{
    impar.push(number)

}
}
console.log(`Numeros pares: ${par}`)
console.log(`Numeros impares: ${impar}`)

