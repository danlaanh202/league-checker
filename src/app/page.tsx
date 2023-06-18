"use client";
import FreeChamps from "@/components/body_components/FreeChamps";
import SearchLanding from "@/components/body_components/SearchLanding";
import Footer from "@/components/footer";

import { styled } from "styled-components";
const StyledHomeContainer = styled.div`
  background: #081f33;
`;
export default function Home() {
  return (
    <>
      <StyledHomeContainer>
        <SearchLanding />
        <FreeChamps />
      </StyledHomeContainer>
      <Footer />
    </>
  );
}
