
<script setup lang="ts">
import UserVue from './components/user/User.vue';
import AllLinks from './components/allLinks/AllLinks.vue';


</script>

<template>
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P66XVJZ" height="0" width="0"
      style="display:none;visibility:hidden">
    </iframe>
  </noscript>

  <div data-v-5a004e8f="" id="app" class="">
    <!---->
    <div data-v-5a004e8f="" class="app-content">
      <!---->
      <!---->
      <div data-v-5a004e8f="" id="appContentMain" class="app-content-main">
        <div data-v-5a004e8f="" class="app-router-view">
          <div  id="builderPage" class="page-root px-4 md:px-0">
            <!---->
            <!---->
            <div  class="relative -z-10">
              <div  class="page-background z-10 theme-gold" style="--background-color:#fff;"
                :style="{'background-image': 'url(src/assets/background.png)'}">
              </div>
              <div  class="fixed w-full h-full left-0 top-0 z-20"></div>
            </div>
            <div 
              class="page-container standard-page-inner-container z-30 theme-gold pt-6 item-style-tabs-short socials-style-default">
              <div 
                class="fan-view-wrapper w-full flex flex-col mx-auto mb-20 _style-behavior-default"
                insightsdata="[object Object]"
                style="max-width: 640px; --page-text-color:#ffffff; --items-background-color:#ffffff; --items-hover-background-color:#ffffff; --font-family:&quot;Montserrat&quot;, sans-serif; --font-weight:400; --block-foreground-color:#161616; --block-foreground-color-light:#16161680; --block-foreground-color-lighter:#1616160d; --items-border-color:#ffffff; --items-hover-text-color:#6ed0f8; --items-hover-border-color:#6ed0f8; --cta-text-color:#dbdbdb; --expanded-border-color:#ffffff; --border-radius:1rem; --border-radius-thumbnail:0.5rem; --block-background-filter:none;">
                
                <UserVue />
                <AllLinks />
                
                <ul data-v-3ec6668f="" 
                  class="socials-row flex flex-wrap justify-center text-xl mt-4 themed--socials-style-default">
                  <li data-v-3ec6668f=""><a data-v-3ec6668f="" rel="noopener noreferrer" target="_blank"
                      href="mailto:business@teamninja.com"
                      class="cursor-pointer inline-flex justify-center items-center w-full h-full inline-block">
                      <font-awesome-icon class="social-icon" icon="fa-fw inline fa-envelope" />
                      </a></li>
                  <li data-v-3ec6668f=""><a data-v-3ec6668f="" rel="noopener noreferrer" target="_blank"
                      href="https://www.facebook.com/NinjaTB"
                      class="cursor-pointer inline-flex justify-center items-center w-full h-full inline-block">
                      <font-awesome-icon class="social-icon" icon="fa-fw inline fa-brands fa-facebook" /></a></li>
                  <li data-v-3ec6668f=""><a data-v-3ec6668f="" rel="noopener noreferrer" target="_blank"
                      href="https://www.tiktok.com/@ninja?lang=en"
                      class="cursor-pointer inline-flex justify-center items-center w-full h-full inline-block">
                      <font-awesome-icon class="social-icon" icon="fa-fw inline fa-brands fa-tiktok" /></a></li>
                      
                </ul>
                <!---->
              </div>
            </div>
          </div>
          <!---->
        </div>
        <div data-v-5a004e8f="" class="items-end justify-end hidden px-5 space-x-4 md:flex justify-end footer"
          name="footer" data-testid="chat-footer"></div>
      </div>
      <!---->
    </div>
    <div data-v-5a004e8f="" class="vue-notification-group" style="width: 300px; bottom: 0px; right: 0px;"><span></span>
    </div>
    <div data-v-5a004e8f="" class="__cov-progress"
      style="background-color: rgb(191, 250, 243); opacity: 0; position: fixed; top: 0px; left: 0px; width: 0%; height: 5px; transition: opacity 0.6s ease 0s;">
    </div>
    <div data-v-5a004e8f="" class="vue-portal-target"></div>
    <div data-v-5a004e8f="" class="vue-portal-target"></div>
    <div data-v-5a004e8f="" class="vue-portal-target"></div>
  </div>
</template>

<style scoped type="text/css">
.vue-notification-group {
  display: block;
  position: fixed;
  z-index: 5000
}



.__cov-progress {
  opacity: 1;
  z-index: 999999;
}

.smooth-dnd-container {
  position: relative;
  min-height: 30px;
  min-width: 30px;
}

.smooth-dnd-container.horizontal {
  display: table;
}

.smooth-dnd-container.horizontal>.smooth-dnd-stretcher-element {
  display: inline-block;
}

.smooth-dnd-container.horizontal>.smooth-dnd-draggable-wrapper {
  height: 100%;
  display: table-cell;
  vertical-align: top;
}

.smooth-dnd-container.vertical>.smooth-dnd-draggable-wrapper {
  overflow: hidden;
  display: block;
}



.smooth-dnd-container.horizontal>.smooth-dnd-drop-preview-constant-class {
  height: 100%;
  overflow: hidden;
  display: table-cell;
  vertical-align: top;
}

.smooth-dnd-container.vertical>.smooth-dnd-drop-preview-constant-class {
  overflow: hidden;
  display: block;
  width: 100%;
}
</style>
