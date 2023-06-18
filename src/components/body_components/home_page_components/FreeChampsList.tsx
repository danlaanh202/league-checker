import { styled } from "styled-components";
import champions from "../../../data/championsWithId.json";
import { useEffect, useState } from "react";
import ApiServices from "@/api_services/ApiServices";
import { IChampion } from "@/types";
const StyledFreeChampsList = styled.div`
  .champ-list-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 8px;
  }
`;
const FreeChampsList = () => {
  const [freeChamps, setFreeChamps] = useState<IChampion[]>([]);
  useEffect(() => {
    ApiServices.getFreeChamps()
      .then((res) => {
        let tempFreeChamp: any[] = [];
        res.data.freeChampionIds.forEach((item: any, index: number) => {
          tempFreeChamp.push((champions as any)[item]);
        });
        console.log(tempFreeChamp[0]);
        setFreeChamps(tempFreeChamp);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <StyledFreeChampsList>
      <div className="champ-list-container">
        {freeChamps?.length > 0 &&
          freeChamps?.map((item, index) => <FreeChampItem champion={item} />)}
      </div>
    </StyledFreeChampsList>
  );
};
const StyledFreeChampItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 12px;
  .champion-image {
    width: 64px;
    height: 64px;
    object-fit: cover;
  }
  .champion-name {
    margin-top: 8px;
    color: #c39b3b;
    font-weight: 500;
  }
`;
const FreeChampItem = ({ champion }: { champion: IChampion }) => {
  return (
    <StyledFreeChampItem>
      <img
        className="champion-image"
        src={`http://ddragon.leagueoflegends.com/cdn/13.12.1/img/champion/${champion.image.full}`}
        alt=""
      />
      <div className="champion-name">{champion.name}</div>
    </StyledFreeChampItem>
  );
};
export default FreeChampsList;
