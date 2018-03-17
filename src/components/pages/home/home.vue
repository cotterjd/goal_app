<template>
    <div style="">

    <h2>Goals</h2>
    <div class="mdl-grid" v-for="(g, i) in goals">
        <div class="mdl-cell--1-col mdl-cell mdl-cell--0-col-phone" >
				</div>
        <div class="mdl-cell--1-col mdl-cell mdl-cell--0-col-phone" ><span>{{g.term}} goal</span></div>

        <div class="mdl-cell--6-col mdl-cell mdl-cell--12-col-phone">
          <span v-if="g.done"><strike>{{g.goal}}</strike></span>
          <span v-if="!g.done">{{g.goal}}</span>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
          <span><font :color="getColor(g)">{{g.dueDate}}</font></span>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
					<button v-if="!g.done" @click="finishGoal(g, i)">Done</button>
        </div>
    </div>
  </div>
</template>

<script>
import { setCookie, getCookie } from "../../../helpers/cookie";
import { getGoals, finishGoal } from "../../../api/api"

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
		getColor(goal) {
			return goal.done ? "black" : (moment(goal.dueDate).toDate() < moment().toDate() ? "red" : "black")
	 	},
		finishGoal(g, i) {
			g.done = true
			this.goals.splice(i, 1)
			this.goals = this.goals.concat(g)
      finishGoal(g).then(r => {
        console.log(r)
      })
		}
  },
  mounted() {
    getGoals().then(goals => {
      this.goals = R.pipe(
				function getDone(gs) {
					const doneGoals = gs.filter(g => g.done)
					return R.pipe(
      		  R.filter(g => !g.done)
      		, R.sortBy(R.prop("dueDate") )
      		, R.map(g => R.assoc("dueDate", moment(g.dueDate, "YYYY-MM-DD").format('MMM DD, YYYY'), g) )
					, R.concat(R.__, doneGoals)
					)(gs)
				}
      )(goals)
    })
  }
};
</script>
