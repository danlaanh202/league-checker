"use client";
import ChampionContainer from "@/components/body_components/champion_page_components/ChampionContainer";
import Footer from "@/components/footer";
import { styled } from "styled-components";

const StyledChampionsContainer = styled.div``;
const Champions = () => {
  return (
    <>
      <StyledChampionsContainer>
        <ChampionContainer />
      </StyledChampionsContainer>
      <Footer />
    </>
  );
};

export default Champions;
