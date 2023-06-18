import ApiServices from "@/api_services/ApiServices";
import { ISummoner, ITopLeaderboard } from "@/types";
import { useEffect, useState } from "react";
import { styled } from "styled-components";
const StyledTopLeaderboard = styled.div`
  display: flex;
  gap: 12px;
`;
const TopLeaderboard = () => {
  const [topPlayers, setTopPlayers] = useState<ITopLeaderboard[] | any[]>([]);
  useEffect(() => {
    ApiServices.getTopPlayer()
      .then((res) => setTopPlayers(res.data.slice(0, 3)))
      .catch((err) => console.log(err));
  }, []);

  return (
    <StyledTopLeaderboard>
      {topPlayers &&
        topPlayers?.length > 0 &&
        topPlayers?.map((item, index) => (
          <LeaderboardItem summoner={item} num={index} key={item.summonerId} />
        ))}
    </StyledTopLeaderboard>
  );
};
const StyledLeaderboardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 160px;
  background: #093459;
  padding-top: 12px;
  border-radius: 8px;
  position: relative;
  .ribbon {
    position: absolute;
    top: 0;
    right: 0;
    background-image: linear-gradient(to bottom, #ffeb99, #ad801c);
    color: #111;
    height: 36px;
    width: 36px;
    border-bottom-left-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 700;
    border-top-right-radius: 8px;
  }
  .avatar-container {
    background-image: linear-gradient(to bottom, #0a2740, transparent);
    border-radius: 50%;
    padding: 8px;
    height: 64px;
    width: 64px;
    position: relative;
    .image-container {
      box-shadow: 0 0 0 0.125rem #cbb765 inset;
      border-radius: 50%;
      width: 56px;
      height: 56px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      img {
        object-fit: cover;
        width: 100%;
        height: 100%;
        border-radius: 50%;
        border: 1px solid transparent;
      }
    }
  }
  .leaderboard-name {
    font-size: 18px;
    font-weight: 600;
  }
  .leaderboard-label {
    color: #cbb765;
    font-size: 12px;
    font-weight: 500;
    margin-top: 12px;
  }
  .leaderboard-point {
    font-weight: 700;
    font-size: 24px;
    margin: 4px 0;
  }
  .leaderboard-area {
    font-size: 10px;
    margin-bottom: 12px;
  }
  .leaderboard-btn {
    background: #ffffff26;
    outline: none;
    border: none;
    padding: 12px;
    width: 100%;
    border-radius: 0 0 8px 8px;
    font-weight: 500;
    font-size: 14px;
    :hover {
      background: #265c92;
    }
  }
`;
const LeaderboardItem = ({
  summoner,
  num,
}: {
  summoner: ITopLeaderboard;
  num: number;
}) => {
  const [player, setPlayer] = useState<ISummoner>();
  useEffect(() => {
    ApiServices.getPlayerBySummonerId(summoner.summonerId)
      .then((res) => setPlayer(res.data))
      .catch((err) => console.log(err));
  }, [summoner.summonerId]);
  return (
    <StyledLeaderboardItem>
      <div className="ribbon">#{num + 1}</div>
      <div className="avatar-container">
        <div className="image-container">
          <img
            src={`https://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/${player?.profileIconId}.png`}
            alt=""
          />
        </div>
      </div>
      <div className="leaderboard-name">{summoner.summonerName}</div>
      <div className="leaderboard-label">League points</div>
      <div className="leaderboard-point">{summoner.leaguePoints}</div>
      <div className="leaderboard-area">VN</div>
      <button className="leaderboard-btn">Leaderboard</button>
    </StyledLeaderboardItem>
  );
};
export default TopLeaderboard;
