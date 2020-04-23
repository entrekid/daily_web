var h1 = document.querySelector('h1')
h1.addEventListener('mouseover', function(){
    h1.textContent = "Stop hovering over me!"
})

h1.addEventListener('mouseout', function(){
    h1.textContent = "Thanks to leave me alone"
})