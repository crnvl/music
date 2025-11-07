await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/allscripts.js')).text()); })();

samples('github:eddyflux/crate')
samples('github:Nikeryms/Samples')
samples('github:switchangel/breaks')
samples('github:switchangel/pad')
samples({
  'vocal_loop_130_Am': '91V_NUXE_130_vocal_hook_care_for_u_pitched_Am.wav',
  'vocal_loop_142_Am': 'OSS_SOJD_142_VOCAL_LOOP_HAUNTED_Am.wav',
  'guitar_loop_162_Bbmin': 'MO_JANE_162_guitar_loop_this_is_the_only_guitar_loop_fuck_you_Bbmin.wav',
  'drum_loop_140': 'DS_ECT2_140_drum_loop_full_furnace.wav',
  'bass_loop_140_D': 'DS_ECT2_140_synth_bass_loop_moltensystem_D.wav',
  'pluck_loop_140_Dmaj': 'MO_PS_140_melody_loop_pluck_vocal_pretty_Dmaj.wav',
}, 'github:crnvl/samples')





// OPTIONS
const scale = "d:major"
const bpm = 140
all(x => x
     //.room("<0 0 0 0 0 0 1>/2")
   )

setCps(bpm /60 /4)






// VOCALS
_$: s("vocals:1").fit().room(.25).pan(rand).n("-7").scale(scale).scrub(berlin.seg(8).rib("<9 9 8 1>",1 )).trancegate(1.5, 45, 1).o(2).gain(1.5)

// 130 BPM A MINOR
_$: s("vocal_loop_130_Am/8").fit()
  .trancegate(.75, 0, 2)
  .gain(1)
  .delay(.5).delaytime(bpm / 4)
  .room(1)
  .o(2)

// 130 BPM A MINOR
_$: s("vocal_loop_130_Am/8").fit()
  .gain(1)
  .delay(.5).delaytime(bpm / 4)
  .room(1)
  .o(2)

// 142 BPM A MINOR
_$: s("vocal_loop_142_Am/16").fit()
  .begin("<.25 .26 .95 .95>")
  .trancegate(.75, 45, 2)
  .gain("<1.5 1.5 2 2>")
  //.delay(.5).delaytime(bpm / 4)
  .room(1)
  .o(2)

// 142 BPM A MINOR
_$: s("vocal_loop_142_Am/16").fit()
  .gain(1.25)
  .delay(.5).delaytime(bpm / 4)
  .room(1)
  .o(2)






// LOOPS
// 162 BPM A# MINOR
_$: s("guitar_loop_162_Bbmin/8").fit()
  .distort("3:1:diode")
  .compressor(-25)
  .hpf(500)
  .gain(.5)
  .room(1)
  .o(2)

// 140 BPM DRUMS
_$: s("drum_loop_140/8").fit()
  .gain(.75)

// 140 BPM D
_$: s("bass_loop_140_D/4").fit()
  .compressor(10)
  .o(2)

// 140 BPM D MAJOR
_$: s("pluck_loop_140_Dmaj/8").fit()
  .room(1)
  .o(2)









// DRUMS
// - - - - KICKS
_$: s("crate_bd:24!4").duckorbit("2").duckattack(bpm / 512).duckdepth(.75)
_$: s("crate_bd:7!4").duckorbit("2").duckattack(bpm / 512).duckdepth(.75)

// - - - - OFFBEAT HIHAT
_$: s("crate_hh:1")
  .gain(.75)
  .beat("1, 3, 5, 7", 8)

// - - - - FAST HIHAT
_$: s("hh!16")
  .gain(.75)
  .pan(rand)
  .o(3)

// - - - - CLAP
_$: s("crate_cp:2")
  .room(.1)
  .delay(.25).delaytime(bpm / 100 / 8)
  .beat("<<4, 12>@3 <4, 12, 15>>", 16)

// - - - - RIMSHOT RYTHM
_$: s("crate_rim")
  .gain(.75)  
  .trancegate(1.5, 45, 1)
  .o(2)

