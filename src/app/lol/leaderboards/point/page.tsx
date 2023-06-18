"use client";
import Footer from "@/components/footer";
import LeaderBoardContainer from "@/components/body_components/leaderboard_components/LeaderBoardContainer";
import { styled } from "styled-components";

const StyledLeaderboardContainer = styled.div`
  background: #051421;
`;
const Point = () => {
  return (
    <>
      <StyledLeaderboardContainer>
        <LeaderBoardContainer />
      </StyledLeaderboardContainer>
      <Footer />
    </>
  );
};

export default Point;
