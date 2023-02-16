import { axiosConfig } from "@/configs";

const cmsApi = {
  test(payload: any) {
    const url = "/test";
    return axiosConfig.post(url, payload);
  },
};

export default cmsApi;
