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


$(".album1Content img").click(function(event) {
      event.preventDefault();
      var $singlePic = $(this);

      // console.log($(this));

$singlePic.closest("li").siblings().toggle();
$singlePic.toggleClass("makeBigger");

});

$(".album2Content img").click(function(event) {
      event.preventDefault();
      var $singlePic = $(this);

      // console.log($(this));

$singlePic.closest("li").siblings().toggle();
$singlePic.toggleClass("makeBigger");

});


$(".album3Content img").click(function(event) {
      event.preventDefault();
      var $singlePic = $(this);

      // console.log($(this));

$singlePic.closest("li").siblings().toggle();
$singlePic.toggleClass("makeBigger");

});

})

