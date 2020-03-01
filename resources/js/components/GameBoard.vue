<template>
    <div class="game-container">
        <!-- Game Message -->
        <div></div>
        <div class="grid-container">
            <grid-row v-for="(x,index) in 4" :key="index" />
        </div>
        <div class="tile-container">
            <tile v-for="(tile, index) in tiles" :key="index" :tileValue="tile.tileValue" :tileColumn="tile.tileColumn" :tileRow="tile.tileRow"></tile>
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
import Tile from './Tile.vue';

export default {
    components: {
        'grid-row': GridRow,
        'tile': Tile
    },
    data() {
        return {
            tiles: [
                {
                    tileValue: 2,
                    tileColumn: 1,
                    tileRow: 1
                },
                {
                    tileValue: 2,
                    tileColumn: 3,
                    tileRow: 2
                },
                {
                    tileValue: 4,
                    tileColumn: 4,
                    tileRow: 4
                }
            ]
        }
    },
    methods:{
        moveLeft: function(){
            console.log("Left Arrow Pressed");
        },
        moveRight: function(){
            console.log("Right Arrow Pressed");
        },
        moveUp: function(){
            console.log("Up Arrow Pressed");
        },
        moveDown: function(){
            console.log("Down Arrow Pressed");
        },
    }
}
</script>
