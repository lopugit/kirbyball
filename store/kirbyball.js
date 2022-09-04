let storedPlayer = null

if (typeof window !== 'undefined') {
  storedPlayer = localStorage.getItem('player')
  if (storedPlayer) {
    storedPlayer = JSON.parse(storedPlayer)
  }
}

const state = () => ({
  storedPlayer,
  characters: [
    {
      name: 'Sword'
    },
    {
      name: 'Cloud'
    },
    {
      name: 'Star'
    },
    {
      name: 'Wand'
    },
    {
      name: 'Big'
    },
    {
      name: 'Jester'
    },
    {
      name: 'Sleepy'
    },
    {
      name: 'Waddle'
    }
  ],
  effects: [
    "Skips the receiver's turn if this kirby is hit",
    "Steal an opposition kirby if the receiver's kirby is hit, thrower chooses",
    "If the receiver has more than 4 kirby's and this kirby is hit all the receiver's kirby's come back in",
    'Takes out the closest kirby. Receiver chooses',
    "Take out any of the thrower's kirby's if this kirby is hit, receiver chooses",
    "Swap a kirby from the receiver's field with a thrower's kirby, thrower chooses",
    "The thrower loses all the same kirby's hit in this turn",
    "Brings back 1 of the receiver's kirby's, receiver chooses"
  ],
  drinkingEffects: [
    'Infinite Single Shots',
    'One Time Double Shot'
  ]
})

export default {
  state
}
