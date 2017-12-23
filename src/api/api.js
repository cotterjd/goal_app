import store from "../store";
import { eventBus } from "../components/events/bus";
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


export {

};
