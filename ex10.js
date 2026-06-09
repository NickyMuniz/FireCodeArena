// Atividade 10 - Separando notas aprovadas e reprovadas
// Crie um array com 8 notas.
// Crie dois vetores:
// aprovados
// reprovados
// Utilize um for.
// Se a nota for maior ou igual a 7:
// Adicione em aprovados
// Caso contrário:
// Adicione em reprovados
// Mostre os dois vetores.


let notas = [10, 2, 4.5, 1, 7, 6, 9, 8]
let aprovados = []
let reprovados = []

for(let i = 0; i < notas.length; i++){
    if(notas[i] >= 7){
        aprovados.push(notas[i])
    }
    else{
        reprovados.push(notas[i])
    }

}
console.log(`Aprovados: ${aprovados}`)
console.log(`Reprovados: ${reprovados}`)