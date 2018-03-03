<template>
  <div>
    <md-dialog-alert class="md-warn" md-title="Server Error" :md-content-html="alert.content" :md-ok-text="alert.ok" ref="errorDialog" />
    <md-dialog-alert class="md-warn" :md-title="alert.title" :md-content-html="alert.content" :md-ok-text="alert.ok" ref="notificationDialog" />


    <BlockUI id="block-ui" message="Communicating with Server" url="/images/ajax-loading.gif" v-if="blockUI"></BlockUI>

    <main-sidenav ref="leftSidenav"></main-sidenav>


    <div class="phone-viewport">
      <md-toolbar>
        <div class="md-toolbar-container">
          <md-button class="" @click="$router.push('/')">
            My Goals
          </md-button>
          <md-button class="" @click="$router.push('/add')">
            Add Goal
          </md-button>

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
