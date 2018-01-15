import { GraphQLClient } from "graphql-request";
import { getCookie, createCookie } from "../helpers/cookie";
import { query, mutation } from "./graphQLhelpers";
import store from "../store";
import { eventBus } from "../components/events/bus";
import _ from "lodash";
import baseUrl from "./baseUrl";

function getErrorsOffGraphQlResp(res) {
  return res.response
    ? _.reduce(
        res.response.errors,
        (sum, e) => {
          return (
            sum +
            `${e.message} ${e.message == "Validation error"
              ? " (Most likely the object you are trying to save already exists)"
              : ""}<br/>`
          );
        },
        ""
      )
    : "Server error. Please try again shortly.";
}
function getClient() {
  return new GraphQLClient(`${baseUrl}/api/graphql`, {
    headers: {
      foobartoken: getCookie("foobartoken")
    }
  });
}

function graphqlError(error) {
  eventBus.$emit("apiError", getErrorsOffGraphQlResp(error));
  throw new Error(error);
}

function graphqlCheckForError(action) {
  return r => {
    console.log(r);
    if (r[action]) return r[action];
    throw new Error(r);
  };
}

export { getClient, graphqlError, graphqlCheckForError };
