import http from "./httpService";

export function getAllOwnerProjects() {
  return http.get("/project/owner-projects").then(({ data }) => data.data);
}


export function deleteProjectApi(id) {
  return http.delete(`/project/${id}`).then(({ data }) => data.data);
}
