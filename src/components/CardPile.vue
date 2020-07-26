<template>
    <div class="card-pile">
        <div class="card-container" v-for="(card, index) in cards" :key="index">
            <card :number="card"></card>
        </div>
    </div>
</template>

<script>
import Card from "./Card.vue";

export default {
    components: {Card},
    props: ["cards"],
    mounted() {
        console.log(this.cards);
    }
};
</script>

<style lang="scss">
    .card-pile {
        display:flex;
        flex-direction: column;width: 8rem;

        > .card:nth-child(1) {
            position: relative;
        }

        > * {
            flex:1;
            max-height: 2rem;
            > .card {

            position:absolute;
            }
        }


    }
</style>