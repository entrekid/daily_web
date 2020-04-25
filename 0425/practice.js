var id_set = ['n1', 'n2', 'n3', 'n4', 'n5']
var result = {answers: []}
for (var elem in id_set){
	if ($('input:checkbox[id='+ elem + ']').is(":checked") == true){
        result.answers.push($('input:checkbox[id='+ elem + ']').val())
        console.log(result);
	}
}
