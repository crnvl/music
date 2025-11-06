await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/allscripts.js')).text()); })();

const bpm = 128
setCps(bpm /60 /4)

samples('github:eddyflux/crate')
samples('github:Nikeryms/Samples')





// OPTIONS
const scale = "a:minor"





// VOCALS
$: s("vocals:1").fit().room(.25).pan(rand).n("-7").scale(scale).scrub(berlin.seg(8).rib("<9 9 8 1>",1 )).trancegate(1.5, 45, 1).o(2).gain(1.5)

_$: s("wvocal:2/8").fit()
  .trancegate(.75, 0, 2)
  .gain(.75)
  .delay(.5).delaytime(bpm / 4)
  .room(1)
  .o(2)

_$: s("wvocal:2/8").fit()
  .gain(1)
  .delay(.5).delaytime(bpm / 4)
  .room(1)
  .o(2)







// DRUMS
$: s("crate_bd:24!4").duckorbit("2:3:4").duckattack(bpm / 512).duckdepth(.85)

$: s("crate_hh:1")
  .gain(.75)
  .beat("1, 3, 5, 7", 8)

$: s("hh!16")
  .gain(.75)
  .pan(rand)
  .o(3)

$: s("crate_cp:2")
  .room(.15)
  .delay(.25).delaytime(bpm / 100 / 8)
  .beat("<<4, 12>@3 <4, 12, 15>>", 16)

$: s("crate_rim")
  .gain(.75)
  
  .trancegate(1.5, 45, 1)
  .o(2)
  ._pianoroll()

// ---------------------------------------------------------------------------------------------
const basslines = [
  "<3@3 4 5 @3 6>*2",
  "<0@6 5 6>",
  "<0 2 3 5>",
  "<3 5 7 9>@3 <10 12 14 16>",
]

const melodies = [
  "<3 2 [-5 -7 3 0 4] 0@2>",
  "0@2 <-7 [-5 -2]>@3 <0 -3 2 1>@3",
  "<-7 -5 -3 [-2 0]>",
  "<12 12 10 10>@2 <7> <9 3>"
]

const arps = [
  "<14 16 12 10>*8".sub(7),
  "<0@4 5@2 6@2>*8".sub(7),
]

// ---------------------------------------------------------------------------------------------

const bassline = basslines[1]
const melody   = melodies[3]
const arp      =  arps[1]








// INSTRUMENTS




// BASS SECTION

// - - - - MID BASS
$: s("supersaw")
  //.fm(.5).fmwave("brown")
  .sustain(slider(0.508,0,1))
  .decay(slider(0.568,0,1))
  .release(slider(0.172))
  
  .rlpf(slider(0.363))
  .compressor(10)
  .gain(1.35)
  
  .trancegate(1.5, 45, 1)
  .n(
    bassline
    .sub("14, 21")
  ).scale(scale)
  .o(2)
  ._pianoroll()
// - - - - SUB BASS
_$: s("sine")
  .fm(.5).fmwave("saw")
  .distort("3:3")
  .gain(.5)
  .rlpf(slider(0.386))
  .n(
    bassline
    .sub("14")
  )
  .scale(scale)
  .o(2)
  ._scope()

// ---------------------------------------------------------------------------------------------





// SYNTH SECTION

// - - - - LEAD SYNTH
$: s("sawtooth")
  .fm(.5).fmwave("brown")
  .sustain(slider(0.728,0,1))
  .decay(slider(0.285,0,1))
  .release("<.2 .4 .6 .8>")

  .hpf(500)
  .rlpf(slider(0.324))
  .delay(.75)
  .delaytime(bpm / 4)
  .room(1)
  .compressor(10)
  
  .trancegate(1.5, 90, 1)
  .n(
    melody
    .add(0)
  ).scale(scale)
  .o(4)
  ._pianoroll()



// - - - - ARP SYNTH
_$: s("sine!16")
  .dec(.1).fm(time).fmh(time).o(4)
  .gain(.75)
  .room(1)
  
  .n(
    arp
     .add(14)
  ).scale(scale)
  ._pianoroll()

// ---------------------------------------------------------------------------------------------
