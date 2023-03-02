/*

const idadeDependenteUser = Number(prompt(`Qual a idade da pessoa depedente?`))

*/
//Utilizando If Aninhado

/*

if(idadeDependenteUser >= 13) {
    if(idadeDependenteUser < 18){
        console.log(`Cartão de crédito APROVADO!`)
    }else{
        console.log(`Maior de idade, consulte outras opções do Labank!`)
    }
}else {
    console.log(`Consulte outras opções do Labank!`)
}

*/

/*

//Utilizando operador lógico
if(idadeDependenteUser >= 13 && idadeDependenteUser <18){
    console.log(`Cartão de crédito APROVADO!`)
}else {
    console.log(`Consulte outras opções do Labank!`)
}

*/

//verificar se a idade é igual a 13 usando ''if ternário'' 
//SINTAXE DO IF TERNÁRIO
// condição ? expressão1 : expressão2
/*

idadeDependenteUser === 13 ? console.log(`A idade 13, já pode ter 
cartão`) : console.log(`Verifique as outras opções do Labank!`)
*/




/*
let tipoCartão = Number(prompt(`Qual a opão de cartão você quer? digide 1, 2, e ou 3`))

switch(tipoCartão){
    case 1:
        console.log(`Você escolheu o cartão FÁCIL!`)
        break
    case 2:
        console.log(`Você escolheu o cartão BLACK!`)
        break
    case 3:
        console.log(`Você escolheu o cartão PLATINUM!`)
        break
    case 4:
        console.log(`Você escolheu o cartão MASTER GOLD!`)
        break
    default:
        console.log(`Você selecionou uma opção errada`)
}
*/





//PARA GUARDAR NA CABEÇA 1
const numeroUser = Number(prompt(`Digíte um número`))
/*
if(numeroUser%2 === 0){
    if(numeroUser%3 === 0){
       console.log(`O número ${numeroUser} É divisível por 2 e por 3`)
        }else {
            console.log(`O número escolhido NÃO é divisível por 2 e por 3`)  
        }
    }else {
        console.log(`O número escolhido NÃO é divisível por 2 e por 3`)
    }

if(numeroUser%2 === 0 && numeroUser%3 === 0){
    console.log(`O número ${numeroUser} É divisível por 2 e por 3`)
}else{
    console.log(`O número escolhido NÃO é divisível por 2 e por 3`) 
}
*/




//PARA GUARDAR NA CABEÇA 2
/*
if(numeroUser%2 === 0 && numeroUser%3 === 0){
    console.log(`O número ${numeroUser} É divisível por 2 e por 3`)

    numeroUser === 30 ? console.log(`Ufa, acertei`) : console.log(`Não foi dessa vez :(`)

}else{
    console.log(`O número escolhido NÃO é divisível por 2 e por 3`)
}
*/



/*
numeroUser === 30 ? console.log(`Ufa, acertei`) : console.log(`Não foi dessa vez :(`)
*/




//PARA GUARDAR NA CABEÇA 3

if(numeroUser%2 === 0 && numeroUser%3 === 0){
    console.log(`O número ${numeroUser} É divisível por 2 e por 3`)
}else{
    console.log(`O número escolhido NÃO é divisível por 2 e por 3`)
}

switch(numeroUser){
    case 6:
        console.log(`O número ${numeroUser} está correto`)
        break
    case 12:
        console.log(`O número ${numeroUser} está correto`)
        break
    case 18:
        console.log(`O número ${numeroUser} está correto`)
        break
    case 24:
        console.log(`O número ${numeroUser} está correto`)
        break
    case 30:
        console.log(`O número ${numeroUser} está correto`)
        break
    default:
        console.log(`O número é maior que 30 ou menor que 6`)

}