// - - - - NORMAL BREAK
_$: s("breaks:2/2").fit()
  .compressor(-10)
  .gain(1)
  .o(2)

// - - - - CHOPPED BREAK
_$: s("breaks/2").fit()
  .scrub(
    irand(16).div(16).seg(8)
    .rib("<4 20 1 2 18 23 12 12>", 1)
    .almostNever(ply("2 | 4")))
  .compressor(-10)
  .gain(1)
  .o(2)












// ---------------------------------------------------------------------------------------------
const basslines = [
  "<3@3 4 5 @3 6>*2",
  "<0@6 5 6>",
  "<0 2 3 5>",
  "<3 5 7 9>@3 <10 12 14 16>",
  "<5 5 7 0>",
  "<3@3 7 5@3 0>",
  "<7 5 3 3>",
]

const melodies = [
  "<3 2 [-5 -7 3 0 4] 0@2>",
  "0@2 <-7 [-5 -2]>@3 <0 -3 2 1>@3",
  "<-7 -5 -3 [-2 0]>",
  "<12 12 10 10>@2 <7> <9 3>",
  "<7 4 6 2>*2@3 <4 6 2 7>*2".add("0, -7"),
  "<5@3 7@2 9>",
  "<7 5 3 3>@3 <12 14>",
]

const arps = [
  "<14 16 12 10>*8".sub(7),
  "<0@4 5@2 6@2>*8".sub(7),
]

// ---------------------------------------------------------------------------------------------

const bassline = "<5 4 3 3>".add(7)
const melody   = "<5 4 3 3>@3 <7 - 5 5>".add(7)
const arp      = "<3 4 5 5>*8"

















// INSTRUMENTS




// BASS SECTION

// - - - - MID BASS
_$: s("supersaw")
  //.fm(.5).fmwave("brown")
  .sustain(slider(1,0,1))
  .decay(slider(0.424,0,1))
  .release(slider(0.386))
  .hpf(350)
  .rlpf(slider(0.489))
  //.rlpf("<.35 .45 .5 .65>")
  .compressor(10)
  .gain(1.35)
  //.trancegate(1.5, 45, 1)
  .n(
    bassline
    .sub("14, 21")
  ).scale(scale)
  .o(2)

// - - - - SUB BASS
_$: s("sine")
  .fm(.5).fmwave("saw")
  .distort("3:3")
  .gain(.5)
  .rlpf(slider(0.302))
  .n(
    bassline
    .sub(21)
  )
  .scale(scale)
  .o(2)

// ---------------------------------------------------------------------------------------------





// SYNTH SECTION

// - - - - LEAD SYNTH
_$: s("supersaw")
  .fm(.5).fmwave("brown")
  .sustain(slider(0.673,0,1))
  .decay(slider(0.424,0,1))
  .release("<.2 .4 .6 .8>")
  .hpf(500)
  .rlpf(slider(0.784))
  .gain(slider(0.727))
  .delay(.75)
  .delaytime(bpm / 4)
  //.room(1)
  .compressor(10)
  .pan(rand)
  .trancegate(1.5, 90, 1)
  .n(
    melody
    .add(0)
  ).scale(scale)
  .o(4)

// - - - - PAD SAMPLER (NOT IN KEY)
_$: s("<swpad swpad:2 swpad:4 swpad:3>/2")
  .pan(rand)
  .gain(1)
  .o(2)

// - - - - ARP SYNTH
_$: s("sine!16")
  .dec(.1).o(4)
  .gain(.75)
  .delay(.7)
  .room(1)
  .n(
    arp
     .add(14)
  ).scale(scale)

// - - - - GROOVE SYNTH
_$: s("pulse")
  .dec(.1).fm(time).fmh(time).o(4)
  .gain(.75)
  .beat("<2, 6, 10, 11, 14>", 16)

// ---------------------------------------------------------------------------------------------
