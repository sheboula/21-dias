//fazendo uma tabuada q faz a do numero q c pediu e dos outros 2 numeros da frente
let escolher = parseInt(prompt("escolha um numero positivo e inteiro"))
 for(let i = escolher; i <= escolher + 2; i++){
    console.log("tabuada do numero " + i)
   for(let a = 0; a <= 10; a++)
    console.log(i + "x" + a + "=" + (i*a))
   }