window.musicClips = {
  "creepin_beeps" : new Howl({
    src: [window.resourcesPath + 'audio/Creepin_Beeps.wav', window.resourcesPath + 'audio/Creepin_Beeps.mp3'],
    loop: true,
    volume: 1.0
  }),
  "the_sorting" : new Howl({
    src: [window.resourcesPath + 'audio/the-sorting.wav', window.resourcesPath + 'mp3_audio/the-sorting.mp3'],
    loop: true,
    volume: 1.0
    }),
  "tempo1" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_1.wav', window.resourcesPath + 'mp3_audio/Tempo_1.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempo2" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_2.wav', window.resourcesPath + 'mp3_audio/Tempo_2.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempo3" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_3.wav', window.resourcesPath + 'mp3_audio/Tempo_3.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempo6" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_6.wav', window.resourcesPath + 'mp3_audio/Tempo_6.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempo7" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_7.wav', window.resourcesPath + 'mp3_audio/Tempo_7.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempo7_2" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_7_2.wav', window.resourcesPath + 'mp3_audio/Tempo_7_2.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempoDread" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_Terror.wav', window.resourcesPath + 'mp3_audio/Tempo_Terror.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempoPanic" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_Terror_2.wav', window.resourcesPath + 'mp3_audio/Tempo_Terror_2.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempoGrim" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_Dark.wav', window.resourcesPath + 'mp3_audio/Tempo_Dark.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempoGrimSlow" : new Howl({
    src: [window.resourcesPath + 'audio/Tempo_Dark_Slow.wav', window.resourcesPath + 'mp3_audio/Tempo_Dark_Slow.mp3'],
    loop: true,
    volume: 1.0
  }),
  "tempo-missing" : new Howl({
    src: [window.resourcesPath + 'mp3_audio/Fermatta-Missing.mp3'], // same for now
    loop: false,
    volume: 1.0
  }),
  "fermatta-missing" : new Howl({
    src: [window.resourcesPath + 'mp3_audio/Fermatta-Missing.mp3'],
    loop: false,
    volume: 1.0
  })
}

window.musicPlayingName = ""
window.setMusic = function(name, restartIfSame = false) {
  if (window.musicPlayingName === name && !restartIfSame) {
    return;
  }
  
  if (window.musicPlayingName !== "") {
    window.musicClips[window.musicPlayingName].stop()
  }
  if (name in window.musicClips) {
    window.musicClips[name].play()
    window.musicPlayingName = name
  } else {
    console.error("Music clip not found: " + name)
  }
}
window.stopMusic = function() {
  window.musicClips[window.musicPlayingName].stop()
}
window.resumeMusic = function() {
  if (window.musicPlayingName !== "") {
    window.musicClips[window.musicPlayingName].play()
  }
}

window.sfx = {
  "correct" : new Howl({
    src: [window.resourcesPath + 'audio/Correct.wav', window.resourcesPath + 'mp3_audio/Correct.mp3'],
    loop: false,
    volume: 1.0
  }),
  "correct2" : new Howl({
    src: [window.resourcesPath + 'audio/Correct-2.wav', window.resourcesPath + 'mp3_audio/Correct-2.mp3'],
    loop: false,
    volume: 1.0
  }),
  "incorrect" : new Howl({
    src: [window.resourcesPath + 'audio/Incorrect.wav', window.resourcesPath + 'mp3_audio/Incorrect.mp3'],
    loop: false,
    volume: 1.0
  }),
  "incorrect2" : new Howl({
    src: [window.resourcesPath + 'audio/Incorrect2.wav', window.resourcesPath + 'mp3_audio/Incorrect2.mp3'],
    loop: false,
    volume: 1.0
  }),
  "passed" : new Howl({
    src: [window.resourcesPath + 'audio/Passed.wav', window.resourcesPath + 'mp3_audio/Passed.mp3'],
    loop: false,
    volume: 1.0
  }),
  "failed" : new Howl({
    src: [window.resourcesPath + 'audio/Failed.wav', window.resourcesPath + 'mp3_audio/Failed.mp3'],
    loop: false,
    volume: 1.0
  }), 
  "sort-sound" : new Howl({
    src: [window.resourcesPath + 'mp3_audio/sort.mp3'],
    loop: false,
    volume: 1.0
  })
}

window.playSFX = function(name) {
  if (name in window.sfx) {
    window.sfx[name].play()
  } else {
    console.error("SFX clip not found: " + name)
  }
}

/*
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

window.theSortingAudio = new Howl({
src: [window.resourcesPath + 'audio/the-sorting.wav', window.resourcesPath + 'mp3_audio/the-sorting.mp3'],
loop: true,
volume: 1.0
});

window.tempoFastScaredAudio = new Howl({
src: [window.resourcesPath + 'audio/Tempo_Terror.wav', window.resourcesPath + 'mp3_audio/Tempo_Terror.mp3'],
loop: true,
volume: 1.0
});

window.tempoMediumScaredAudio = new Howl({
src: [window.resourcesPath + 'audio/Tempo_Dark.wav', window.resourcesPath + 'mp3_audio/Tempo_Dark.mp3'],
loop: true,
volume: 1.0
});

window.tempoSlowScaredAudio = new Howl({
src: [window.resourcesPath + 'audio/Tempo_Dark_Slow.wav', window.resourcesPath + 'mp3_audio/Tempo_Dark_Slow.mp3'],
loop: true,
volume: 1.0
});
*/