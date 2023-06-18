import ApiServices from "@/api_services/ApiServices";
import { ILd, ISummoner } from "@/types";
import { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledLeaderboardTable = styled.div`
  .ld-table {
    border-spacing: 0;
    width: 100%;
    .ld-header {
      th {
        background: #0a2740;
        color: #b3a98f;
        font-size: 14px;
        padding: 8px 12px;
        text-align: left;
        &:nth-child(3) {
          background: #0d2f4c; //#0c273e
        }
      }
    }
    .ld-body {
      &-row {
        background: #081f33; //6#0a2740

        .rank-data {
        }
        .username-data {
        }
        .game-rank-data {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .league-point-data {
        }
        .win-rate-data {
        }
        .matches-played-data {
        }
        td {
          padding: 12px;
          font-size: 18px;
          font-weight: 600;
        }
        td:nth-child(3) {
          background: #0c273e; //#0d2f4c
        }
      }
    }
  }
`;
const LeaderboardTable = () => {
  const [leaderboardData, setLeaderboardData] = useState<ILd[]>([]);
  useEffect(() => {
    ApiServices.getLeaderboardTablePlayer(1)
      .then((res) => setLeaderboardData(res.data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <StyledLeaderboardTable>
      <table className="ld-table">
        <thead className="ld-header">
          <tr>
            <th>Rank</th>
            <th>Player</th>
            <th>Game Rank</th>
            <th>LP</th>
            <th>Win %</th>
            <th>Matches Played</th>
          </tr>
        </thead>
        <tbody className="ld-body">
          {leaderboardData?.length > 0 &&
            leaderboardData.map((item, index) => (
              <LdRow player={item} rank={index} />
            ))}
        </tbody>
      </table>
    </StyledLeaderboardTable>
  );
};

const LdRow = ({ rank, player }: { rank: number; player: ILd }) => {
  console.log(player);
  const [extendedData, setExtendedData] = useState<ISummoner>();
  useEffect(() => {
    // ApiServices.getPlayerBySummonerId(encodeURIComponent(player.summonerId))
    //   .then((res) => setExtendedData(res.data))
    //   .catch((err) => console.log(err));
  }, [player]);
  return (
    <tr
      className="ld-body-row"
      style={
        rank % 2 == 0
          ? { backgroundColor: "#081f33" }
          : { backgroundColor: "#0a2740" }
      }
    >
      <td className="rank-data">{rank + 1}</td>
      <td className="username-data">{player.summonerName}</td>
      <td
        className="game-rank-data"
        style={
          rank % 2 === 0
            ? { backgroundColor: "#0c273e" }
            : { backgroundColor: "#0d2f4c" }
        }
      >
        <img
          style={{ width: "32px", height: "32px" }}
          src="/images/challenger.png"
          alt=""
        />
        {player.tier.toLowerCase()}
      </td>
      <td className="league-point-data">{player.leaguePoints}</td>
      <td className="win-rate-data">
        {Math.ceil((player.wins / (player.wins + player.losses)) * 100)}%
      </td>
      <td className="matches-played-data">{player.wins + player.losses}</td>
    </tr>
  );
};
export default LeaderboardTable;
