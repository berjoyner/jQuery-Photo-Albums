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


$(".moon1").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});

}

$(".moon2").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

$(".moon3").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

$(".moon4").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

//

$(".ny1").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});

}

$(".ny2").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

$(".ny3").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

$(".ny4").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

//

$(".brides1").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});

}

$(".brides2").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

$(".brides3").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}

$(".brides4").hover(makeBigger, returnToOriginalSize);

function makeBigger() {
    $(this).css({height: '+=100%', width: '+=100%'});
}
function returnToOriginalSize() {
    $(this).css({height: "350", width: "450"});
}
// $(".album1Content").click(function() {

//    $(this).toggleClass("clicked");
// });


// $(".moon1").click(function() {
//     $(this).stop().animate({ width: '200%' }, 400);
// }, function() {
//     $(this).stop().animate({ width: '100%' }, 200);
// });

// $( ".album1Content" ).click(function() {
//   $( ".album1Content" ).animate({
//     opacity: 0.25,
//     left: "+=50",
//     height: "toggle"
//   }, 5000, function() {
//     // Animation complete.
//   });
// });


// $(".album1Content").click(function() {
//        $(this).animate({
//            height: '+=10px'
//        });
// });

// $(function ()
// {
//     $(".album1Content").on("click", function ()
//     {
//         $(this).animate(2000);
//     );
// });


// $(document).click(function() {
//     $('album1Content').hide();
// });

//   $('.album1Content').click(function(event) {
//   		event.preventDefault();
//         $(".album1Content").addClass('transition');
//         $(".album1Content").removeClass('transition');
// };

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