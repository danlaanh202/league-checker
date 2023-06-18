class ApiUrl {
  static accountsUrl: string =
    "https://asia.api.riotgames.com/riot/account/v1/accounts";
  static myAccountUrl: string =
    "https://asia.api.riotgames.com/riot/account/v1/accounts/me";
  // LOL
  static championMasteryByPuuidUrl: string =
    "https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-puuid";
  static championMasteryBySummonerUrl: string =
    "https://vn2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner";
  static summonerByNameUrl: string =
    "https://vn2.api.riotgames.com/lol/summoner/v4/summoners/by-name/";
  static topPlayerUrl: string =
    "https://vn2.api.riotgames.com/lol/league-exp/v4/entries/RANKED_SOLO_5x5/CHALLENGER/I?page=1";
  static summonerBySummonerId: string =
    "https://vn2.api.riotgames.com/lol/summoner/v4/summoners";
  static freeChampsUrl: string = `https://vn2.api.riotgames.com/lol/platform/v3/champion-rotations?api_key=${process.env.RIOT_KEY}`;
}
export default ApiUrl;
