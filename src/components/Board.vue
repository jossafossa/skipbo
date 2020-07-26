<template>
  <div class="piles">
        <card-pile v-for="(pile, index) of piles" :key="index" :cards="pile"></card-pile>
  </div>
</template>

<script>
import CardPile from "./CardPile.vue";

export default {
    components: {CardPile},
    computed: {
        piles() {
            return this.$store.getters.piles;
        }
    }
};
</script>
<style lang="scss">
    .piles {
        display:flex;
        justify-content: center;
        align-items: stretch;
        padding-bottom:14rem;

        > *:not(:nth-last-child(1)) {
            margin-right:1rem;
        }
    }
</style>