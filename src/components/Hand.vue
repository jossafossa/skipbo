<template>
  <div class="bottom">
    <div class="hand">
        <card v-for="(card, index) of player.hand" :key="index" :number="card"></card>
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";

export default {
    components: {Card},
    data: () => {
        return {

        }
    },
    computed: {
        player() {
            return this.$store.getters.activePlayer;
        }
    }
};
</script>

<style lang="scss">
    .hand {
        display:flex;
        
    }
</style>