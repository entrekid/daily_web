var num = 1;
while (num <= 50){
    if (num % 2 == 0){
        console.log(num);
    }
    num++;
}

var str = "$"
var cnt = 1;
while (cnt <= 5){
    console.log(str);
    str += '$';
    cnt++;
}

var num = 1;
while (num <= 100){
    if (num % 3 == 0 && num % 5 != 0){
        console.log("Fizz")
    }
    else if (num % 5 == 0 && num % 3 != 0){
        console.log("Buzz");
    }
    else if (num % 15 == 0){
        console.log('FizzBuzz')
    }
    else {
        console.log(num);
    }
    num++;
}