<template>
    <div class="card">
        <span>{{number}}</span>
        <span>{{number}}</span>
        <span>{{number}}</span>
    </div>
</template>

<script>

export default {
    props: ["number"],
};
</script>

<style lang="scss">
    .card {
        width:8rem;
        height:14rem;
        background: linear-gradient(#3e5cb9, #0c3d9b);
        color:white;
        position:relative;
        border-radius:1rem;
        font-weight: 800;
        font-size:1.5rem;
        box-shadow: 0 0 .5rem rgba(0,0,0,0.2);
        display:flex;
        align-items:center;
        justify-content: center;


        > * {
            position: absolute;
            margin:.5rem;
            width:2rem;
            height:2rem;
            background-color:rgba(255,255,255,0.2);
            display:flex;
            align-items:center;
            justify-content: center;
            border-radius: 50%;

            &:nth-child(1) {
                font-size:3.5rem;
                width:70%;
                height:70%;
                background-color:rgba(0,0,0,0.3);
            }

            &:nth-child(2) {
                right:0;
                top:0;
            }

            &:nth-child(3) {
                bottom:0;
                left:0;
            }
        }
    }
</style>