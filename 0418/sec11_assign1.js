var age = prompt("What is your age");
age = Number(age);
if (age === 21){
    console.log("Happy 21st birthday!!");
}

if (age % 2 === 1){
    console.log("your age is odd!");
}

sqr_age = Math.sqrt(age);
if (age % sqr_age === 0){
    console.log("Perfect root");
}