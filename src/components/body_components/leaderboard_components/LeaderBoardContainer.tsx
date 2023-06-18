import { styled } from "styled-components";
import FilterContainer from "./FilterContainer";
import LeaderboardTable from "./LeaderboardTable";
const StyledLeaderBoardContainer = styled.div`
  width: 100%;
  max-width: 950px;
  margin: auto;
  .leader-label {
    padding: 24px;
    font-size: 20px;
    display: flex;
    align-items: center;
    background: #081f33;
    .leader-icon {
      width: 32px;
      height: 32px;
      fill: #c7aa6e;
      margin-right: 12px;
    }
  }
`;
const LeaderBoardContainer = () => {
  return (
    <StyledLeaderBoardContainer>
      <FilterContainer />
      <div className="leader-label">
        <svg
          data-v-43dcd680=""
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 28 28"
          className="leader-icon"
        >
          <path d="M19.25 17.5v-5.25H8.75v5.25H0V28h28V17.5Zm-10.5 8.75h-7v-7h7Zm8.75-7.88v7.88h-7V14h7Zm8.75 7.88h-7v-7h7Z"></path>
          <path d="M13.13 15.75h1.74V21h-1.74zm-8.75 6.13h1.75v1.75H4.38zm17.5 0h1.75v1.75h-1.75zM9.96 10.5h8.08l3.5-7h-4.38L15.41 0h-2.83l-1.75 3.5H6.46Zm1.95-5.25 1.75-3.5h.67l1.75 3.5h2.63l-1.75 3.5h-5.92l-1.75-3.5ZM6.13 0h1.75v1.75H6.13zm14 0h1.75v1.75h-1.75z"></path>
        </svg>
        <h3>League Points Leaderboard</h3>
      </div>
      <LeaderboardTable />
    </StyledLeaderBoardContainer>
  );
};

export default LeaderBoardContainer;
