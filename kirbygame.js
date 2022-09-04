const fs = require('fs')

const effects = [
  "Skips the receiver's turn if this kirby is hit",
  "Steal an opposition kirby if the receiver's kirby is hit, thrower chooses",
  "If the receiver has more than 4 kirby's and this kirby is hit all the receiver's kirby's come back in",
  "Takes out the closest kirby. Receiver chooses",
  "Take out any of the thrower's kirby's if this kirby is hit, receiver chooses",
  "Swap a kirby from the receiver's field with a thrower's kirby, thrower chooses",
  "The thrower loses all the same kirby's hit in this turn",
  "Brings back 1 of the receiver's kirby's, receiver chooses"
]

const specialEffects = [
  'Shots infinite',
  'Shot single'
]

const kirbys = [
  'star',
  'sword',
  'magician',
  'fat',
  'wand',
  'sleepy',
  'cloud',
  'mango'
]

const takenEffects = []

const player1 = []
const player1EffectsTaken = []
kirbys.forEach((kirby, idx) => {

  let effectFound = false
  while (player1.length < effects.length && !effectFound) {
    const effect = effects[Math.floor(Math.random() * effects.length)]
    if (!player1EffectsTaken.includes(effect)) {
      player1EffectsTaken.push(effect)
      const specialEffect = specialEffects[idx]
      player1.push({
        kirby,
        effect: effect,
        specialEffect: idx < 2 ? specialEffect : 'none',
      })
      effectFound = true
    }
  }

})

const player2 = []
const player2EffectsTaken = []
kirbys.forEach((kirby, idx) => {

  let effectFound = false
  while (player2.length < effects.length && !effectFound) {
    const effect = effects[Math.floor(Math.random() * effects.length)]
    if (!player2EffectsTaken.includes(effect)) {
      player2EffectsTaken.push(effect)
      const specialEffect = specialEffects[idx]
      player2.push({
        kirby,
        effect: effect,
        specialEffect: idx < 2 ? specialEffect : 'none',
      })
      effectFound = true
    }
  }

})


fs.writeFileSync('player1.json', JSON.stringify(player1, null, 2))
fs.writeFileSync('player2.json', JSON.stringify(player2, null, 2))
