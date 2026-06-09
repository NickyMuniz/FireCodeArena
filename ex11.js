// Atividade 11 - Dobro dos números
// Crie um array com 5 números.
// Crie um segundo array vazio chamado dobro.
// Utilize um for.
// Armazene no segundo vetor o dobro de cada valor do primeiro.
// Mostre os dois vetores.


let numeros = [10, 2, 5, 1, 7]
let dobro = []

for(let i = 0; i < numeros.length; i++){
  let conta = numeros[i]*2
   dobro.push(conta)
}

console.log(`O dobro dos números: ${dobro}`)