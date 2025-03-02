const BackgroundMusic = () => {
	return (
		<audio id="bgMusic" autoPlay loop>
			<source src="/audios/song.mp3" type="audio/mp3" />
		</audio>
	);
};

export default BackgroundMusic;
