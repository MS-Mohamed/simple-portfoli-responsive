let body = document.getElementById("body");
let dark = document.getElementById("dark");
let white = document.getElementById("white");
let nav = document.getElementById("nav");
let header = document.getElementById("header");
let bars = document.getElementById("bars");
let listphone = document.getElementById("list-phone");
let close = document.getElementById("close")

dark.addEventListener("click" , function(){
    header.style.backgroundColor="#010409"
    body.style.backgroundColor="#010409"
    body.style.color="white"
    nav.style.backgroundColor="#010409"
    white.style.display="block"
    dark.style.display="none"
});

white.addEventListener("click" , function(){
    header.style.backgroundColor="white"
    body.style.backgroundColor="white"
    body.style.color="unset"
    nav.style.backgroundColor="whitesmoke"
    white.style.display="none"
    dark.style.display="block"
});

bars.addEventListener("click" , function(){
    header.style.display="none"
    listphone.style.display="block"
});

close.addEventListener("click" , function(){
    header.style.display="block"
    listphone.style.display="none"
})