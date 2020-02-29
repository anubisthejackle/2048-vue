<template>
    <span class="text-center rounded ml-3 pl-2 pr-2 h-16 flex-grow" style="background:#bbada0;">
        <div class="text-white uppercase text-orange-200 font-semibold">{{scoreName}}</div>
        <div class="font-bold text-white text-2xl"><slot></slot></div>
    </span>
</template>

<script>
    export default {
        props: ['scoreName'],
    }
</script>
