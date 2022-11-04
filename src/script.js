function nav() {
	document.querySelector(".links").classList.toggle("shown");
	document.querySelector(".container").classList.toggle("full");
	/*document.querySelector(".line1").classList.toggle("changed1");
	document.querySelector(".line2").classList.toggle("changed2");
	document.querySelector(".line3").classList.toggle("changed3");*/
    document.querySelector(".hamburger").classList.toggle("open");
}


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
