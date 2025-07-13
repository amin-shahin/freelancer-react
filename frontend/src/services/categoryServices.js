import { data } from "react-router";
import http from "./httpService";

export function getAllCategoryApi() {
  return http.get("/category/list").then(({ data }) => data.data);
}
