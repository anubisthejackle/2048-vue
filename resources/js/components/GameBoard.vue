<template>
    <div class="mt-10 rounded-lg flex flex-wrap" style="background:#bbada0; height: 500px; width: 500px;">
        <div v-for="x in 4" class="w-full flex flex-row">
            <div v-for="i in 4" class="m-3 p-4 overflow-hidden rounded w-1/5 min-w-0" style="background:rgba(238, 228, 218, 0.35);">&nbsp;</div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [''],
    }
</script>
