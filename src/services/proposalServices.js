import http from "./httpService";

export function getAllProposalApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function getProposalByID(id) {
  return http.get(`/proposal/${id}`).then(({ data }) => data.data);
}

export function changeStatusProposalApi({ id, data }) {
  return http.patch(`/proposal/${id}`, data).then(({ data }) => data.data);
}
