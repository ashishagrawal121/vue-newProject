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
    <div class="relative overflow-item">
        <div data-v-4877b369="" id="9267d7b9-a689-4e59-91b6-a8ff02edf61a" class="page-item"
            style="scroll-margin-top: 1rem;">
            <div data-v-4877b369="">
                <div data-v-5a554312="" data-v-4877b369="" class="block-container" :class="{ 'pulse-loop': pulseLoop }" >
                    <div data-v-5a554312=""
                        class="block-content themed--hoverable themed--bordered themed--rounded themed--min-height">
                        <a data-v-5a554312="" :href="url"
                            rel="noopener" target="_blank" class="flex justify-between items-center w-full">
                            <div data-v-5a554312="" class="w-10 h-10 absolute" style="left: 0.75rem;">
                                <div data-v-1baa7ccb="" data-v-5a554312=""
                                    class="w-full h-full left-thumbnail overflow-hidden"><span
                                        data-v-1baa7ccb="" class="w-full h-full flex items-center ml-1">
                                        <font-awesome-icon :icon="icon" />
                                        
                                    </span></div>
                            </div>
                            <div data-v-5a554312=""
                                class="flex flex-col items-center w-full block-content--padded">
                                <h4 data-v-5a554312="" class="block-heading font-medium">{{ name }}</h4>
                                <p data-v-5a554312="" class="block-body text-center"></p>
                            </div>
                            <div data-v-5a554312="" class="absolute right-4">
                                <!---->
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <!---->
    </div>
</template>