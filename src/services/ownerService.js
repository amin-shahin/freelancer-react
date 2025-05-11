import http from "./httpService";

export function getAllOwnerProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}
