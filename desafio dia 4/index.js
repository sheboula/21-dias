//crinaod um sistema de jantar
let fome = prompt("você está com fome? (sim/não)")
let dinheiro = prompt("você tem dinheiro? (sim/não")
let restaurante = prompt("o restaurante está aberto? (sim/não)")

if(dinheiro == "não" || fome == "não"){
    console.log("hoje a janta será em casa")
}else if(dinheiro == "sim" && restaurante == "não"){ 
    console.log("peça um delivery!")
}else if(fome == "sim" && dinheiro == "sim" && restaurante == "sim"){
    console.log("hoje o jantar será no seu restaurante preferido!")
}
//deu certo mas foi meio chatinho de fazer isso aq,fiquei preso ali na parte do restaurante
//mas dps pensei com calma e consegui