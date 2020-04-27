submit = () => {
    var id_set = ['n1', 'n2', 'n3', 'n4', 'n5'];
var thing = {answers: []};
for (var elem in id_set){
    if ($('input:checkbox[id='+ id_set[elem] + ']').is(":checked") == true){
        thing.answers.push($('input:checkbox[id='+ id_set[elem] + ']').val())
    }
}

$.ajax(
    '',
    {
        url: 'https://swmaestro-api.goorm.io/submit',
        method: 'POST',
        data: JSON.stringify(thing),
        success: function(data) {
            // Update Element
            if (data == true){
                $('#result').html('정답입니다.');
            }else {
                $('#result').html('오답입니다.');
            }
        }
    },
);
};