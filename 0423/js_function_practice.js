function isEven(num){
    if (num % 2 == 0){
        return true;
    }
    else{
        return false;
    }
}

function factorial(num){
    var ret = 1;
    while (num >= 1){
        ret = ret * num;
        num--;
    }
    return ret;
}

function kebabToSnake(str){
    str = str.replace('-', '_')
    return str
}

var printReverse = function(str){
    for (var i = 0; i < str.length; i ++){
        console.log(str[str.length - i - 1]);
    }
}