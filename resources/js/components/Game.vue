<template>
    <div class="font-2048 antialiased text-gray-700"><!-- Container -->
        <div class="flex items-center justify-between">
            <!-- Header -->
            <h1 class="text-7xl font-bold">2048</h1>
            <div class="flex">
                <score-holder scoreName="Score">{{ currentScore }}</score-holder> <!-- Score Container -->
                <score-holder scoreName="Best">{{ bestScore }}</score-holder> <!-- Best Container -->
            </div>
        </div>
        <div class="flex items-center align-middle justify-between">
            <div class="text-lg">Join the numbers and get to the <span class="font-semibold">2048 tile!</span></div>
            <new-game>New Game</new-game>
        </div>
        <GameBoard />
    </div>
</template>

<script>
    import ScoreHolder from './ScoreHolder.vue';
    import NewGame from './NewGame.vue';
    import GameBoard from './GameBoard.vue';
    export default {
        components: {
            'score-holder': ScoreHolder,
            'new-game': NewGame,
            'GameBoard': GameBoard,
        },
        data() {
            return {
                currentScore: 1796,
                bestScore: 16396
            }
        }
    }
</script>
