// Atividade 13 - Separando múltiplos de 3
// Peça ao usuário quantos números deseja cadastrar.
// Crie dois vetores:
// multiplosDe3
// outrosNumeros
// Utilize um for.
// Se o número for divisível por 3, adicione no vetor "multiplosDe3"
// .

// Caso contrário, adicione no vetor "outrosNumeros"
// Mostre os dois vetores ao final.

const readline = require("readline-sync")
let conta = []
let multiplosDe3 = []
let outrosNumeros = []
let numeros = readline.questionInt("Quantos números deseja cadastrar? ")
for(let i = 0; i < numeros; i++ ){
    let pergunta = readline.questionInt(`Escreva o ${i+1}º número: `) 
    conta.push(pergunta)
}
for(let n = 0; n < numeros; n++){
    if(conta[n] % 3 === 0 ){
    multiplosDe3.push(conta[n])
    }
    else{
        outrosNumeros.push(conta[n])
    }
}
console.log(`Números multiplos de 3: ${multiplosDe3}`)
console.log(`Números que não são multiplos de 3: ${outrosNumeros}`)