// Atividade 03 - Contagem de maiores de idade
// Crie um array com 5 idades.
// Utilize um for para percorrer o vetor.
// Utilize um if para verificar quais idades são maiores ou iguais a 18.
// Mostre:
// Quantas pessoas são maiores de idade
// Quantas são menores de idade


let idades = [2, 3, 14, 19, 76]
let mais18 = []
let menos18 = []
for(let i = 0; i < 5; i++){
    if(idades[i] >18){
        mais18.push(idades)
    }

    else{
        menos18.push(idades)
    }
}
console.log(`Pessoas maiores de idade: ${mais18.length} `)
console.log(`Pessoas menores de idade:${menos18.length} `)
