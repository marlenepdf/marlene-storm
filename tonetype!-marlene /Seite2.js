

	function getRandomSentence() {
		const sentences = [
			{ text: "Do you believe in love after love?", image: "Bilder/Cher.png" },
            { text: "zigazig ah!", image: "Bilder/Spice.png" },
            { text: "Aaay-Oh!", image: "Bilder/Freddie.png" },
            { text: "I am feeling supersonic, give me Gin and Tonic", image: "Bilder/Oasis.png" },
            { text: "B-B-B- Bennie and the Jets!", image: "Bilder/Elton.png" },
            { text: "She wore a Raspberry Beret!", image: "Bilder/Prince.png" },
            { text: "Na, na, na, <br> na-na-na, na!", image: "Bilder/Beatles.png" },
            { text: "Hip, hip", image: "Bilder/Weezer.png" },
            { text: "Oh, baby, baby...", image: "Bilder/Britney.png" },
            { text: "you put the boom-boom into my heart!", image: "Bilder/wham.png" },
            { text: "like baby, baby, baby, oh!", image: "Bilder/Bieber.png" },
            { text: "I said +no, no, no+", image: "Bilder/Amy.png" },
            { text: "Let+s dance!", image: "Bilder/Bowie.png" },
            { text: "Gaga, oh la-la!", image: "Bilder/Gaga.png" },
            { text: "He was a boy, she was a girl.", image: "Bilder/Avril.png" },
            { text: "The beat goes on and on and on and on and", image: "Bilder/Charli.png" },
            
		];

		const randomIndex = Math.floor(Math.random() * sentences.length);
		return sentences[randomIndex];
	}

function fnct() {
		const randomSentenceDiv = document.getElementById("Satz");
		const hierUnserText = document.getElementById("hierUnserText");
		const hierUnserBild = document.getElementById("hierUnserBild");
		const sentenceData = getRandomSentence();

		hierUnserBild.innerHTML = (sentenceData.image ? '<br><img src="' + sentenceData.image + '" class="Bild">' : '');
		hierUnserText.innerHTML = sentenceData.text.replace(/#/g, '<span class="hash">#</span>');


		let playButton = document.getElementById('playButton');
		let audioContainer = document.getElementById('audioContainer');
		let audioFiles = {
			'a': 'ABC/A.mp3',
			'b': 'ABC/B.mp3',
			'c': 'ABC/C.mp3',
			'd': 'ABC/D.mp3',
			'e': 'ABC/E.mp3',
			'f': 'ABC/F.mp3',
			'g': 'ABC/G.mp3',
			'h': 'ABC/H.mp3',
			'i': 'ABC/I.mp3',
			'j': 'ABC/J.mp3',
			'k': 'ABC/K.mp3',
			'l': 'ABC/L.mp3',
			'm': 'ABC/M.mp3',
			'n': 'ABC/N.mp3',
			'o': 'ABC/O.mp3',
			'p': 'ABC/P.mp3',
			'q': 'ABC/Q.mp3',
			'r': 'ABC/R.mp3',
			's': 'ABC/S.mp3',
			't': 'ABC/T.mp3',
			'u': 'ABC/U.mp3',
			'v': 'ABC/V.mp3',
			'w': 'ABC/W.mp3',
			'x': 'ABC/X.mp3',
			'y': 'ABC/Y.mp3',
			'z': 'ABC/Z.mp3',
			'-': 'ABC/-.mp3',
			'0': 'ABC/0.mp3',
			'1': 'ABC/1.mp3',
			'2': 'ABC/2.mp3',
			'3': 'ABC/3.mp3',
			'4': 'ABC/4.mp3',
			'5': 'ABC/5.mp3',
			'6': 'ABC/6.mp3',
			'7': 'ABC/7.mp3',
			'8': 'ABC/8.mp3',
			'9': 'ABC/9.mp3',
			'?': 'ABC/Fragezeichen.mp3',
			',': 'ABC/Komma.mp3',
			'.': 'ABC/Punkt.mp3',
			'w': 'ABC/W.mp3',
			'x': 'ABC/X.mp3',
			'y': 'ABC/Y.mp3',
			'z': 'ABC/Z.mp3',
			
		};
		let selectedTones = [];

		document.addEventListener('keydown', function(event) {
			if (audioFiles[event.key]) {
				selectedTones.push(audioFiles[event.key]);
				console.log('Key pressed:', event.key);
				console.log('Selected tones:', selectedTones);
				playButton.disabled = false;
			}
		});

		playButton.addEventListener('click', function() {
			console.log('Button clicked');
			if (selectedTones.length > 0) {
				playTones(selectedTones);
				selectedTones = []; // Clear the tones after playing
				playButton.disabled = true; // Disable the button again
			}
		});

		function playTones(tones) {
			audioContainer.innerHTML = ''; // Clear previous audio elements

			tones.forEach((tone) => {
				let audioElement = document.createElement('audio');
				audioElement.src = tone;
				audioElement.preload = 'auto';
				audioContainer.appendChild(audioElement);
			});

			let audioElements = audioContainer.getElementsByTagName('audio');
			let currentIndex = 0;

			function playNext() {
				if (currentIndex < audioElements.length) {
					audioElements[currentIndex].play();
					audioElements[currentIndex].addEventListener('ended', playNext);
					currentIndex++;
				}
			}

			playNext();
		}

		if (hierUnserText) {
			hierUnserText.focus({ focusVisible: true });
			console.log('Length of text:', hierUnserText.textContent.length);
		}

}