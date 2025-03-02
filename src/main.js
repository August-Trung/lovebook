document.addEventListener("DOMContentLoaded", function () {
	const audio = document.getElementById("bgMusic");

	function playAudio() {
		audio
			.play()
			.then(() => {
				console.log("Audio started playing");
			})
			.catch((err) => {
				console.log("Autoplay bị chặn, cần user tương tác!");
			});
	}

	// Tự động thử phát nhạc khi tải trang
	playAudio();

	// Dự phòng: Chờ user click nếu autoplay bị chặn
	document.body.addEventListener("click", playAudio, { once: true });
	document.body.addEventListener("touchstart", playAudio, { once: true });
});
