// Atividade 08 - Quantidade de números positivos
// Crie um array com 10 números.
// Utilize um for.
// Conte quantos números são positivos.
// Mostre o resultado final.

let numeros = [11, 23, -43, 41, 76, 46, -45, 76, 96, 34]
let positivo = 0
for(let i = 0; i <10; i++ ){
if(numeros[i] >= 0){
     positivo++
    }
}
console.log(`Total de números positivos: ${positivo}`)