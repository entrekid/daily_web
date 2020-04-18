var isEven = function(num){
    if (num % 2 === 0){
        return true;
    }
    else{
        return false;
    }
}

console.log(isEven(5));

// 2번
var factorial = function (num){
    var ans = 1;
    if (num == 0){
        return 1;
    }
    while (num){
        ans = ans * num;
        num--;
    }
    return ans;
}
console.log(factorial(5));
console.log(factorial(2));
console.log(factorial(10));
console.log(factorial(0));

// 3번
var kebabToSnake = function (str){
    str = str.replace('-', '_');
    return str;
}
console.log(kebabToSnake('hello-world'));