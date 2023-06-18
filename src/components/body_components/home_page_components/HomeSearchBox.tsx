import ApiServices from "@/api_services/ApiServices";
import { useClickOutside } from "@/hooks/useClickOutside";
import { useDebounce } from "@/hooks/useDebounce";
import { ISummoner } from "@/types";
import React, { useEffect, useRef, useState } from "react";
import { styled } from "styled-components";
const StyledHomeSearchBox = styled.div`
  height: 64px;
  .input-container {
    height: 100%;
    display: flex;
    position: relative;

    .dropdown-container {
      display: flex;
      position: relative;

      .dropdown-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 28px 0 12px;
        background: #093459;
        border-radius: 6px 0 0 6px;
        cursor: pointer;
        ::after {
          content: "";
          width: 0;
          height: 0;
          border-style: solid;
          border-width: 4px 4px 0 4px;
          border-color: rgba(255, 255, 255, 0.75) transparent transparent
            transparent;
          position: absolute;
          right: 8px;
          top: calc(50% - 2px);
        }
        &__label {
          color: #b3a98f;
          font-weight: 500;
          font-size: 12px;
        }
        &__area {
          font-weight: 500;
          font-size: 14px;
        }
      }
      .region-dropdown {
        position: absolute;
        top: 100%;
        left: 0;
        right: -80px;
        margin-top: 4px;
        max-height: 206px;
        overflow: auto;

        &::-webkit-scrollbar {
          width: 12px;
        }
        &::-webkit-scrollbar-track {
          background: #081f33;
        }
        /* Handle */
        &::-webkit-scrollbar-thumb {
          background: #2d4051;
          border-radius: 10px;
          /* width: 4px; */
        }

        /* Handle on hover */
        &::-webkit-scrollbar-thumb:hover {
          background: #233d53;
        }
        &-item {
          background: #093459;
          padding: 12px 4px 12px 20px;
          font-size: 14px;
        }
      }
    }
    input {
      width: 450px;
      border-radius: 0 6px 6px 0;
      outline: none;
      border: none;
      padding: 8px 20px;
      color: black;
      ::placeholder {
        font-weight: 500;
      }
    }
    .summoner-dropdown {
      position: absolute;
      top: 100%;
      left: 0;
      right: 0;
      margin-top: 4px;
      min-height: 200px;
      background: #0a2740;
      &-label {
        padding: 8px 16px;
        color: rgba(239, 239, 239, 0.5);
        font-size: 14px;
        font-weight: 700;
      }
      &-item {
        background: #233d53;
        padding: 8px 16px;
        font-size: 14px;
        display: flex;
        align-items: center;
        gap: 12px;
        .summoner-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          object-fit: cover;
        }
      }
    }
  }
`;
const HomeSearchBox = () => {
  const [summonerName, setSummonerName] = useState("");
  const summonerNameDebounce = useDebounce<string>(summonerName);
  const [summonerData, setSummonerData] = useState<ISummoner | string>("");
  const [selectedRegion, setSelectedRegion] = useState(0);
  const [showRegionSelect, setShowRegionSelect] = useState(false);
  const [showSummonerSelect, setShowSummonerSelect] = useState(false);
  const clickRef = useRef(null);
  const inputRef = useRef(null);
  const handleRemoveRegionSelect = () => {
    setShowRegionSelect(false);
  };
  const handleRemoveShowSummoner = () => {
    setShowSummonerSelect(false);
  };

  useClickOutside(clickRef, handleRemoveRegionSelect);
  useClickOutside(inputRef, handleRemoveShowSummoner);

  useEffect(() => {
    ApiServices.searchSummonerByName(encodeURIComponent(summonerNameDebounce))
      .then((res) => setSummonerData(res.data))
      .catch((err) => setSummonerData(""));
  }, [summonerNameDebounce]);
  return (
    <StyledHomeSearchBox>
      <div className="input-container">
        <div className="dropdown-container" ref={clickRef}>
          <div
            className="dropdown-content"
            onClick={() => {
              setShowRegionSelect((prev) => !prev);
            }}
          >
            <div className="dropdown-content__label">Region</div>
            <div className="dropdown-content__area">North america</div>
          </div>

          {showRegionSelect && (
            <div className="region-dropdown">
              <div className="region-dropdown-item">North America</div>
              <div className="region-dropdown-item">North America</div>
              <div className="region-dropdown-item">North America</div>
              <div className="region-dropdown-item">North America</div>
              <div className="region-dropdown-item">North America</div>
              <div className="region-dropdown-item">North America</div>
              <div className="region-dropdown-item">North America</div>
            </div>
          )}
        </div>
        <div className="input-container" ref={inputRef}>
          <input
            type="text"
            placeholder="Search summoner"
            onChange={(e) => setSummonerName(e.target.value)}
            onFocus={() => {
              setShowSummonerSelect(true);
            }}
          />
          {showSummonerSelect && summonerData && (
            <div className="summoner-dropdown">
              <div className="summoner-dropdown-label">Players</div>
              <div className="summoner-dropdown-item">
                <img
                  src={`https://ddragon.leagueoflegends.com/cdn/13.12.1/img/profileicon/${
                    (summonerData as ISummoner)?.profileIconId
                  }.png`}
                  alt=""
                  className="summoner-avatar"
                />
                <div className="summoner-name">
                  {(summonerData as ISummoner)?.name}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </StyledHomeSearchBox>
  );
};

export default HomeSearchBox;
