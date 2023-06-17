import React from "react";
import { styled } from "styled-components";
const StyledSearchBox = styled.div`
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin: 0 16px;
  cursor: pointer;
  .search-box__logo-container {
    width: 36px;
    height: 36px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #c39b3b;
    .search-box__logo {
      fill: #051421;
      width: 24px;
      height: 24px;
    }
  }
  .search-btn {
    display: flex;
    align-items: center;
    background: #093459;
    height: 36px;
    padding: 8px 16px;
    .search-box__icon {
      height: 24px;
      fill: #ffffffbf;
    }
    span {
      font-weight: 500;
    }
  }
`;
const SearchBox = () => {
  return (
    <StyledSearchBox>
      <div className="search-box__logo-container">
        <SearchLogo />
      </div>
      <div className="search-btn">
        <SearchIcon />
        <span>Search</span>
      </div>
    </StyledSearchBox>
  );
};
const SearchIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 28 28"
      className="search-box__icon"
    >
      <path d="M4.952 8.465a8.219 8.219 0 0 0 .826 6.277 8.265 8.265 0 0 0 10.41 3.472l4.3 7.452 1.719-.993-4.3-7.452a8.27 8.27 0 0 0 2.2-10.751 8.269 8.269 0 0 0-11.3-3.028 8.219 8.219 0 0 0-3.855 5.023Zm7.984-4.147a6.311 6.311 0 0 1 5.452 3.145 6.289 6.289 0 0 1-5.438 9.432 6.311 6.311 0 0 1-5.454-3.145 6.289 6.289 0 0 1 5.44-9.432Z"></path>
    </svg>
  );
};
const SearchLogo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="search-box__logo"
    >
      <path d="M5.6 2a.458.458 0 0 0-.4.5.367.367 0 0 0 .1.3l1.3 1.7v15.2l-1.7 1.7a.377.377 0 0 0 .1.6h13.4a.758.758 0 0 0 .4-.2l2.3-2.3a.377.377 0 0 0-.1-.6.367.367 0 0 0-.3-.1h-9.5V2.5a.472.472 0 0 0-.5-.5ZM12 3.8v.9a8.237 8.237 0 0 1 8.2 8.2 7.955 7.955 0 0 1-1.7 5h1.1a8.9 8.9 0 0 0 1.5-5A9.133 9.133 0 0 0 12 3.8Zm0 1.8v12.3h5.3a7.479 7.479 0 0 0 2-5A7.341 7.341 0 0 0 12 5.6Zm-6.4.8a9.519 9.519 0 0 0-2.7 6v1.3a9.269 9.269 0 0 0 2.7 5.7V18a8.147 8.147 0 0 1-1.8-5.1 7.754 7.754 0 0 1 1.8-5.1V6.4Zm0 3a7.3 7.3 0 0 0-.9 3.5 6.756 6.756 0 0 0 .9 3.5v-7Z"></path>
    </svg>
  );
};
export default SearchBox;
