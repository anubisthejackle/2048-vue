<template>
    <div class="game-container">
        <!-- Game Message -->
        <div></div>
        <div class="grid-container">
            <grid-row v-for="(x,index) in 4" :key="index" />
        </div>
        <div class="tile-container">
            <tile v-for="(tile,index) in tileObjs" :key="index" :tileValue="tile.value" :tileColumn="tile.column" :tileRow="tile.row"></tile>
        </div>
        <Keypress :key-code="38" event="keyup" @pressed="moveUp" />
        <Keypress :key-code="37" event="keyup" @pressed="moveLeft" />
        <Keypress :key-code="39" event="keyup" @pressed="moveRight" />
        <Keypress :key-code="40" event="keyup" @pressed="moveDown" />
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
        'tile': Tile,
        Keypress: () => import('vue-keypress')
    },
    data() {
        return {
            tileObjs: [
                    {
                        value: 2,
                        row: 3,
                        column: 3
                    }
            ],
            tiles: [
                    [0,0,0,0],
                    [0,0,0,0],
                    [0,0,2,0],
                    [0,0,0,0]
           ]
        }
    },
    mounted() {
        // this.generateRandomTile();
        // this.generateRandomTile();
    },
    methods:{
        moveLeft: function(){
            console.log("Left Arrow Pressed");
            var moved, everMoved = false;
            var tileRow;
            do{
                moved = false;
                for(var rowIndex = 0, length = this.tiles.length; rowIndex < length; rowIndex++){
                    // We are moving things from right to left, so we process from left to Right.
                    // This way we can merge easier, without needing to "look ahead"
                    tileRow = this.tiles[rowIndex];
                    for(let [colIndex, tile] of tileRow.entries()){
                        // If the tile is empty, or we're at the left edge, skip.
                        if(tile == 0 || colIndex == 0){
                            continue;
                        }

                        if(tileRow[colIndex-1] == 0){
                            // The space is empty, let's move there.
                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.column--;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});
                            tileRow[colIndex-1] = tile;
                            tileRow[colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }

                        if(tileRow[colIndex-1] == tile){
                            this.tileObjs.map(function(value) {
                                if(value.row != this.row || value.value == 0) {
                                    // If it's not the right row, we can ignore it.
                                    return value;
                                }
                                if(value.column == this.column){
                                    // This is the one we are colliding into
                                    value.value = 0;
                                }
                                if(value.column == (this.column+1)){
                                    // This is the one we are moving
                                    value.column--;
                                    value.value= value.value+value.value;
                                }
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex)} );

                            // Merge opportunity!
                            tileRow[colIndex-1] = tile + tile;
                            tileRow[colIndex] = 0;
                            // this.$set(this.tiles, rowIndex, tileRow);
                            moved = true;
                            everMoved = true;
                            continue;
                        }
                    }
                    this.$set(this.tiles, rowIndex, tileRow);
                }
            }while(moved == true);
            if(everMoved){
                this.generateRandomTile();
            }
        },
        moveRight: function(){
            console.log("Right Arrow Pressed");
            var moved, everMoved = false;
            var tileRow;

            do{
                moved = false;
                for(var rowIndex = 0, length = this.tiles.length; rowIndex < length; rowIndex++){
                    // We are moving things from right to left, so we process from left to Right.
                    // This way we can merge easier, without needing to "look ahead"
                    tileRow = this.tiles[rowIndex];
                    for(var colIndex = tileRow.length; colIndex >= 0; colIndex--){
                        // If the tile is empty, or we're at the left edge, skip.
                        let tile = tileRow[colIndex];
                        if(tile == 0 || colIndex == tileRow.length){
                            continue;
                        }

                        if(tileRow[colIndex+1] == 0){
                            // The space is empty, let's move there.

                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.column++;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});

                            tileRow[colIndex+1] = tile;
                            tileRow[colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }

                        if(tileRow[colIndex-1] == tile){
                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.column++;
                                value.value= value.value+value.value;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});

                            // Merge opportunity!
                            tileRow[colIndex-1] = tile + tile;
                            tileRow[colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }
                    }
                    this.$set(this.tiles, rowIndex, tileRow);
                }
            }while(moved == true);
            if(everMoved){
                this.generateRandomTile();
            }
        },
        moveUp: function(){
            console.log("Up Arrow Pressed");
            var moved, everMoved = false;
            var tileRow;
            var tiles = this.tiles;
            console.log(tiles);
            do{
                moved = false;
                // We're going top to bottom, so we want to move the things closest
                // to the bottom first. That means begin looking at the bottom, and
                // inch our way back up.
                for(let rowIndex = 1; rowIndex < 4; rowIndex++){
                    // Now we have a row to work with, so let's iterate over the columns.
                    // The order of these doesn't matter much.
                    for(let colIndex = 0; colIndex < 4; colIndex++){

                        let tile = tiles[rowIndex][colIndex];

                        // We can't move the third row, so we skip it
                        // We could do this by starting the loop lower.
                        if( tile == 0 || rowIndex == 0 ){
                            continue;
                        }

                        // Check for an empty space directly below the tile
                        if( tiles[rowIndex - 1][colIndex] === 0) {

                            // DO THE ANIMATION
                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.row--;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});

                            tiles[rowIndex - 1][colIndex] = tile;
                            tiles[rowIndex][colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }

                        // Check for merge
                        if( tiles[rowIndex - 1][colIndex] == tile) {
                            // DO THE ANIMATION
                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.row--;
                                value.value = value.value+value.value;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});
                            tiles[rowIndex - 1][colIndex] = tile + tile;
                            tiles[rowIndex][colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }

                    }
                }
            }while(moved == true);
            this.$set(this.tiles, 0, tiles[0]);
            this.$set(this.tiles, 1, tiles[1]);
            this.$set(this.tiles, 2, tiles[2]);
            this.$set(this.tiles, 3, tiles[3]);
            if(everMoved){
                this.generateRandomTile();
            }
        },
        moveDown: function(){
            console.log("Down Arrow Pressed");
            var moved, everMoved = false;
            var tileRow;
            var tiles = this.tiles;
            console.log(tiles);
            do{
                moved = false;
                // We're going top to bottom, so we want to move the things closest
                // to the bottom first. That means begin looking at the bottom, and
                // inch our way back up.
                for(let rowIndex = 3; rowIndex >= 0; rowIndex--){
                    // Now we have a row to work with, so let's iterate over the columns.
                    // The order of these doesn't matter much.
                    for(let colIndex = 0; colIndex < 4; colIndex++){

                        let tile = tiles[rowIndex][colIndex];

                        // We can't move the third row, so we skip it
                        // We could do this by starting the loop lower.
                        if( tile == 0 || rowIndex == 3 ){
                            continue;
                        }

                        // Check for an empty space directly below the tile
                        if( tiles[rowIndex + 1][colIndex] == 0) {
                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.row++;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});
                            tiles[rowIndex + 1][colIndex] = tile;
                            tiles[rowIndex][colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }

                        // Check for merge
                        if( tiles[rowIndex + 1][colIndex] == tile) {
                            this.tileObjs.map(function(value) {
                                if( this.row != value.row || this.column != value.column ){
                                    // Not the tile we want
                                    return value;
                                }
                                value.row++;
                                value.value = value.value+value.value;
                                return value;
                            }, {row: (rowIndex + 1), column: (colIndex+1)});
                            tiles[rowIndex + 1][colIndex] = tile + tile;
                            tiles[rowIndex][colIndex] = 0;
                            moved = true;
                            everMoved = true;
                            continue;
                        }

                    }
                }
            }while(moved == true);
            this.$set(this.tiles, 0, tiles[0]);
            this.$set(this.tiles, 1, tiles[1]);
            this.$set(this.tiles, 2, tiles[2]);
            this.$set(this.tiles, 3, tiles[3]);
            if(everMoved){
                this.generateRandomTile();
            }
        },
        generateRandomTile: function(){
            var empties = [];
            var row, column;
            for(row=0;row<4;row++){
                for(column=0;column<4;column++){
                    if( this.tiles[row][column] == 0 ){
                        empties.push({row:row,column:column});
                    }
                }
            }

            if(empties.length == 0){
                // END OF THE GAME
                return;
            }
            var randomItem = empties[Math.floor(Math.random()*empties.length)];
            var value = Math.random() < 0.9 ? 2 : 4;
            this.$set(this.tiles[randomItem.row], randomItem.column, value);
            this.$set(this.tileObjs, this.tileObjs.length, {value: value, column:(randomItem.column+1), row:(randomItem.row+1)});
        }
    }
}
</script>
