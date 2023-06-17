interface IAccount {
  puuid: String;
  gameName: String;
  tagLine: String;
}

interface IChampionMastery {
  championPointsUntilNextLevel: Number;
  chestGranted: boolean;
  championId: String;
  lastPlayTime: Number;
  championLevel: Number;
  summonerId: String;
  championPoints: Number;
  championPointsSinceLastLevel: Number;
  tokensEarned: Number;
}
