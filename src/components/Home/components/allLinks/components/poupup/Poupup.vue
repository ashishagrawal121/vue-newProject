<script setup lang="ts">
    import { onBeforeMount, ref, watch } from 'vue';
    const props = defineProps<{
        name: string;
        url: string;
        icon: string;
        pulseLoop: boolean;
    }>();
    
</script>
<template>
    <vue-final-modal v-model="showModal">
      Modal Content Here
    </vue-final-modal>
    <button @click="showModal = true">Open Modal</button>
</template>