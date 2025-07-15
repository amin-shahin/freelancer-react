import http from "./httpService";

export function getOtp(data) {
  return http.post("/user/get-otp", data).then(({ data }) => data.data);
}

export const checkOtp = async (data) => {
  const { data: data_1 } = await http.post("/user/check-otp", data);
  return data_1.data;
};

export const completeProfile = async (information) => {
  const { data } = await http.post("/user/complete-profile", information);
  return data.data;
};

export const userInformation = async () => {
  const { data } = await http.get("/user/profile");
  return data.data;
};

export const getAllUsers = async () => {
  const { data } = await http.get("/admin/user/list");
  return data.data;
};

export function changeUserStatusApi({ userId, userStatus }) {
  return http
    .patch(`/admin/user/verify/${userId}`, {status})
    .then(({ data }) => data.data);
}

export const logoutApi = async () => {
  const { data } = await http.post("/user/logout");
  return data.data;
};
