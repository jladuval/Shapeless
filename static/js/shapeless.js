$(function(){
	var baseUrl = "home.html";
	var baseImageUrl = "static/images/shapeless";
	var maxComicNo = 37;

	var current = parseInt($.url().param("no"));
	if(current == null || isNaN(current)){
		current = 1;
	}
	
	if(current > 1){
		$('.previous').attr('href', 'home.html?no=' + (current - 1))
	}
	if(current < maxComicNo){
		$('.next').attr('href', 'home.html?no=' + (current + 1))
	}
	
	$('#comicno').html('#' + current);
	
	if(current < 10){
		$('#main-comic').attr('src', baseImageUrl + '0' + current + '.jpg');
	}
	else{
		$('#main-comic').attr('src', baseImageUrl + current + '.jpg');
	}
});