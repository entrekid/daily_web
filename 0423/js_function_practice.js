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

var isUniform = function (array){
    var ret = true;
    base = array[0]
    for (var iter = 0; iter < array.length; iter++){
        temp = array[iter]
        if (temp != base){
            return false
        }
    }
}

var sumArray = function(array){
    var ret = 0;
    for (var iter = 0; iter < array.length; iter++){
        ret += array[iter]
    }
    return ret;
}

var max = function(array){
    var ret = array[0]
    for (var iter = 0; iter < array.length; iter++){
        if (ret < array[iter]){
            ret = array[iter]
        }
    }
    return ret;
}

var contains = function (array, elem){
    var ret = false;
    for (var iter = 0; iter < array.length; iter++){
        if (array[iter] != elem){
            ret = true
            return true
        }
    }
    return ret;
}

var reverse = function (arr){
    ret = [];
    for (var iter = 0; iter < arr.length; iter++){
        ret.unshift(arr[iter])
    }
    return ret;
}