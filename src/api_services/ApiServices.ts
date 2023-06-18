import ApiUrl from "@/data/apiUrl";
import axios from "axios";

class ApiServices {
  async searchSummonerByName(encodedName: string) {
    try {
      return await axios.get(
        `${ApiUrl.summonerByNameUrl}${encodedName}?api_key=${process.env.RIOT_KEY}`
      );
    } catch (error) {
      console.log(
        `${ApiUrl.summonerByNameUrl}${encodedName}?api_key=${process.env.RIOT_KEY}`
      );
      console.log("===============================", error);
      throw new Error("Can't search summoner");
    }
  }
  async getTopPlayer() {
    try {
      return await axios.get(
        `${ApiUrl.topPlayerUrl}&api_key=${process.env.RIOT_KEY}`
      );
    } catch (error) {
      throw new Error("Get top players");
    }
  }
  async getPlayerBySummonerId(summonerId: string) {
    try {
      return await axios.get(
        `${ApiUrl.summonerBySummonerId}/${summonerId}?api_key=${process.env.RIOT_KEY}`
      );
    } catch (error) {
      throw new Error("Get player by summoner id");
    }
  }
  async getFreeChamps() {
    try {
      return await axios.get(`${ApiUrl.freeChampsUrl}`);
    } catch (error) {
      throw new Error("");
    }
  }
}

export default new ApiServices();
