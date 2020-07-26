<template>
  <div class="game-display">
    turn: {{turn}}
	<button @click="startGame()">start</button>
	<button @click="nextPlayer()">next</button>
  </div>
</template>

<script>
export default {
	name: "GameDisplay",
	computed: {
		turn() {
			return this.$store.getters.turn;
		}
	},
	methods: {
		startGame() {
			console.log("startGame");
			this.$store.dispatch("setupGame", ["henk", "piet"]);
		},
		nextPlayer() {
			this.$store.dispatch("nextPlayer");
		}
	}
};
</script>

<style lang="scss">
  .game-display {
    padding:1rem;
  }
</style>