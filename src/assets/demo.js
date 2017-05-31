import Snap from 'snapsvg-cjs'
const demosvg = require('/Users/joshuajohnson/untitled/vuesetup-auth0-vuex/src/containers/demo.svg')
window.onload = function () {
  const s = Snap(1000, 800)
  const p = 100 / 30
  const h = 250
  const x = 400
  const y = 200
  const R = 100
  const r = 70
// eslint-disable-next-line no-unused-vars
  const open = 0
  const gstream = this.gstream
  const gmilk = 'l()#F4EEE6-#fff:50-#F4EEE6:50-#F4EEE6'
  const gcoffee = 'l()#60544F-#8c7a73:50-#60544F:50-#60544F'
  const gwater = 'l()#B4D6DB-#D6EDEE:50-#B4D6DB:50-#B4D6DB'

  Snap.load(demosvg, function (f) {
    const top = f.select('#top')
    const bot = f.select('#bottom')
    const tap = f.select('#tap')
    const knob = f.select('#knob')
    const dot = f.select('#dot')
    const arr = f.select('#arrow')
    const knobcx = knob.attr('cx')
    const knobcy = knob.attr('cy')
    const lead = f.select('#lead')
    const pie = {
      cx: f.select('#pie-chart circle').attr('cx'),
      cy: f.select('#pie-chart circle').attr('cy'),
      r: f.select('#pie-chart circle').attr('r'),
      coffee: f.select('#legend text'),
      water: f.selectAll('#legend text')[1],
      title: f.selectAll('#legend text')[2]
      // waterBox: f.select('#legend rect:nth-child(2)')
    }
    const angle = 0
    let lastAngle = this.lastAngle
    const startAngle = this.startAngle
    const leadOpenPath = lead.attr('d')
    const leadClosedPath = f.select('#lead-target').attr('d')
    const closed = this.closed
    const grp = s.g().insertBefore(tap)
    f.select('#pie-chart').remove()
    f.select('#americano-area').click(function () {
      chosen(0)
    })
    f.select('#latte-area').click(function () {
      chosen(72)
    })
    f.select('#mocha-area').click(function () {
      chosen(144)
    })
    f.select('#mochiatto-area').click(function () {
      chosen(216)
    })
    f.select('#espresso-area').click(function () {
      chosen(288)
    })
    this.x = +top.attr('cx')
    this.y = +top.attr('cy')
    this.R = +top.attr('rx')
    this.r = +bot.attr('rx')
    this.h = bot.attr('cy') - y
    s.add(f.select('g'))
    lead.click(function () {
      const path = this.path
      const ease = this.ease
      if (!closed) {
        this.path = leadClosedPath
// eslint-disable-next-line no-undef
        this.ease = mina.bounce
        this.closed = 1
      } else {
        this.path = leadOpenPath
// eslint-disable-next-line no-undef
        this.ease = mina.easein
        this.closed = 0
      }
      lead.stop().animate({
        d: path
      }, 1000, ease)
    })
    knob.attr({
      fill: '#000',
      opacity: 0
    }).drag(function (dx, dy, x, y) {
      const a = Snap.angle(knobcx, knobcy, x, y) - startAngle + angle
      dot.transform('r' + [a, knobcx, knobcy])
      arr.transform('r' + [a, knobcx, knobcy])
      this.lastAngle = a
    }, function (x, y) {
      this.startAngle = Snap.angle(knobcx, knobcy, x, y)
      this.lastAngle = angle
      dot.stop()
      arr.stop()
    }, function () {
      this.angle = lastAngle
      const a = Snap.snapTo(72, angle, 36)
      chosen(a)
    })
    function chosen (a) {
      a = (a + 1080) % 360
      this.angle = a
      const to = 'r' + [a, knobcx, knobcy]
      dot.animate({
        transform: to
// eslint-disable-next-line no-undef
      }, 1000, mina.elastic)
      arr.animate({
        transform: to
// eslint-disable-next-line no-undef
      }, 1000, mina.elastic, function () {
        closeCup(function () {
          types[a]()
          pour()
          pieShow()
        })
      })
    }

    grp.path(outline(0, h)).attr('class', 'outline')
    const o3 = (h - 70) / 3
    const o2 = (h - 70) / 2
    const cover = grp.ellipse(getEll(h - 60)).attr('class', 'water')
    const ct1 = grp.path(cut(10, 10 + o3, 0)).attr({
      fill: gcoffee
    })
    const ct2 = grp.path(cut(10 + o3, h - 60, 0)).attr({
      fill: gwater
    })
    const middle = 10 + o3
    const pieCoffee = this.pieCoffee
    const pieTitle = this.pieTitle
    const pieType = this.pieType
    const g = grp.g()
    const dr = grp.path(doors(0)).attr('class', 'doors')
    const types = {
      // americano
      0: function () {
        cover.attr('class', 'water')
        ct2.attr('fill', gwater)
        this.middle = 10 + o3
        this.pieCoffee = 1 / 3
        this.pieType = 'water'
        this.pieTitle = 'Americano'
        this.gstream = 'l(0,1,0,0)#60544F-#60544F:33-#B4D6DB'
      },
      // latté
      72: function () {
        cover.attr('class', 'milk')
        ct2.attr('fill', gmilk)
        this.middle = 10 + o3 * 2
        this.pieCoffee = 2 / 3
        this.pieType = 'milk'
        this.pieTitle = 'Latté'
        this.gstream = 'l(0,1,0,0)#60544F-#60544F:66-#fff'
      },
      // mocha
      144: function () {
        cover.attr('class', 'milk')
        ct2.attr('fill', gmilk)
        this.middle = 10 + o3
        this.pieCoffee = 1 / 3
        this.pieType = 'milk'
        this.pieTitle = 'Mocha'
        this.gstream = 'l(0,1,0,0)#60544F-#60544F:33-#fff'
      },
      // machiatto
      216: function () {
        cover.attr('class', 'milk')
        ct2.attr('fill', gmilk)
        this.middle = 10 + o2
        this.pieCoffee = 1 / 2
        this.pieType = 'milk'
        this.pieTitle = 'Macchiato'
        this.gstream = 'l(0,1,0,0)#60544F-#60544F:50-#fff'
      },
      // espresso
      288: function () {
        cover.attr('class', 'coffee')
        ct2.attr('fill', gcoffee)
        this.middle = 10
        this.pieCoffee = 1
        this.pieType = 'milk'
        this.pieTitle = 'Espresso'
        this.gstream = '#60544F'
      }
    }
    function closeCup (callback) {
      Snap.animate(90, 0, function (val) {
        ct1.attr('path', cut(10, middle, val))
        ct2.attr('path', cut(middle, h - 60, val))
        dr.attr('path', doors(val))
// eslint-disable-next-line no-undef
      }, 500, mina.easein, callback)
    }
    function pour () {
      steam(g, function () {
        Snap.animate(0, 90, function (val) {
          ct1.attr('path', cut(10, middle, val))
          ct2.attr('path', cut(middle, h - 60, val))
          dr.attr('path', doors(val))
// eslint-disable-next-line no-undef
        }, 1500, mina.elastic)
      })
    }
    const pieShow = (function () {
      const disc = s.circle(pie.cx, pie.cy, pie.r).attr({
        fill: '#fff',
        stroke: '#60544F'
      })
      const coffee = s.path().attr({
        stroke: '#60544F',
        strokeWidth: pie.r,
        fill: 'none'
      })
      const olda = 0
// eslint-disable-next-line no-undef
      a = this.a
      return function () {
        const cof = pieCoffee
        const type = pieType
        this.a = 360 * cof / 2
        pie.waterBox.attr({
          fill: type === 'water' ? '#d6edee' : '#fff'
        })
        disc.attr({
          fill: type === 'water' ? '#d6edee' : '#fff'
        })
        pie.title.attr({
          '#text': pieTitle
        })
        pie.coffee.attr({
          '#text': 'Espresso (' + Math.round(cof * 100) + '%)'
        })
        pie.water.attr({
          '#text': (type === 'water' ? 'Hot Water' : 'Milk') + ' (' + (100 - Math.round(cof * 100)) + '%)'
        })
// eslint-disable-next-line no-undef
        Snap.animate(olda, a, function (val) {
          coffee.attr({
            d: 'M' + [pie.cx, pie.cy] +
            'U' + [pie.r / 2, 90 - val, 90 + val]
          })
        }, 500, function () {
          if (cof === 1) {
            disc.attr({
              fill: '#60544F'
            })
          }
        })
// eslint-disable-next-line no-undef
        this.olda = a
      }
    }())

    types[0]()
    pour()
    pieShow()
  })

  function getEll (height) {
    const ra = r + (R - r) / h * height
    return {
      cx: x,
      cy: y + h - height,
      rx: ra,
      ry: ra / p
    }
  }
  function arc (cx, cy, R, r, from, to, command) {
    const start = pointAtAngle(cx, cy, R, r, from)
    const end = pointAtAngle(cx, cy, R, r, to)
    command = command || 'M'
    return command + Snap.format('{sx},{sy}A{R},{r},0,{big},{way},{tx},{ty}', {
      sx: start.x,
      sy: start.y,
      R: R,
      r: r,
      tx: end.x,
      ty: end.y,
      big: +(Math.abs(to - from) > 180),
      way: +(from > to)
    })
  }
  function pointAtAngle (cx, cy, rx, ry, angle) {
    angle = Snap.rad(angle)
    return {
      x: cx + rx * Math.cos(angle),
      y: cy - ry * Math.sin(angle)
    }
  }
  function doors (alpha) {
    const sa = 270 - alpha / 2
    const ea = 270 + alpha / 2
    if (alpha) {
      return arc(x, y, R, R / p, 180, sa) + arc(x, y + h, r, r / p, sa, 180, 'L') + 'z' +
        arc(x, y, R, R / p, ea, 360) + arc(x, y + h, r, r / p, 360, ea, 'L') + 'z'
    } else {
      return arc(x, y, R, R / p, 180, 360) + arc(x, y + h, r, r / p, 360, 180, 'L') + 'z'
    }
  }
// eslint-disable-next-line no-unused-vars
  function fill (from, to) {
    const start = getEll(from)
    const end = getEll(to)
    return 'M' + (start.cx - start.rx) + ',' + start.cy + 'h' + start.rx * 2 +
      arc(end.cx, end.cy, end.rx, end.ry, 0, 180, 'L') + 'z'
  }
  function outline (from, to) {
    const start = getEll(from)
    const end = getEll(to)
    return arc(start.cx, start.cy, start.rx, start.ry, 180, 0) +
      arc(end.cx, end.cy, end.rx, end.ry, 0, 180, 'L') + 'z'
  }
  function cut (from, to, alpha) {
    const s = getEll(from)
    const e = getEll(to)
    const sa = Snap.rad(270 - alpha / 2)
    const ea = Snap.rad(270 + alpha / 2)
    return 'M' + [s.cx, s.cy,
      s.cx + s.rx * Math.cos(ea), s.cy - s.ry * Math.sin(ea),
      e.cx + e.rx * Math.cos(ea), e.cy - e.ry * Math.sin(ea),
      e.cx, e.cy,
      e.cx + e.rx * Math.cos(sa), e.cy - e.ry * Math.sin(sa),
      s.cx + s.rx * Math.cos(sa), s.cy - s.ry * Math.sin(sa)
    ] + 'z'
  }
  function steam (g, callback) {
    g.rect(x - 10, y - 1030, 20, 1000, 10).attr({
      fill: gstream,
      clip: s.rect(x - 10, y - 200, 20, h + 200)
    }).animate({y: y + 40}, 800, function () {
      this.remove()
    })
    s.ellipse(x, y, R, R / p).attr({
      fill: '#fff',
      filter: s.filter(Snap.filter.blur(10))
    }).animate({cy: y - 30, opacity: 0}, 1000, callback)
  }
}
