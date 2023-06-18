import { styled } from "styled-components";

const StyledSignInBtn = styled.div`
  display: flex;
  align-items: center;
  background: #c39b3b;
  height: 100%;
  padding: 0 12px;
  .icon-container {
    width: 24px;
    height: 24px;
  }
  svg {
    fill: black;
  }
  .sign {
    margin-left: 12px;
    color: black;
    font-weight: 600;
  }
`;
const SignInBtn = () => {
  return (
    <StyledSignInBtn>
      <div className="icon-container">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          className="signin-icon"
        >
          <path d="M13 3h-2v10h2Zm4.83 2.17-1.42 1.42A6.92 6.92 0 0 1 19 12 7 7 0 1 1 7.58 6.58L6.17 5.17A8.992 8.992 0 1 0 21 12a8.932 8.932 0 0 0-3.17-6.83Z"></path>
        </svg>
      </div>
      <div className="sign">Sign in</div>
    </StyledSignInBtn>
  );
};

export default SignInBtn;
