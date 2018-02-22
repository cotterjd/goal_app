import store from "../store";
import { eventBus } from "../components/events/bus";
import { graphqlCheckForError, graphqlError, getClient } from "./graphQlClient";
import { query, mutation } from "./graphQLhelpers";
import _ from "lodash";
import baseUrl from "./baseUrl";
require("whatwg-fetch");
const R = require("ramda");

function processStatus(response) {
  if (response.status === 200 || response.status === 0) {
    return Promise.resolve(response);
  }
  console.log(`${response.status} : ${response.statusText}`);
  return Promise.reject(`${response.status} : ${response.statusText}`);
}
function getJson(response) {
  return response.json();
}

function createGoal(input) {
  return getClient()
    .request(
      mutation({
        queries: [
          {
            action: "createGoal",
            input: input,
            output: "{success payload error}"
          }
        ]
      })
    )
    .then(graphqlCheckForError("createGoal"))
    .catch(graphqlError);
}
function getGoals(input) {
  return getClient()
    .request(
      query({
        queries: [
          {
            action: "goals",
            input: null,
            output: "{goal, dueDate, term, done}"
          }
        ]
      })
    )
    .then(r => {
      return r.goals
    });
}

export {
  createGoal
, getGoals
};
