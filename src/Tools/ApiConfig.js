/**
 * this file export default configuation for api call]
 * and headers set
 */
import axios from "axios";

const baseUrl = "https://jumpcut-test-backend.herokuapp.com/";
const mailUrl =
  "https://jumpcut-fs-test-email-service.herokuapp.com/api/1.0/send";

export const ApiCall = axios.create({
  baseURL: baseUrl,
  headers: {
    key_auth:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzZWNyZXQiOiJhcGlfY2FsbCJ9.kbFBlWtg4UBlwA9IOhazIMqxiGPziu0XXbFjS5oc4PA"
  }
});

export const ApiMailCall = axios.create({
  baseURL: mailUrl,
  headers: {
    Authorization: "Bearer U3Vic2NyaWJlIFRvIFBld0RpZVBpZQ==",
    "Content-Type": "application/json"
  }
});
