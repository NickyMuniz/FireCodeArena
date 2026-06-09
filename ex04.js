// Atividade 04 - Encontrando o maior número
// Crie um array com 5 números.
// Utilize um for para percorrê-lo.
// Descubra qual é o maior valor armazenado.
// Mostre o resultado no console.

let idades = [9, 32, 40, 1, 16]

for(let i = 0; i < 5; i++){
    idades.sort((a,b) => b - a)

}
console.log(idades[0])