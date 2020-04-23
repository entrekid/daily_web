var button = document.querySelector('button');
var p = document.querySelector('p');
button.addEventListener("click", function(){
    p.textContent = "Someone clicked the button!";
})