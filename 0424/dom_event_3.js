var h1 = document.querySelector('h1');
h1.addEventListener('mouseover', function(){
    this.textContent = "hello, it works!"
});

h1.addEventListener('mouseout', function(){
    this.textContent= 'Wow, it also works!';
})