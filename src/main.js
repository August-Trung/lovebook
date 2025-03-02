document.addEventListener("DOMContentLoaded", function () {
	const audio = document.getElementById("bgMusic");

	// Try playing audio automatically (may be blocked)
	audio.play().catch(() => {
		console.log("Autoplay blocked, waiting for user interaction...");

		// Wait for user interaction
		document.body.addEventListener(
			"click",
			function () {
				audio.play();
			},
			{ once: true }
		); // Ensures it only runs once
	});
});
