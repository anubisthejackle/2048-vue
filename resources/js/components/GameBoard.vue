<template>
    <div class="game-container">
        <!-- Game Message -->
        <div></div>
        <div class="grid-container">
            <grid-row v-for="x in 4" />
        </div>
        <div class="tile-container">
        </div>
    </div>
</template>

<style scoped>
    .game-container {
        margin-top: 40px;
        position: relative;
        padding: 15px;
        cursor: default;
        -webkit-touch-callout: none;
        -ms-touch-callout: none;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        -ms-touch-action: none;
        touch-action: none;
        background: #bbada0;
        border-radius: 6px;
        width: 500px;
        height: 500px;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
    }

    .grid-container {
        position: absolute;
        z-index: 1;
    }

    .tile-container {
        position: absolute;
        z-index: 2;
    }
</style>

<script>
import GridRow from './GridRow.vue';
export default {
    components: {
        'grid-row': GridRow
    },
    data() {
        return {

        }
    }
}
</script>
