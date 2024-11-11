alert( "BOAS-VINDAS AO JOGO DO NÚMERO SECRETO");
let numeroSecreto =28;
let chute = prompt( "ESCOLHA UM NÚERO DE 1 A 100");

if (chute == numeroSecreto) {
    alert ("PARABÉNS, Você descobriu o número secreto")
} else{
    alert(" Você errou! " )
}
if (chute > numeroSecreto) {
    alert ("Você está quase lá, tente um valor menor")
}
if (chute < numeroSecreto) {
    alert ("você está quase lá, tente um valor maior ")
}