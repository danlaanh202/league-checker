"use client";
import React, { useEffect } from "react";
import { styled } from "styled-components";
import SearchBox from "./SearchBox";
import HeaderNavbar from "./HeaderNavbar";
import SignInBtn from "./SignInBtn";
const StyledHeaderContainer = styled.div`
  width: 100%;
  height: 56px;
  background: #202a3e;
  display: flex;
  align-items: center;
`;
const Header = () => {
  useEffect(() => {}, []);
  return (
    <StyledHeaderContainer>
      <SearchBox />
      <HeaderNavbar />
      <SignInBtn />
    </StyledHeaderContainer>
  );
};

export default Header;
