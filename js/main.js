var $items= $('.items img');

var switchItem = function (current, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function (){
	$items.eq(current).hide().attr('data-state', '');
	$items.eq(incoming).attr('data-state', 'current');
});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function (){
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next > $items.length - 1){
	next = 0;
}

	switchItem(current, next);
});

$('.prev').on('click', function (){
	var current = $items.filter('[data-state="current"]').index();
	var prev = current - 1;
	
	if (prev < 0){
	prev = $items.length - 1;
}

	switchItem(current, prev);
});

var $videoDialog = $('dialog');
dialogPolyfill.registerDialog($videoDialog.get(0));

$('.btn-open').on('click', function () {
	$videoDialog.children('.video').html('<iframe src="http://player.vimeo.com/video/81376935?color=ff9933" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');
	/*When triggering built-in Javascript functions we need to bypass jQuery
	In order to get to the raw Javascript element we can use .get()
	
	Example:
	$videoDialog.show() - will trigger jQuery's show function
	not the raw Javascript function 
	$videoDialog.get(0).show() - will get the first raw Javascript element and trigger its native show function
	*/
	
	$videoDialog.get(0).showModal();
	/*
	.show() allows users to interact with stuff behind the dialog 
	.showModal() disables user interaction behind the dialog
	*/
});

$('.btn-close').on('click', function () {
	$videoDialog.get(0).close();
	$videoDialog.children('.video').html('');
});

