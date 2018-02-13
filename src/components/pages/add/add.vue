<template>
    <div style="">

    <h2>Goals</h2>
    <div class="mdl-grid">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <md-button v-on:click="saveOneWeekGoal()" class="md-raised md-primary">Save</md-button>
        </div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
              <md-input-container>
                  <label>One Week Goal</label>
                  <md-input v-model="oneWeek.goal"></md-input>
              </md-input-container>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <span v-if="oneWeek.dueDate">{{oneWeek.dueDate}}</span>
        </div>
    </div>
    <div class="mdl-grid">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <md-button v-on:click="saveTwoWeekGoal()" class="md-raised md-primary">Save</md-button>
        </div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
              <md-input-container>
                  <label>Two Week Goal</label>
                  <md-input v-model="twoWeek.goal"></md-input>
              </md-input-container>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <span v-if="twoWeek.dueDate">{{twoWeek.dueDate}}</span>
        </div>
    </div>
    <div class="mdl-grid">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <md-button v-on:click="saveOneMonthGoal()" class="md-raised md-primary">Save</md-button>
        </div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
              <md-input-container>
                  <label>One Month Goal</label>
                  <md-input v-model="oneMonth.goal"></md-input>
              </md-input-container>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <span v-if="oneMonth.dueDate">{{oneMonth.dueDate}}</span>
        </div>
    </div>
    <div class="mdl-grid">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <md-button v-on:click="saveSixMonthGoal()" class="md-raised md-primary">Save</md-button>
        </div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
              <md-input-container>
                  <label>Six Month Goal</label>
                  <md-input v-model="sixMonth.goal"></md-input>
              </md-input-container>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <span v-if="sixMonth.dueDate">{{sixMonth.dueDate}}</span>
        </div>
    </div>
    <div class="mdl-grid">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <md-button v-on:click="saveOneYearGoal()" class="md-raised md-primary">Save</md-button>
        </div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
              <md-input-container>
                  <label>One Year Goal</label>
                  <md-input v-model="oneYear.goal"></md-input>
              </md-input-container>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <span v-if="oneYear.dueDate">{{oneYear.dueDate}}</span>
        </div>
    </div>
    <div class="mdl-grid">
        <div class="mdl-cell--2-col mdl-cell mdl-cell--0-col-phone" >&nbsp;</div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <md-button v-on:click="saveTwoYearGoal()" class="md-raised md-primary">Save</md-button>
        </div>
        <div class="mdl-cell--5-col mdl-cell mdl-cell--12-col-phone">
              <md-input-container>
                  <label>Two Year Goal</label>
                  <md-input v-model="twoYear.goal"></md-input>
              </md-input-container>
        </div>
        <div class="mdl-cell--2-col mdl-cell mdl-cell--12-col-phone">
              <span v-if="twoYear.dueDate">{{twoYear.dueDate}}</span>
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
import { createGoal } from "../../../api/api"
const moment = require("moment");

export default {
  components: {
  },
  data() {
    return {
      oneWeek: { goal: "", dueDate: null}
    , twoWeek: { goal: "", dueDate: null}
    , oneMonth: { goal: "", dueDate: null}
    , sixMonth: { goal: "", dueDate: null}
    , oneYear: { goal: "", dueDate: null}
    , twoYear: { goal: "", dueDate: null}
    };
  },
  computed: {
  },
  watch: {
  },
  methods: {
    saveOneWeekGoal() {
        const dueDate = moment().add(1, 'week').format("MM/DD/YYYY")
        this.oneWeek.dueDate = dueDate
        createGoal(this.oneWeek).then(r => {
          console.log(r)
        })
        //setCookie("oneWeekGoal", this.oneWeek.goal)
        //setCookie("oneWeekDueDate", dueDate)
    }
  , saveTwoWeekGoal() {
        const dueDate = moment().add(2, 'week').format("MM/DD/YYYY")
        this.twoWeek.dueDate = dueDate
        setCookie("twoWeekGoal", this.twoWeek.goal)
        setCookie("twoWeekDueDate", dueDate)
    }
  , saveOneMonthGoal() {
        const dueDate = moment().add(1, 'month').format("MM/DD/YYYY")
        this.oneMonth.dueDate = dueDate
        setCookie("oneMonthGoal", this.oneMonth.goal)
        setCookie("oneMonthDueDate", dueDate)
    }
  , saveSixMonthGoal() {
        const dueDate = moment().add(6, 'month').format("MM/DD/YYYY")
        this.sixMonth.dueDate = dueDate
        setCookie("sixMonthGoal", this.sixMonth.goal)
        setCookie("sixMonthDueDate", dueDate)
    }
  , saveOneYearGoal() {
        const dueDate = moment().add(1, 'year').format("MM/DD/YYYY")
        this.oneYear.dueDate = dueDate
        setCookie("oneYearGoal", this.oneYear.goal)
        setCookie("oneYearDueDate", dueDate)
    }
  , saveTwoYearGoal() {
        const dueDate = moment().add(2,'year').format("MM/DD/YYYY")
        this.twoYear.dueDate = dueDate
        setCookie("twoYearGoal", this.twoYear.goal)
        setCookie("twoYearDueDate", dueDate)
    }
  },
  mounted() {
    //this.oneWeek.goal = getCookie("oneWeekGoal");
    //this.oneWeek.dueDate = getCookie("oneWeekDueDate");
    //this.twoWeek.goal = getCookie("twoWeekGoal");
    //this.twoWeek.dueDate = getCookie("twoWeekDueDate");
    //this.oneMonth.goal = getCookie("oneMonthGoal");
    //this.oneMonth.dueDate = getCookie("oneMonthDueDate");
    //this.sixMonth.goal = getCookie("sixMonthGoal");
    //this.sixMonth.dueDate = getCookie("sixMonthDueDate");
    //this.oneYear.goal = getCookie("oneYearGoal");
    //this.oneYear.dueDate = getCookie("oneYearDueDate");
    //this.twoYear.goal = getCookie("twoYearGoal");
    //this.twoYear.dueDate = getCookie("twoYearDueDate");
  }
};
</script>
