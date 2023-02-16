import { axiosConfig } from "@/configs";

const cmsApi = {
  register(payload: any) {
    const url = "/users/register";
    return axiosClient.post(url, payload);
  },
  login(payload: LoginPayload) {
    const url = "/users/login";
    return axiosClient.post(url, payload);
  },
};

export default authApi;
