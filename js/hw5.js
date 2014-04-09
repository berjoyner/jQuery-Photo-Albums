$(document).ready(function() {

	var $album1Content = $(".album1Content"); 
	var $album2Content = $(".album2Content");
	var $album3Content = $(".album3Content");


$(".album1Link").click(function(event) {
	event.preventDefault();
	$(".album1Content").toggleClass("show");
});



$(".album2Link").click(function(event) {
	event.preventDefault();
	$(".album2Content").toggleClass("show");

});

$(".album3Link").click(function(event) {
	event.preventDefault();
	$(".album3Content").toggleClass("show");

});

// $(".album1").click(function(event) {
// 	event.presentDefault ();
// 	if ($album1.hasClass("hide")) {
// 		return;
// 	} else {
// 		$album1.siblings().removeClass("show");
// 		$album1.addClass("hide");
// 	}

// });


//  $('div').mouseenter(function() {
//        $(this).animate({
//            height: '+=10px'
//        });

//        $(document).ready(function() {
//     $("div").fadeOut(1000);
// });

});