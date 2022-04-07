// your-app-name/src/fetchGraphQL.js
import $api from "./services/http/http";
import {API_URL} from "./utils/common";
import {Variables} from "graphql-request";

async function fetchGraphQL(text:string | null | undefined, variables:Variables) {
    // Fetch data from GitHub's GraphQL API:
    const response = await $api.post(API_URL, {
        query: text,
        variables: variables,
    });

    // Get the response as JSON
    return response.data;
}

export default fetchGraphQL;

