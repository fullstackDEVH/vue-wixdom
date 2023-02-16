import { axiosConfig } from "@/configs";

const cmsApi = {
  register(payload: any) {
    const url = "/users/register";
    return axiosConfig.post(url, payload);
  },
};

export default cmsApi;
