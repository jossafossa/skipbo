<template>
  <main>
    <game-display></game-display>
    <board></board>
    <hand></hand>
  </main>
</template>

<script>
import Hand from "./components/Hand.vue";
import Board from "./components/Board.vue";
import GameDisplay from "./components/GameDisplay.vue";



export default {
  name: "App",
  components: {
    Hand,
    Board,
    GameDisplay
  }
};
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  body {
    margin:0;
    padding:0;
    font-family: "Open Sans", sans-serif;
  }

  main {
    height:100vh;
    display:flex;
    flex-direction:column;
    
    > .game-display {
      height:10rem;
    }

    > .piles {
      flex:1;
      overflow: hidden;
    }

    > .hand {
      height: 10rem;
    }
  }

</style>
