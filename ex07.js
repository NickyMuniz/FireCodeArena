// Atividade 07 - Quantidade de números pares
// Crie um array com 10 números.
// Utilize um for.
// Conte quantos números pares existem no vetor.
// Mostre o total encontrado.

let numeros = [11, 23, 43, 41, 76, 46, 45, 76, 96, 34]
let pares = 0
for(let i = 0; i <10; i++ ){
    if(numeros[i] % 2 == 0){
        pares++
    }
}
console.log(`Quantidade de números pares:${pares}`)