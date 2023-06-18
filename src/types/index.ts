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

export interface ISummoner {
  accountId: string;
  id: string;
  name: string;
  profileIconId: number;
  puuid: string;
  revisionDate: number;
  summonerLevel: number;
}

export interface ITopLeaderboard {
  leagueId: string;
  queueType: string;
  tier: string;
  rank: string;
  summonerId: string;
  summonerName: string;
  leaguePoints: number;
  wins: number;
  losses: number;
  veteran: boolean;
  inactive: boolean;
  freshBlood: boolean;
  hotStreak: boolean;
}

export interface IChampion {
  version: string;
  id: string;
  key: string;
  name: string;
  title: string;
  blurb: string;
  info: IInfo;
  image: IImage;
  tags: string[];
  partype: string;
  stats: IStats;
}

export interface IInfo {
  attack: number;
  defense: number;
  magic: number;
  difficulty: number;
}

export interface IImage {
  full: string;
  sprite: string;
  group: string;
  x: number;
  y: number;
  w: number;
  h: number;
}

export interface IStats {
  hp: number;
  hpperlevel: number;
  mp: number;
  mpperlevel: number;
  movespeed: number;
  armor: number;
  armorperlevel: number;
  spellblock: number;
  spellblockperlevel: number;
  attackrange: number;
  hpregen: number;
  hpregenperlevel: number;
  mpregen: number;
  mpregenperlevel: number;
  crit: number;
  critperlevel: number;
  attackdamage: number;
  attackdamageperlevel: number;
  attackspeedperlevel: number;
  attackspeed: number;
}
