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
    saveGoal(goal) {
      createGoal(goal)
    },
    saveOneWeekGoal() {
        const dueDate = moment().add(1, 'week').format("MM/DD/YYYY")
        this.oneWeek.dueDate = dueDate
        this.oneWeek.term = '1 week'
        this.saveGoal(this.oneWeek)
    }
  , saveTwoWeekGoal() {
        const dueDate = moment().add(2, 'week').format("MM/DD/YYYY")
        this.twoWeek.dueDate = dueDate
        this.twoWeek.term = '2 week'
        this.saveGoal(this.twoWeek)
    }
  , saveOneMonthGoal() {
        const dueDate = moment().add(1, 'month').format("MM/DD/YYYY")
        this.oneMonth.dueDate = dueDate
        this.oneMonth.term = '1 month'
        this.saveGoal(this.oneMonth)
    }
  , saveSixMonthGoal() {
        const dueDate = moment().add(6, 'month').format("MM/DD/YYYY")
        this.sixMonth.dueDate = dueDate
        this.sixMonth.term = '6 month'
        this.saveGoal(this.sixMonth)
    }
  , saveOneYearGoal() {
        const dueDate = moment().add(1, 'year').format("MM/DD/YYYY")
        this.oneYear.dueDate = dueDate
        this.oneYear.term = '1 year'
        this.saveGoal(this.oneYear)
    }
  , saveTwoYearGoal() {
        const dueDate = moment().add(2,'year').format("MM/DD/YYYY")
        this.twoYear.dueDate = dueDate
        this.twoYear.term = '2 year'
        this.saveGoal(this.twoYear)
    }
  },
  mounted() {
  }
};
</script>
