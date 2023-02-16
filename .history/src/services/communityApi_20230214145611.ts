import { axiosConfig } from "@/configs";

const communityApi = {
  test(payload: any) {
    const url = "/test";
    return axiosConfig.post(url, payload);
  },
};

export default communityApi;
