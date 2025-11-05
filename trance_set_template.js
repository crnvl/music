await (async () => { (0, eval)(await (await fetch('https://raw.githubusercontent.com/switchangel/strudel-scripts/refs/heads/main/allscripts.js')).text()); })();

setCps(140/60/4)

samples('github:eddyflux/crate')

const OFF = "<- - - ->"

// SET PROJECT SCALE
const pscale = "f:minor"

// KICK
// $: s("crate_bd:7!4").duck("2:3").duckdepth(1).duckattack(.25)._scope()

// SNARE
// $: s("crate_sd").beat("0, 2", 4).room(.5).gain(.65)._scope()

// RIDE
// $: s("crate_hh:4").beat("1, 3, 5, 7", 8)._scope()

// BASSLINES
const bl01 = "<3@3 4 5 @3 6>*2"
const bl02 = "<0@6 5 6>"
const bl03 = "<0 2 3 5>"

$: s("supersaw")
  .trancegate(1.5, 45, 1).o(2)
  .sustain(slider(1,0,1))
  .decay(slider(0.779,0,1))
  .release(slider(0.581,0,1))
  .n(
    // SWITCH BASSLINE
   bl01

    //OCTAVER
    //.sub("14")
    .sub("14, 21")
  ).scale(pscale)
  .rlpf(slider(0)).lpenv(2).orbit(2)._pianoroll()

// MELODIES
const tl01 = "<3 2 [-5 -7 3 0 4] 0@2>"
const tl02 = "0@2 <-7 [-5 -2]>@3 <0 -3 2 1>@3"
const tl03 = "<-7 -5 -3 [-2 0]>"
const tl04 = "<<-2 0>@2 <0 1>@2>"

$: s("supersaw")
  .trancegate(1.5, 45, 1).o(2)
  .n(
    // SWITCH MELODY
     tl02

     // OCTAVER
     .add(7)
     //.add("<5 4 0 <0 2>>")
     .add("<0 2>/2")
    ).scale(pscale)
  .delay(.7).pan(rand)
  .fm(.5).fmwave("brown")
  .rlpf(slider(0)).lpenv(2).orbit(3)
  .room(slider(1,0,1))
  ._pianoroll()
$: s("pulse!16")
  .n(
    // "0"
    OFF
    
     .sub(14)).scale(pscale)
  .dec(.1).fm(time).fmh(time).o(4)
  .gain(.4).room(1)
