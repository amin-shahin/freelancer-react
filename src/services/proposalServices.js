import http from "./httpService";

export function getAllProposalApi() {
  return http.get(`/proposal/list`).then(({ data }) => data.data);
}

export function getProposalByID(id) {
  return http.get(`/proposal/${id}`).then(({ data }) => data.data);
}

export function changeStatusProposalApi({ proposalId, ...data }) {
  return http.patch(`/proposal/${proposalId}`, data).then(({ data }) => data.data);
}

export async function createProposalApi(data) {
  const { data: data_1 } = await http.post(`/proposal/add`, data);
  return data_1.data;
}
