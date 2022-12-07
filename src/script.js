function nav() {
	document.querySelector(".links").classList.toggle("shown");
	document.querySelector(".container").classList.toggle("full");
	/**change if only y use personalized animation */
	/*document.querySelector(".line1").classList.toggle("changed1");
	document.querySelector(".line2").classList.toggle("changed2");
	document.querySelector(".line3").classList.toggle("changed3");*/
	document.querySelector(".hamburger").classList.toggle("open");
}

/**back to top 
 * button
 * with jquery!
 */
$(document).ready(function () {
	$(window).scroll(function () {
		//mobile scroll and desktop
		if ($(this).scrollTop() > 767) {
			$('a.turn__top').fadeIn();
		} else {
			$('a.turn__top').fadeOut();
		}
	});
	$('.scrollup').click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 600);
		return false;
	});
});

// let width = window.innerWidth;
// let Height = window.innerHeight;
// console.log(Height);

// function TurnTop(e, style) {
// 	var item = document.querySelector('.turn__top');
// 	if (Height > 750) {
// 		item.style["display"] = "none";
// 	} else {
// 		item.style["display"] = "block";
// 	} 
// }

/**
 * video check
 */
var video = document.querySelector("#video");

function startPlayback() {
	if (!video) {
		video = document.createElement('video');
		video.src = './public/video/impennata2.MP4';
		video.loop = true;
		video.addEventListener('playing', paintVideo);
		console.log("not work");
	}
	else if (video == null || video == ErrorEvent) {
		/* second check */
		var bgvideo = document.getElementById("video");
		bgvideo.muted = true;
		bgvideo.loop = true;
		bgvideo.playsinline = true;
		bgvideo.play();
	}
	else {
		//nothing, it works.
		console.log("works.")
	}
	video.play();
}
