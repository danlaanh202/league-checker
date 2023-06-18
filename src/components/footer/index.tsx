"use client";
import { styled } from "styled-components";

const StyledFooterContainer = styled.div`
  background: #081f33;
  padding: 32px;
  .footer-container {
    width: 100%;
    max-width: 1400px;
    margin: auto;
    display: flex;
    align-items: center;
    .content-container {
      .top-container {
        display: flex;
        gap: 20px;
        &-item {
          color: rgba(239, 239, 239, 0.5);
          font-size: 16px;
          font-weight: 600;
        }
      }
      .bottom-container {
        font-size: 12px;
        color: rgba(239, 239, 239, 0.5);
        font-weight: 500;
        margin-top: 20px;
      }
    }
    .social-container {
      display: flex;
      margin-left: 8px;
      gap: 12px;
      .icon-btn {
        padding: 12px 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 4px;
        &:nth-child(1) {
          background: #1da1f2;
        }
        &:nth-child(2) {
          background: #c74274;
        }
        &:nth-child(3) {
          background: #5865f2;
        }
        svg {
          fill: white;
          width: 22px;
          height: 22px;
        }
      }
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooterContainer>
      <div className="footer-container">
        <div className="content-container">
          <div className="top-container">
            <div className="top-container-item">2023 © Tracker Network</div>
            <div className="top-container-item">Advertise</div>
            <div className="top-container-item">Pricy Policy</div>
            <div className="top-container-item">Support</div>
          </div>
          <div className="bottom-container">
            League of Legends Tracker isn't endorsed by Riot Games and doesn't
            reflect the views or opinions of Riot Games or anyone officially
            involved in producing or managing Riot Games properties. Riot Games,
            and all associated properties are trademarks or registered
            trademarks of Riot Games, Inc.
          </div>
        </div>
        <div className="social-container">
          <a href="" className="icon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className=""
              data-v-06bd99ef=""
            >
              <path d="M19.1 4.334a7.14 7.14 0 0 1-2.05.575 3.582 3.582 0 0 0 1.567-1.984 7.2 7.2 0 0 1-2.267.875 3.52 3.52 0 0 0-2.633-1.133 3.571 3.571 0 0 0-3.558 3.575 3.716 3.716 0 0 0 .092.817 10.162 10.162 0 0 1-7.367-3.734 3.561 3.561 0 0 0 1.108 4.759 3.536 3.536 0 0 1-1.625-.417v.025A3.578 3.578 0 0 0 5.234 11.2a3.505 3.505 0 0 1-1.608.058 3.567 3.567 0 0 0 3.333 2.483 7.1 7.1 0 0 1-4.442 1.534 7.268 7.268 0 0 1-.85-.05 10.12 10.12 0 0 0 5.483 1.608A10.113 10.113 0 0 0 17.327 6.659c0-.158 0-.308-.008-.467A7.143 7.143 0 0 0 19.1 4.334Z"></path>
            </svg>
          </a>
          <a href="" className="icon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              className="trn-button__icon"
              data-v-06bd99ef=""
            >
              <path d="M5.8 0h8.4A5.8 5.8 0 0 1 20 5.8v8.4a5.8 5.8 0 0 1-5.8 5.8H5.8A5.8 5.8 0 0 1 0 14.2V5.8A5.8 5.8 0 0 1 5.8 0m-.2 2A3.6 3.6 0 0 0 2 5.6v8.8A3.6 3.6 0 0 0 5.6 18h8.8a3.6 3.6 0 0 0 3.6-3.6V5.6A3.6 3.6 0 0 0 14.4 2H5.6m9.65 1.5A1.25 1.25 0 1 1 14 4.75a1.25 1.25 0 0 1 1.25-1.25M10 5a5 5 0 1 1-5 5 5 5 0 0 1 5-5m0 2a3 3 0 1 0 3 3 3 3 0 0 0-3-3Z"></path>
            </svg>
          </a>
          <a href="" className="icon-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 28 28"
              className="trn-button__icon"
              data-v-06bd99ef=""
            >
              <path d="M23.021 5.677A21.227 21.227 0 0 0 17.658 4c-.252.462-.483.935-.687 1.418a19.931 19.931 0 0 0-5.943 0c-.209-.483-.439-.956-.691-1.413-1.856.32-3.659.88-5.37 1.677-3.4 5.097-4.317 10.072-3.856 14.97A21.504 21.504 0 0 0 7.691 24c.532-.726 1.004-1.5 1.407-2.309a13.582 13.582 0 0 1-2.221-1.078c.188-.137.37-.274.547-.428a15.232 15.232 0 0 0 13.152 0c.177.148.36.291.541.428-.707.424-1.453.787-2.22 1.078.408.808.875 1.578 1.405 2.303a21.5 21.5 0 0 0 6.58-3.347h.007c.541-5.674-.922-10.6-3.868-14.97ZM9.681 17.638c-1.283 0-2.34-1.193-2.34-2.644s1.03-2.644 2.34-2.644c1.308 0 2.359 1.193 2.338 2.644 0 1.451-1.036 2.644-2.339 2.644Zm8.635 0c-1.283 0-2.34-1.193-2.34-2.644s1.036-2.644 2.34-2.644c1.302 0 2.36 1.193 2.338 2.644 0 1.451-1.036 2.644-2.338 2.644Z"></path>
            </svg>
          </a>
        </div>
      </div>
    </StyledFooterContainer>
  );
};

export default Footer;
