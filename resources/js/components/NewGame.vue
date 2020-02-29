<template>
    <span class="text-center align-middle rounded ml-3 pl-3 pr-3 pt-2 pb-2 h-auto" style="background:#8f7a66;">
        <div class="font-semibold text-white text-lg"><slot></slot></div>
    </span>
</template>

<script>
    export default {
        props: ['scoreName'],
    }
</script>
