import { usePathname, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { styled } from "styled-components";

const StyledHeaderNavBar = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
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
  const pathName = usePathname();
  const router = useRouter();
  const navigateBetweenNav = (url: string) => {
    router.push(url);
  };
  return (
    <StyledHeaderNavBar>
      {navbarList.map((item, index) => (
        <HeaderNavItem
          title={item.title}
          isActive={pathName === item.url}
          navigate={() => navigateBetweenNav(item.url)}
          key={item.url}
        />
      ))}
    </StyledHeaderNavBar>
  );
};
const HeaderNavItem = ({
  title,
  isActive,
  navigate,
}: {
  title: String;
  isActive: boolean;
  navigate: () => void;
}) => {
  return (
    <StyledNavItem onClick={navigate} className={isActive ? "nav-active" : ""}>
      <span>{title}</span>
    </StyledNavItem>
  );
};
const navbarList = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "Leaderboards",
    url: "/lol/leaderboards/point",
  },
];
export default HeaderNavbar;
