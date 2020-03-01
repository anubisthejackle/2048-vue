<template>
    <div class="text-center align-middle rounded pl-5 pr-5 pt-2 pb-2 h-auto" style="background:#8f7a66;">
        <span class="font-semibold text-white text-lg"><slot></slot></span>
    </div>
</template>

<script>
    export default {
        props: ['scoreName'],
    }
</script>
