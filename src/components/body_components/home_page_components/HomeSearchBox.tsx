import React from "react";
import { styled } from "styled-components";
const StyledHomeSearchBox = styled.div`
  height: 64px;
  .input-container {
    height: 100%;
    display: flex;
    position: relative;

    .dropdown-container {
      display: flex;
      .dropdown-content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding: 0 12px;
        background: #093459;
        border-radius: 6px 0 0 6px;
        &__label {
          color: #b3a98f;
          font-weight: 500;
          font-size: 12px;
        }
        &__area {
          font-weight: 500;
          font-size: 14px;
        }
      }
    }
    input {
      width: 450px;
      border-radius: 0 6px 6px 0;
      outline: none;
      border: none;
      padding: 8px 20px;
      color: black;
      ::placeholder {
        font-weight: 500;
      }
    }
  }
`;
const HomeSearchBox = () => {
  return (
    <StyledHomeSearchBox>
      <div className="input-container">
        <div className="dropdown-container">
          <div className="dropdown-content">
            <div className="dropdown-content__label">Region</div>
            <div className="dropdown-content__area">North america</div>
          </div>
        </div>
        <input type="text" placeholder="Search summoner" />
      </div>
    </StyledHomeSearchBox>
  );
};

export default HomeSearchBox;
