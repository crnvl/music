setGainCurve(x => Math.pow(x, 2))
samples('github:switchangel/breaks')
samples('github:switchangel/pad')

setCps(120/60/4)

$: s("breaks/2").fit()
  .scrub(irand(16)
         .div(16)
         .seg(8)
         .rib("<4 20 1 2 18 23 12 12>", 1)
         .almostNever(ply("2 | 4"))
        )
  .orbit(2)
  ._scope()

$: s("white!8")
  .decay(.08)
  .gain(.4).gain(0)

$: s("swpad")
  .scrub("0 .3 .22 .4")
  .n("<3 4 3 5>/2")
  .room(1)
  .delay(.6)
  .delaytime(rand)

$: s("sine")
  .note("<f f d g#>".sub(12))
