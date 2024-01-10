//tentando fazer um pequeno desafio
let nome = ""
let idade = 0 
let peso = 0 
let altura = 0
//pegando as informações do usuario 
nome=prompt("digite seu nome")
idade=parseInt(prompt("digite sua idade"))
peso=parseInt(prompt("digite seu peso"))
altura=parseFloat(prompt("digite sua altura"))
//calculando o ano q a pessoa nasceu/formula do IMC
let anoNascido = 0
anoNascido = 2024 - idade 
let imc = 0
IMC = peso / (altura * altura)


//colocando as informações em um pequeno texto
console.log("olá " + nome + ",você tem " + idade + " anos,nasceu em " + anoNascido + ",tem " + altura + " de altura,pesa " + peso + "kg seu IMC é " + IMC + "kg/m2")
//foi chatinho fazer isso slk