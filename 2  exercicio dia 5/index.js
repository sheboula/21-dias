let quantidade
let valor
let opção = prompt("Bem vindo ao posto,você deseja:" + 
"\n1 = abastecer com gasolina; \n2 = abastecer com álcool; \n3 = calibrar pneus")

switch(opção){
    case "1" :
        valor = parseInt(prompt("digite o valor que deseja abastecer"))
        quantidade = valor / 5
        console.log("foram abastecidos " + quantidade + "L de gasolina")
    break
    case "2" :
        valor = parseInt(prompt("digite o valor que deseja abastecer"))
        quantidade = valor / 3
        console.log("foram abastecidos " + quantidade + "L de álcool")
    break
    default :
         console.log("pneus calibrados com sucesso")
    }

