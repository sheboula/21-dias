//calculadora e aprendendo a usar switch
let num1 = parseInt(prompt("escolha um numero"))
let num2 = parseInt(prompt("escolha um numero"))
let opera = parseInt(prompt("escolha uma operação \n1 +; \n2 -; \n3 *; \n4 /;"))

switch(opera){
    case 1 :
        console.log(num1 + " + " + num2 + " = " + (num1 + num2))
        break
    case 2 :
        console.log(num1 + " - " + num2 + " = " + (num1 - num2))
        break
    case 3 :
        console.log(num1 + " * " + num2 + " = " + (num1 * num2))
        break
    default :
        console.log(num1 + " / " + num2 + " = " + ( num1 / num2))
        break
}
