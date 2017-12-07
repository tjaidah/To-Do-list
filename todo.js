$('#add-btn').click(function(){

	add_item();
})

function add_item() {
	event.preventDefault();
	var input = $('#new-text').val();
	var btn = '<button id="remove-btn">X</button>';
	$("#container").append('<div>'+input+btn+'</div>');
	$('#new-text').val('');
}

$('#remove-btn').click(function () {
	$(this).remove();
});