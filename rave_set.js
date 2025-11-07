await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/allscripts.js')).text()); })();

samples('github:eddyflux/crate')
samples('github:Nikeryms/Samples')
samples('github:switchangel/breaks')
samples('github:switchangel/pad')
samples('github:internetmoment/get-your-wish')





// OPTIONS
const scale = "b:major"
const bpm = 95
all(x => x
     //.room(.5)
   )

setCpm(bpm / 4)






_GYW_MAIN_VOCALS: s("gyw_vocals:[<0>]")
  .chop(32).cut(1).loopAt(8)
  .sometimes(ply("2 | 3"))
  //.rev()
  .room(.35).rsize(7)
  .delay(.25)
  .coarse(2)
  .lpf(7500)
  .hpf(1000)
  .compressor(20)
  .o(4)




_GYW_MAIN_MELODY: s("gyw_melody:[<0>]")
  .chop(32).cut(2).loopAt(4)
  .compressor(-20)
  .gain(.75)
  .room(1).rsize(2)
  .o(3)




// DRUMS
const sidechain = "2:3:4"
// - - - - KICKS
_$: s("crate_bd:24!4").duck(sidechain).duckattack(bpm / 512).duckdepth(.75)
_$: s("crate_bd:7!4").duck(sidechain).duckattack(bpm / 512).duckdepth(.75)
_$: s("crate_bd:4")
  .beat("<0, 1?, 6>", 8)
  .duck(sidechain).duckattack(bpm / 512).duckdepth(.85)

// - - - - SNARE
_$: s("crate_sd:2")
  .beat("<<4, 12>@3 <4, 12, 15>>", 16)
  .gain(.75)

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
  .delay(.15).delaytime(bpm / 100 / 4)
  .beat("<<4, 12>@3 <4, 12, 15>>", 16)

// - - - - RIMSHOT RYTHM
_$: s("crate_rim")
  .gain(.75)  
  .trancegate(1.5, 45, 1)
  .o(2)

_REGULAR_BREAK: s("breaks:4")
  .chop(16).cut(3).loopAt(2)
  .compressor(-10)
  .gain(.75)
  .o(2)

_CHOPPED_BREAK: s("breaks/2").fit()
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
  "<0@4 7 5 3 3>",
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

const bassline = "<3 3 5 5 3 3 5 2>@3 <12 14>"
const melody   = "<7 - 5 - 9 - 3>"
const arp      = "<7 - 5 - 9 - 3>"
const pad      = "<[<<5, 7, 9>@2 <0, 3, 5>@2>]>"













// INSTRUMENTS




// BASS SECTION

_MID_BASS: s("supersaw")
  .fm(.5).fmwave("brown")
  .sustain(slider(1,0,1))
  .decay(slider(0.424,0,1))
  .release(slider(0.58))
  .hpf(350)
  .rlpf(slider(0.466))
  //.rlpf("<.35 .45 .5 .65>")
  .compressor(10)
  .gain(1.35)
  .trancegate(1.5, 45, 1)
  .n(
    bassline
    .sub("14, 21")
  ).scale(scale)
  .o(2)

_SUB_BASS: s("sine")
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
_LEAD_SYNTH: s("supersaw")
  .fm(.5).fmwave("brown")
  .sustain(slider(0.673,0,1))
  .decay(slider(0.424,0,1))
  .release("<.2 .4 .6 .8>")
  .hpf(500)
  .rlpf("<.7@6 .85 1>/2")
  .gain(slider(0.443))
  .delay(.75)
  .delaytime(bpm / 4)
  .room(1)
  .compressor(10)
  .pan(rand)
  .trancegate(1.5, 90, 1)
  .n(
    melody
    .add(0)
  ).scale(scale)
  .o(4)

_BIG_PAD: s("<supersaw!4>")
  .att(.1)
  .sustain(1)
  .release(.95)
  .hpf(800)
  .lpf(1000)
  .fm(.5).fmwave("brown")
  .n(pad.sub(7)).scale(scale)
  .phaser(.0125)
  .room(1).rsize(75)
  .delay(1).delaytime(rand)
  .compressor(20)
  .gain(.75)
  .o(2)

_LEAD_PAD: s("<[supersaw, supersaw/2]>!8")
  .att(.1)
  .sustain(1)
  .release(.95)
  .hpf(900)
  .lpf(1500)
  .fm(.5).fmwave("brown")
  .n(arp).scale(scale)
  .phaser(.0125)
  .room(1).rsize(75)
  .delay(1).delaytime(rand)
  .compressor(20)
  .gain(.75)
  .o(2)

// ---------------------------------------------------------------------------------------------
