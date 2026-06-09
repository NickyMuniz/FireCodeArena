// Atividade 06 - Média das notas
// Crie um array com 4 notas.
// Utilize um for para somar todas as notas.
// Calcule a média.
// Se a média for:
// Maior ou igual a 7 → Aprovado
// Menor que 7 → Reprovado
// Mostre a média e a situação.

let notas = [2, 3, 5.5, 9, 10]
let soma = 0
for(let i = 0; i < 5; i++){
    soma +=notas[i]

}    
let media = soma / notas.length

if(media>= 7){
    console.log("Aprovado")
}
 else{
    console.log("Reprovado")
}   

console.log(`A media é de: ${media}`)