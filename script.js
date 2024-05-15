document.addEventListener('DOMContentLoaded', function() {
  const repique1Button = document.getElementById('repique-1');
  const repique2Button = document.getElementById('repique-2');
  const repique3Button = document.getElementById('repique-3');
  const rom1Button = document.getElementById('rom-1');
  const rom2Button = document.getElementById('rom-2');
  const rom3Button = document.getElementById('rom-3');
  const rom4Button = document.getElementById('rom-4');
  const frase1Button = document.getElementById('frase-1');
  const frase2Button = document.getElementById('frase-2');
  const rufada1Button = document.getElementById('rufada-1');
  const uhButton = document.getElementById('uh');
  const porraButton = document.getElementById('porra');
  
  // Associando teclas a sons
  const soundMap = {
    'c': 'REPIQ1.wav',
    'v': 'REPIQ1.wav',
    'b': 'REPIQ2.wav',
    'n': 'REPIQ2.wav',
    'm': 'REPIQ3.wav',
    'z': 'ROM1.wav',
    'x': 'ROM1.wav',
    'd': 'ROM2.wav',
    'f': 'ROM2.wav',
    'g': 'ROM3.wav',
    'h': 'ROM3.wav',
    'j': 'ROM4.wav',
    'k': 'ROM4.wav',
    'l': 'RUFADA1.wav',
    ',': 'FRASE1.wav',
    '.': 'FRASE2.wav',
    'a': 'UH.wav',
    's': 'PORRA.wav'
  };

  // Criar objetos de áudio para pré-carregar os sons
  const audioElements = {};
  for (const key in soundMap) {
    audioElements[key] = new Audio(soundMap[key]);
  }

  // Função para tocar o som
  function playSound(soundKey) {
    if (audioElements[soundKey]) {
      const audio = audioElements[soundKey];
      audio.currentTime = 0; // Reiniciar a reprodução se já estiver tocando
      audio.volume = 0.5; // Aplicar volume global
      audio.play();
    }
  }

  // Adicionando eventos de clique
  repique1Button.addEventListener('click', function() {
    playSound('c');
  });

  repique2Button.addEventListener('click', function() {
    playSound('b');
  });

  repique3Button.addEventListener('click', function() {
    playSound('m');
  });

  rom1Button.addEventListener('click', function() {
    playSound('z');
  });

  rom2Button.addEventListener('click', function() {
    playSound('d');
  });

  rom3Button.addEventListener('click', function() {
    playSound('g');
  });

  rom4Button.addEventListener('click', function() {
    playSound('j');
  });

  rufada1Button.addEventListener('click', function() {
    playSound('l');
  });

  frase1Button.addEventListener('click', function() {
    playSound(',');
  });

  frase2Button.addEventListener('click', function() {
    playSound('.');
  });

  uhButton.addEventListener('click', function() {
    playSound('a');
  });

  porraButton.addEventListener('click', function() {
    playSound('s');
  });

  // Adicionando eventos de teclado
  document.addEventListener('keydown', function(event) {
    const key = event.key.toLowerCase();
    if (soundMap[key]) {
      playSound(key);
    }
  });

  // Manipular o volume global
  const volumeControl = document.getElementById('volume-control');
  volumeControl.addEventListener('input', function() {
    globalVolume = volumeControl.value;
  });
});
