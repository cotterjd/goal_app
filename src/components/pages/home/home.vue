<template>
    <div style="">

    <h2>Goals</h2>
    <div class="mdl-grid" v-for="(g, i) in goals">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
          <span>{{g.goal}} ({{g.term}} goal)</span>
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
import { getGoals } from "../../../api/api"

const
  moment = require("moment")
, R = require('ramda')
, log = console.log
, logP = x => {
    log(x)
    return x
  }
;

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
    getGoals().then(goals => {
      this.goals = R.pipe(
        R.filter(g => !g.done)
      , R.map(g => R.assoc("dueDate", moment(g.dueDate).format('MMM DD, YYYY'), g) )
      , R.sortBy(R.prop("dueDate") )
      )(goals)
    })
  }
};
</script>
