// Atividade 05 - Encontrando o menor número
// Crie um array com 5 números.
// Utilize um for para percorrer o vetor.
// Descubra qual é o menor valor armazenado.
// Mostre o resultado no console.

let idades = [40, 18, 3, 81, 16]
for(let i = 0; i < 5; i++){
    idades.sort((a,b) => a - b)

}
console.log(idades[0])