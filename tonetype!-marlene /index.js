

 
 
 document.addEventListener('keydown', event => {
        if(event.keyCode == 65){
        document.getElementById('A').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 66){
        document.getElementById('B').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 67){
        document.getElementById('C').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 68){
        document.getElementById('D').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 69){
        document.getElementById('E').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 70){
        document.getElementById('F').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 71){
        document.getElementById('G').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 72){
        document.getElementById('H').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 73){
        document.getElementById('I').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 74){
        document.getElementById('J').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 75){
        document.getElementById('K').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 76){
        document.getElementById('L').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 77){
        document.getElementById('M').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 78){
        document.getElementById('N').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 79){
        document.getElementById('O').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 80){
        document.getElementById('P').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 81){
        document.getElementById('Q').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 82){
        document.getElementById('R').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 83){
        document.getElementById('S').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 84){
        document.getElementById('T').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 85){
        document.getElementById('U').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 86){
        document.getElementById('V').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 87){
        document.getElementById('W').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 88){
        document.getElementById('X').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 89){
        document.getElementById('Y').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 90){
        document.getElementById('Z').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 49){
        document.getElementById('1').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 50){
        document.getElementById('2').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 51){
        document.getElementById('3').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 52){
        document.getElementById('4').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 53){
        document.getElementById('5').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 54){
        document.getElementById('6').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 55){
        document.getElementById('7').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 56){
        document.getElementById('8').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 57){
        document.getElementById('9').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 58){
        document.getElementById('0').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 189){
        document.getElementById('-').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 188){
        document.getElementById('Komma').play();
        }
      });document.addEventListener('keydown', event => {
        if(event.keyCode == 190){
        document.getElementById('Punkt').play();
        }
      });


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
    
    document.addEventListener("DOMContentLoaded", function() {
        const randomSentenceDiv = document.getElementById("Satz");
        const hierUnserText = document.getElementById("hierUnserText");
        const hierUnserBild = document.getElementById("hierUnserBild");
        const sentenceData = getRandomSentence();

        hierUnserBild.innerHTML = (sentenceData.image ? '<br><img src="' + sentenceData.image + '" class="Bild">' : '');
        hierUnserText.innerHTML = sentenceData.text.replace(/#/g, '<span class="hash">#</span>');
        
      
       
    });
  