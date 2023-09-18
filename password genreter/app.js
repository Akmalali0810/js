const inputLenght = document.querySelector(".slider");
const displayLenght = document.querySelector("[Lenght]");
const indigetor = document.querySelector(".colurs");
const symbol = '~!@#$%^&*()_"+-=}{[];:/.,<>?';

let password =10;

hendelSlider();

function hendelSlider(){
    inputLenght.value=password;
    displayLenght.innerText=password;
}

function Setindigetor(color){
    indigetor.style.backgroundColor = color;
}

function getRenInteger(min, max){
    return Math.floor(math.random()*(max-min)) + min;
}

function generaterandomNumber(){
    return getRenInteger(0,9);
}

function generaterandomLowerCase(){
    return String.fromCharCode(getRenInteger(97,123));
}

function generaterandomUpperCase(){
    return String.fromCharCode(getRenInteger(97,123));
}

function generaterandomsymbol(){
    const num=getRenInteger(0, symbol.length);
    return symbol.charAt(num);

}

