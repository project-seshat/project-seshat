// TODO: Get this to run after Howl has been loaded from howler.js
window.creepin_beeps = new Howl({
    src: [window.resourcesPath + 'audio/Creepin_Beeps.wav', window.resourcesPath + 'audio/Creepin_Beeps.mp3'],
    loop: true,
    volume: 1.0
});

window.tempo1Audio = new Howl({
  src: [window.resourcesPath + 'audio/Tempo_1.wav', window.resourcesPath + 'mp3_audio/Tempo_1.mp3'],
  loop: true,
  volume: 1.0
});

window.tempo2Audio = new Howl({
  src: [window.resourcesPath + 'audio/Tempo_2.wav', window.resourcesPath + 'mp3_audio/Tempo_2.mp3'],
  loop: true,
  volume: 1.0
});

window.tempo3Audio = new Howl({
  src: [window.resourcesPath + 'audio/Tempo_3.wav', window.resourcesPath + 'mp3_audio/Tempo_3.mp3'],
  loop: true,
  volume: 1.0
});

window.tempo6Audio = new Howl({
  src: [window.resourcesPath + 'audio/Tempo_6.wav', window.resourcesPath + 'mp3_audio/Tempo_6.mp3'],
  loop: true,
  volume: 1.0
});

window.tempo7Audio = new Howl({
  src: [window.resourcesPath + 'audio/Tempo_7.wav', window.resourcesPath + 'mp3_audio/Tempo_7.mp3'],
  loop: true,
  volume: 1.0
});

window.tempoTerror2Audio = new Howl({
  src: [window.resourcesPath + 'audio/Tempo_Terror_2.wav', window.resourcesPath + 'mp3_audio/Tempo_Terror_2.mp3'],
  loop: true,
  volume: 1.0
});
// window.creepin_beeps.play();