import React from "react";
import { styled } from "styled-components";
import HomeSearchBox from "./home_page_components/HomeSearchBox";
import TopLeaderboard from "./home_page_components/TopLeaderboard";
const StyledSearchLanding = styled.div`
  height: 450px;
  background-color: rgba(0, 0, 0, 0.4);
  .container {
    height: 100%;
    width: 100%;
    max-width: 1200px;
    margin: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 12px;
  }
`;
const SearchLanding = () => {
  return (
    <StyledSearchLanding>
      <div className="container">
        <HomeSearchBox />
        <TopLeaderboard />
      </div>
    </StyledSearchLanding>
  );
};

export default SearchLanding;
