var prettyPrint = function(object){
    console.log(object.name);
    console.log(object.species);
    console.log(object.breed);
}

var charCount = function (str){
    str = str.toLowerCase(str);
    object = new Object();
    for (var iter = 0; iter < str.length; iter++){
        if (typeof object[str[iter]] == 'number'){
            object[str[iter]]++
        }else{
            object[str[iter]] = 1
        }
    }return object;
}

var mostFreqChar = function(string){
    object = new Object();
    for (var iter = 0; iter < string.length; iter++){
        if (typeof object[string[iter]] == 'number'){
        object[string[iter]] += 1;}
        else{
            object[string[iter]] = 1;
        }
    }
    var ans = object[string[0]];
    var char = string[0]
    for (var iter = 0; iter < string.length; iter++){
       temp = object[string[iter]];
       if (temp > ans){
           ans = temp
           char = string[iter]
       }
    }
    return char;
}