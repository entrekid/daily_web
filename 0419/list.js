var list = new Array();
while (true){
    var order = prompt("What would you like to do?")
    if (order === "new"){
        var todo = prompt("Enter a new todo");
        list.push(todo);
    }
    else if (order === "list"){
        console.log(list);
    }
    else if (order === "quit"){
        break;
    }
}