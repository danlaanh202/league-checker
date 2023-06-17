"use client";
import SearchLanding from "@/components/body_components/SearchLanding";
import Header from "@/components/header";

import { styled } from "styled-components";
const StyledHomeContainer = styled.div`
  background: #081f33;
  background-image: url("/images/splash_art.jpeg");
  background-position: 80% 10%;
  background-repeat: no-repeat;
  background-size: cover;
`;
export default function Home() {
  return (
    <StyledHomeContainer>
      <SearchLanding />
    </StyledHomeContainer>
  );
}
