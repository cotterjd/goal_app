<template>
  <div>
    <md-dialog-alert class="md-warn" md-title="Server Error" :md-content-html="alert.content" :md-ok-text="alert.ok" ref="errorDialog" />
    <md-dialog-alert class="md-warn" :md-title="alert.title" :md-content-html="alert.content" :md-ok-text="alert.ok" ref="notificationDialog" />


    <BlockUI id="block-ui" message="Communicating with Server" url="/images/ajax-loading.gif" v-if="blockUI"></BlockUI>

    <main-sidenav ref="leftSidenav"></main-sidenav>


    <div class="phone-viewport">
      <md-toolbar>
        <div class="md-toolbar-container">
          <md-button class="md-icon-button" @click="toggleLeftSidenav">
            <md-icon>menu</md-icon>
          </md-button>
          <span class="md-title large">
            <router-link to="/">
              <img src="/images/headerLogo.png" style="height:70px;" />
            </router-link>
          </span>

        </div>
      </md-toolbar>
      <router-view></router-view>
    </div>
  </div>
</template>

<style src="./cropper.css" />

<style lang="scss" src="./header.scss" />

<script>
import vm from "./header.js";
export default vm;
</script>
