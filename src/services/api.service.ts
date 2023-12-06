import wretch, { WretchError } from "wretch";

const baseUrl = "https://jsonplaceholder.typicode.com";

export const sendGetRequest = async (requestPath: string) =>
  wretch(baseUrl)
    .get(requestPath)
    .badRequest((err) => console.log(err.status))
    .unauthorized((err) => console.log(err.status))
    .forbidden((err) => console.log(err.status))
    .notFound((err) => handleNotFound(err))
    .timeout((err) => console.log(err.status))
    .internalError((err) => console.log(err.status))
    .error(418, (err) => console.log(err.status))
    .fetchError((err) => console.log(err))
    .res((response) => response.json());

export const sendPostRequest = async (requestPath: string, payload: unknown) =>
  wretch(baseUrl)
    .url(requestPath)
    .post(payload)
    .badRequest((err) => console.log(err.status))
    .unauthorized((err) => console.log(err.status))
    .forbidden((err) => console.log(err.status))
    .notFound((err) => handleNotFound(err))
    .timeout((err) => console.log(err.status))
    .internalError((err) => console.log(err.status))
    .error(422, (err) => console.log(err.status))
    .fetchError((err) => console.log(err))
    .res((response) => response.json());

const handleNotFound = (error: WretchError) => {
  alert("same way to handle this kind of error for each type of requests");
};
