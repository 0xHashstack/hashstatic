import axios from "axios";

export default class OffchainAPI {
  // static ENDPOINT = "https://offchainapi.mainnet.starknet.hashstack.finance";
  // static ENDPOINT = "http://18.143.34.55:3010";
  static ENDPOINT =
    "https://metricsapimainnet.hashstack.finance";
  static WHITELIST_ENDPOINT = this.ENDPOINT;

  static async httpGet(route: string) {
    try {
      let url = `${OffchainAPI.ENDPOINT}${route}`;
      // console.log("offchain url", url);
      let data = await axios.get(url);
      return data.data;
    } catch (err) {
      console.error("httpGet", route, err);
      return [];
    }
  }

  static async httpPost(route: string, data: any, type: string, token: string) {
    try {
      if (!token) {
        console.warn("no incoming token", route, data, type, token);
      }
      let url = `${this.ENDPOINT}${route}`;
      let res = await axios({
        method: "post",
        url,
        headers: {
          "Content-Type": "application/json",
        },
        data,
      });
      return res.data;
    } catch (err) {
      // console.log(err);
    }
  }
}