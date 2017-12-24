<template>
    <div style="">

    <h2>Goals</h2>
    <div class="mdl-grid" v-for="(g, i) in goals">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
          <span>{{g.goal}}</span>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
          <span>{{g.dueDate}}</span>
        </div>
    </div>
  </div>
</template>
<style>
.cover {
  background-image: url("/images/grads.jpg");
  width: 100%;
  height: 480px;
  padding: 0;
}
.bg-white {
  background-color: #fefefe;
}
</style>

<script>
import { setCookie, getCookie } from "../../../helpers/cookie";
const moment = require("moment");
const R = require('ramda');

export default {
  components: {
  },
  data() {
    return {
      goals: []
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
  },
  mounted() {
    const oneWeekGoal = getCookie("oneWeekGoal");
    if (oneWeekGoal) this.goals.push({goal: oneWeekGoal, dueDate: getCookie("oneWeekDueDate")})
    const twoWeekGoal = getCookie("twoWeekGoal");
    if (twoWeekGoal) this.goals.push({goal: twoWeekGoal, dueDate: getCookie("twoWeekDueDate")})
    const oneMonthGoal = getCookie("oneMonthGoal");
    if (oneMonthGoal) this.goals.push({goal: oneMonthGoal, dueDate: getCookie("oneMonthDueDate")})
    const sixMonthGoal = getCookie("sixMonthGoal");
    if (sixMonthGoal) this.goals.push({goal: sixMonthGoal, dueDate: getCookie("sixMonthDueDate")})
    const oneYearGoal = getCookie("oneYearGoal");
    if (oneYearGoal) this.goals.push({goal: oneYearGoal, dueDate: getCookie("oneYearDueDate")})
    const twoYearGoal = getCookie("twoYearGoal");
    if (twoYearGoal) this.goals.push({goal: twoYearGoal, dueDate: getCookie("twoYearDueDate")})

    R.sortBy(R.prop("dueDate"), this.goals);
  }
};
</script>
