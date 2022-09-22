<script setup lang="ts">
import Model from '@/components/model/Model.vue'
import { ref } from 'vue';

const showModal = ref<boolean>(false);
function closeModal(){
    showModal.value = false;
}
</script>
<template>
    <transition v-if="showModal" name="bounce" mode="out-in">
        <Model @close="closeModal"></Model>                
    </transition> 
    <!-- twitch-player -->
    
    <div  class="fan-header-wrapper fixed left-0 right-0 top-0 w-full z-20 _style-behavior-default"
        style="max-width: 640px;">
        
        <div  class="flex justify-end">
            
            <div data-v-4d15c22c="" >
                <button @click="showModal = !showModal" data-v-4d15c22c=""
                    class="share-button rounded-full override-default h-10 w-10 bg-white text-brand-gray-600 transition-shadow transition-colors duration-300 hover:shadow-lg hover:text-brand-gray-900">
                    <font-awesome-icon icon="fa-arrow-up-from-bracket" />
                </button>
                
                <!---->
            </div>
        </div>
    </div>
    <div class="relative page-header flex flex-col justify-center mb-6">
        <!---->
        <div class="relative z-10 flex flex-col items-center">
            <div class="page-header__avatar overflow-hidden rounded-full"><img alt="Ninja Profile Image | Pillar"
                    src="./Ninja_Pillar_files/1a8afd21-5e4c-41e3-a84e-390a2f4fba69"
                    onerror="this.onerror = null; this.src=&#39;https://res.cloudinary.com/pillario/image/upload/random/avatar-default-1&#39;"
                    class="object-cover w-full h-full"></div>
            <h1 class="page-header__name mt-4 verified"> Ninja </h1>
            <p class="page-header__tagline mt-1"> I love video games 👾 </p>
            <!---->
        </div>
        <!---->
    </div>
</template>