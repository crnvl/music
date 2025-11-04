register('rlpf', (x, pat) => {
  return pat.lpf(pure(x).mul(12).pow(4))
})

setGainCurve(x => Math.pow(x, 2))

const useCpm = 150/4

// meow

setCpm(useCpm)

$loop: s("music:1")
  .scrub(perlin.fast(2).seg(8))
  .room(1)
  .coarse("<1 4 8 [16 32]>/2")
  .orbit(3)

$drums: stack(
  s("music:3").beat("0, 2?", 16)
    .distort("1.35:0.5:diode")
    .duck("3:4")
    .duckattack(.25)
    .duckdepth(.5),
  s("music:4").beat("8, 14?", 16).gain(.35)
    .distort("2:0.5:diode").room(1),
  s("ht:3").beat("14?", 16).distort("2:0.5:diode").room(1).gain(.35),
  s("mt:3").beat("16?", 16).distort("2:0.5:diode").room(1).gain(.35),
  s("rim").beat("1? 3 5?", 8).room(1).gain(.45).delay(.6),
  s("music:2").beat("8?", 16).gain(.35).delay(.5).delaytime(useCpm),
  s("hh:3").scrub(perlin.fast(2).seg(8))._punchcard().gain(.75),
  s("music:5")
    .n("<5 7 3 3 5 7 3 0>".sub(12))
    ._punchcard()
    .distort("2:0.5:diode")
    .scale("G:minor")
    .gain(.35)
    .orbit(4)
)._scope()

all(x => x.compressor("-20:20:10.3152:.02"))
