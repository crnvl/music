samples({
  'vocal': 'MORE_GIRAFFES_vocal_distanced_i_Cmaj.wav',
  'chops': 'MO_SV2_135_pad_technician_Cmaj.wav',
  'w808': 'TL_AD_808_OneShot_Pure_C.wav',
  'wpad': 'SO_BT_115_pad_chords_bowing_metal_whisper_Cmaj.wav',
  'kick': 'MO_HMLDS_kick_conflito.wav',
  'snare': 'OS_DSND_Snare_4.wav',
}, 'github:crnvl/samples/main')

register('rlpf', (x, pat) => {
  return pat.lpf(pure(x).mul(12).pow(4))
})

setGainCurve(x => Math.pow(x, 2))

setCpm(80/4)

const playDrums = false;
const playBass = false;
const playChops = true;
const playPad = false;
const playVocals = false;

var drumVol = playDrums ? 1 : 0;
var bassVol = playBass ? 1 : 0

// meow 
  $drums: stack(
    s("kick").beat("0, 2?, 10", 16)._punchcard().duck("3:4:5").duckattack(.25).duckdepth(1).gain(drumVol),
    s("snare").beat("4, 7?, 12", 16)._punchcard().room(0.35).gain(drumVol),
    s("hh:4!16").gain(drumVol),
    s("w808").scrub("0, 2?, 10", 16)
    .rlpf(slider(0.497))
    .gain(bassVol)
    ._scope(),
  ).orbit(2)._scope()

if (playPad) {
  pad: s("wpad")
    .scrub("0 .3 .22 .4").n(5)
    .punchcard()
    .orbit(4)
    .gain(.5)
}

if (playVocals) {
  $vox: s("vocal")
    .scrub(berlin.seg(4))  
    ._punchcard()
    .rlpf(slider(0.531))
    .orbit(5)
    .delay(.6).delaytime(rand)
    .gain(.5)
}

if (playChops) {
  $chops: s("chops")
    .scrub(berlin.seg(4))
    ._punchcard()
    .delay(.6).delaytime(rand)
    .room(1)
    .orbit(3)
}

all(x => x.compressor("-20:20:10:.002:.02"))
