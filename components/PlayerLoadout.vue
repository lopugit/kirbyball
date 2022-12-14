<template>
  <div
    class="
      w-full py-2 px-1 min-h-screen flex flex-col
      items-center justify-start

    "
  >
    <div
      v-if="player"
      class="loadout py-1 flex flex-row flex-wrap justify-center"
      style="max-width: 550px"
    >
      <div
        v-for="(character, idx) in player"
        :key="idx"
        class="p-1 sm:p-2 w-6/12 flex justify-center items-start"
      >
        <div
          class="w-full flex flex-col items-center bg-primary rounded-md shadow-sm p-1"
        >
          <div style="height: 8vh">
            <img
              class="h-full"
              :src="`/characters/kirby${character.name.toLowerCase()}.png`"
            >
          </div>
          <div class="flex flex-col p-1 sm:p-2 w-full">
            <div class="pb-1 font-xbold text-secondary text-sm sm:text-3xl">
              {{ character.name }} Kirby
            </div>
            <div class="pb-1 text-darkgray text-xs leading-4 sm:text-xs">
              <span class="font-bold text-secondary text-xs sm:text-md">
                Effect
              </span>
              {{ character.effect }}
            </div>
            <div v-if="character.drinkingEffect" class="text-darkgray text-xs leading-4 sm:text-xs">
              <span class="font-bold text-secondary text-xs sm:text-md">
                Drinking
              </span>
              {{ character.drinkingEffect }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="py-24">
      <div
        v-if="!generateConfirm"
        class="bg-primary text-secondary px-2 py-1 rounded-md font-bold text-xl shadow-sm hover:shadow-md transition-all hover:cursor-pointer hover:text-white"
        @click="generateConfirm = true"
      >
        Generate Team
      </div>
      <div
        v-if="generateConfirm"
        class="flex flex-col items-center justify-center"
      >
        <div class="text-white font-bold text-primary text-lg pb-2">
          Are you sure?
        </div>
        <div class="flex flex-row">
          <div
            class="bg-primary text-secondary px-4 py-1 mr-5 rounded-md font-bold text-xl shadow-sm hover:shadow-md transition-all hover:cursor-pointer hover:text-white"
            @click="generateTeam"
          >
            Yes
          </div>
          <div
            class="bg-primary text-secondary px-4 py-1 rounded-md font-bold text-xl shadow-sm hover:shadow-md transition-all hover:cursor-pointer hover:text-white"
            @click="generateConfirm = false"
          >
            No
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      generateConfirm: false,
      player: null
    }
  },
  computed: {
    generated () {
      return this.player
    }
  },
  mounted () {
    this.checkForExistingPlayer()
  },
  methods: {
    checkForExistingPlayer () {
      let storedPlayer = null
      if (typeof window !== 'undefined') {
        storedPlayer = localStorage.getItem('player')
        if (storedPlayer) {
          storedPlayer = JSON.parse(storedPlayer)
          this.player = storedPlayer
        }
      }
    },
    generateTeam () {
      this.generateConfirm = false

      const player = []
      const playerEffectsTaken = []
      const kirbys = this.$store.state.kirbyball.characters
      const effects = this.$store.state.kirbyball.effects
      kirbys.forEach((kirby, idx) => {
        let effectFound = false
        while (player.length < effects.length && !effectFound) {
          const effect = effects[Math.floor(Math.random() * effects.length)]
          if (!playerEffectsTaken.includes(effect)) {
            playerEffectsTaken.push(effect)

            player.push({
              name: kirby.name,
              effect
            })
            effectFound = true
          }
        }
      })

      // apply drinking effects
      const drinkingEffects = this.$store.state.kirbyball.drinkingEffects
      const drinkingEffectsTaken = []

      while (drinkingEffectsTaken.length < drinkingEffects.length) {
        player.forEach((kirby) => {
          const applyDrinkingEffect = Math.random() < 0.05
          if (applyDrinkingEffect && drinkingEffectsTaken.length < drinkingEffects.length) {
            kirby.drinkingEffect = drinkingEffects.find(effect => !drinkingEffectsTaken.includes(effect))
            drinkingEffectsTaken.push(kirby.drinkingEffect)
          }
        })
      }

      this.player = player

      if (typeof window !== 'undefined') {
        window.localStorage.setItem('player', JSON.stringify(player))
      }
    }
  }
}
</script>
