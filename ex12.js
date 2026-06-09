// Atividade 12 - Números acima da média
// Crie um array com 5 números.
// Calcule a média dos valores.
// Depois percorra novamente o vetor.
// Mostre apenas os números que estão acima da média.


let numeros = [11, 22, 55, 11, 77]
let soma = 0  
for(let i = 0; i < numeros.length; i++){
soma += numeros[i]
}
let media = soma / numeros.length
let AcimaDaMedia = []
for(let i = 0; i < numeros.length; i++){
    if(numeros[i]>media){
        AcimaDaMedia.push(numeros[i])
    }
}
console.log(`Números acima da média: ${AcimaDaMedia}`)
console.log(media)