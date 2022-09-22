<script setup lang="ts">
import LinkCard from './components/linkCard/LinkCard.vue';

</script>
<template>
    <div>
        <div class="">
            <div class="smooth-dnd-container vertical">
                <LinkCard :pulseLoop="true" :url="`http://youtube.com/ninja?sub_confirmation=1`" :icon="`fa-brands fa-youtube`" :name="`Ninja Gaming`" />
                <LinkCard :pulseLoop="false" :url="`https://www.youtube.com/channel/UCmyweyoqldy5yPGeHigEyzA`" :icon="`fa-brands fa-youtube`" :name="`Ninja Shorts`" />
                <LinkCard :pulseLoop="false" :url="`https://www.instagram.com/ninja/`" :icon="`fa-brands fa-instagram`" :name="`Instagram`" />
                <LinkCard :pulseLoop="false" :url="`https://www.facebook.com/NinjaTB/`" :icon="`fa-brands fa-facebook`" :name="`Facebook`" />
                <LinkCard :pulseLoop="false" :url="`https://twitter.com/Ninja`" :icon="`fa-brands fa-twitter`" :name="`Twitter`" />
                <LinkCard :pulseLoop="false" :url="`https://twitter.com/Ninja`" :icon="`fa-brands fa-twitch`" :name="`Twitch`" />
                <LinkCard :pulseLoop="false" :url="`https://www.tiktok.com/@ninja`" :icon="`fa-brands fa-tiktok`" :name="`TikTok`" />
                <LinkCard :pulseLoop="false" :url="`https://teamninja.com/`" :icon="`fa-solid fa-cart-shopping`" :name="`Merch`" />
                <LinkCard :pulseLoop="false" :url="`https://my.community.com/ninja`" :icon="`fa fa-mobile`" :name="`Text Me!`" />
                
                
                
            </div>
        </div>
    </div>
</template>