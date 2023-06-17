import React, { useState } from "react";
import { styled } from "styled-components";

const StyledHeaderNavBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;

  .nav-active {
    ::before {
      background-color: #c39b3b;
      border-radius: 0.125rem 0.125rem 0 0;
      height: 0.25rem;
      width: 100%;
      position: absolute;
      left: 0;
      bottom: 0;
      transition: height 0.1s ease-in-out;
      content: "";
    }
  }
`;

const StyledNavItem = styled.a`
  padding: 0 16px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  cursor: pointer;
  span {
    font-weight: 500;
  }
`;
const HeaderNavbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const handleChangeActive = (num: number) => {
    setActiveIndex(num);
  };
  return (
    <StyledHeaderNavBar>
      {navbarList.map((item, index) => (
        <HeaderNavItem
          title={item}
          isActive={index == activeIndex}
          handleChangeActive={() => handleChangeActive(index)}
        />
      ))}
    </StyledHeaderNavBar>
  );
};
const HeaderNavItem = ({
  title,
  isActive,
  handleChangeActive,
}: {
  title: String;
  isActive: boolean;
  handleChangeActive: () => void;
}) => {
  return (
    <StyledNavItem
      onClick={handleChangeActive}
      className={isActive ? "nav-active" : ""}
    >
      <span>{title}</span>
    </StyledNavItem>
  );
};
const navbarList = ["Home", "Leaderboards"];
export default HeaderNavbar;
