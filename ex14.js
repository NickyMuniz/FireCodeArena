// Atividade 14 - Estatísticas da turma
// Peça ao usuário quantas notas deseja cadastrar.
// Armazene todas em um vetor.
// Ao final, mostre:
// Maior nota
// Menor nota
// Média da turma
// Quantidade de aprovados (nota ≥ 7)
// Quantidade de reprovados (nota < 7)




const readline = require("readline-sync")
let conta = []

let notas = readline.questionInt(`Quantas notas deseja casdastrar? `)
for(let i = 0; i < notas; i++){
    let nota = readline.questionFloat(`Escreva o ${i+1} número: `)
    conta.push(nota)
}




console.log("-------- Resultado --------")
conta.sort((a,b)=> b - a)
console.log(`A maior nota: ${conta[0]}`)

conta.sort((a,b)=> a - b)
console.log(`A menor nota: ${conta[0]}`)

let reprovados = 0
let aprovados = 0
let soma = 0
for(let i = 0; i < notas; i++){
    soma += conta[i]
}
let media = soma / conta.length
 console.log(`A média da turma é de: ${media}`)

for(let i = 0; i < notas; i++){
if(conta[i] >= media){
    aprovados++
}
else{
    reprovados++
}
}
console.log(`Quantidades de aprovados: ${aprovados}`)
console.log(`Quantidades de reprovados: ${reprovados}`)
