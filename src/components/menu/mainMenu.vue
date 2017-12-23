<template>
  <md-sidenav class="md-left md-fixed main-sidebar mdl-center" ref="leftSidenav">
    <md-toolbar>
      <div class="md-toolbar-container">
        <h3 class="md-title">foobar</h3>
      </div>
    </md-toolbar>
    <md-list>
      <md-button class="md-raised" @click="goto('/dashboard')">
        <md-list-item>My foobar</md-list-item>
      </md-button>
    </md-list>
  </md-sidenav>
</template>
<script>
import { getCurrentUser } from "../../api/api";
import { eventBus } from "../../components/events/bus";

export default {
  name: "main-sidenav",
  props: {},
  data: () => ({ user: {} }),
  computed: {},
  methods: {
    toggle() {
      this.$refs.leftSidenav.toggle();
    },
    openCreditCards() {
      eventBus.$emit("addCreditCard");
    },
    goto(r) {
      this.$router.push(r);
      this.$refs.leftSidenav.close();
    }
  },

  mounted() {
    eventBus.$on("userUpdated", u => {
      this.user = u || {};
    });
  }
};
</script>
