
<script setup lang="ts">
const emits = defineEmits(["close"]);
</script>
<template>
    <div class="modal-outer-container">
        <div class="modal">
            <div class="h-full w-full fixed top-0 left-0 z-20" @click="$emit('close')"></div>
            <div class="bg-white rounded-lg text-lg shadow-lg w-96 fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-30">
                <ul class="cursor-pointer">
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100">
                        <a href="https://www.facebook.com/sharer/sharer.php" class="flex" target="blank" >
                            <div class="w-full flex items-center">
                                <font-awesome-icon icon="fa-brands fa-facebook" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: #3079ea;" />
                                <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">Share on facebook</span>
                            </div>
                            <font-awesome-icon icon="fa-arrow-up-right-from-square" />
                        </a>
                        
                    </li>
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100 ">
                        <a href="https://www.linkedin.com/sharing/share-offsite/" class="flex" target="blank" >
                            <div class="w-full flex items-center">
                                <font-awesome-icon icon="fa-brands fa-linkedin" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: #2667bc;"/>
                                <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">Share on LinkedIn</span>
                            </div>
                            <font-awesome-icon icon="fa-arrow-up-right-from-square" />
                        </a>
                    </li>
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100 ">
                        <a href="https://twitter.com/share" class="flex" target="blank" >
                        <div class="w-full flex items-center">
                            <font-awesome-icon icon="fa-brands fa-twitter" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: #47a1eb;"/>
                            <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">Share on Twitter</span>
                        </div>
                        <font-awesome-icon icon="fa-arrow-up-right-from-square" />
                    </a>
                    </li>
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100 ">
                        <a href="https://api.whatsapp.com/send" class="flex" target="blank" >
                            <div class="w-full flex items-center">
                                <font-awesome-icon icon="fa-brands fa-whatsapp" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: #2cb248;"/>
                                <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">Share via WhatsApp</span>
                            </div>
                            <font-awesome-icon icon="fa-arrow-up-right-from-square" />
                        </a>
                    </li>
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100 ">
                        <a href="https://www.facebook.com/sharer/sharer.php" class="flex" target="blank" >
                            <div class="w-full flex items-center">
                                <font-awesome-icon icon="fa-brands fa-facebook-messenger" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: #3079ea;"/>
                                <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">Share on Messenger</span> 
                                
                            </div>
                            <font-awesome-icon icon="fa-arrow-up-right-from-square" />
                        </a>
                    </li>
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100 ">
                        <a href="mailto:name@gmail.com" class="flex" target="blank" >
                            <div class="w-full flex items-center">
                                <font-awesome-icon icon="fa-fw inline fa-envelope" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: rgba(55,65,81,var(--tw-text-opacity));"/>
                                <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">Share on Email</span>
                            </div>
                            <font-awesome-icon icon="fa-arrow-up-right-from-square" />
                        </a>
                    </li>
                    <li class="border-b border-gray-100 w-full px-6 py-3 hover:bg-gray-100 flex">
                        <div class="w-full flex items-center">
                            <font-awesome-icon icon="fa-copy" class="flex items-center w-6 h-6 text-lg fa-regular fa-copy text-brand-purple-500 flex items-center" style="color: rgba(70,36,214,var(--tw-bg-opacity));"/>
                            <span class="option-text page-link ml-3 text-brand-gray-700 brand-body-md-medium">pillar.io/ninja</span>
                        </div>
                        <span class="fake-button rounded-md px-4 py-2 text-white brand-body-md-medium absolute right-4 transition-colors duration-300" style="background-color: rgba(70,36,214,var(--tw-bg-opacity));">
                            <div>Copy</div>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .modal-outer-container{
        display: flex;
    /* flex-direction: row; */
        height: 100%;
        width: 100%;
        position: absolute;
        align-items: center;
        justify-content: center;
    }
    .modal {
        width: 50%;
        height: 60%;
        box-shadow: 2px 2px 20px 1px;
        overflow-x: auto;
        display: flex;
        flex-direction: column;
    }
    .bounce-enter-active {
        animation: bounce-in .5s ease-out both;
    }
    
    .bounce-leave-active {
        animation: bounce-in .5s reverse ease-in both;
    }
    
    @keyframes bounce-in {
        0% {
            transform: scale(0);
        }
        50% {
            transform: scale(1.10);
        }
        100% {
            transform: scale(1);
        }
    }
    </style>
    