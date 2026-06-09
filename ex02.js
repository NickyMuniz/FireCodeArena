// Atividade 02 - Positivos e Negativos
// Peça ao usuário quantos números deseja cadastrar.
// Crie dois arrays:
// positivos
// negativos
// Utilize um for para solicitar os valores.
// Armazene cada número no vetor correspondente.
// Ao final, mostre os dois vetores.

const readline = require("readline-sync")

let positivos = []
let negativos = []

let quantidade = readline.questionFloat("Quantos números deseja cadastrar? ")
for(let i = 0; i < quantidade; i++){
    let numeros = readline.questionFloat(`Escreva o ${i+1}º número: `)
   
   
   
    if(number > 0){
    positivos.push(numeros)
    
}
else{
    negativos.push(numeros)

}
}
console.log(`Numeros positivos: ${positivos}`)
console.log(`Numeros negativos: ${negativos}`)