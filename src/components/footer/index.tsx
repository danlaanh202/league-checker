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
    color: rgba(239, 239, 239, 0.5);
    .content-container {
      .top-container {
        display: flex;
      }
      .bottom-container {
        font-size: 12px;
        color: rgba(239, 239, 239, 0.5);
        font-weight: 500;
      }
    }
    .social-container {
    }
  }
`;
const Footer = () => {
  return (
    <StyledFooterContainer>
      <div className="footer-container">
        <div className="content-container">
          <div className="top-content">
            <div className="top-content-item">2023 © Tracker Network</div>
            <div className="top-content-item">Advertise</div>
            <div className="top-content-item">Pricy Policy</div>
            <div className="top-content-item">Support</div>
          </div>
          <div className="bottom-container">
            League of Legends Tracker isn't endorsed by Riot Games and doesn't
            reflect the views or opinions of Riot Games or anyone officially
            involved in producing or managing Riot Games properties. Riot Games,
            and all associated properties are trademarks or registered
            trademarks of Riot Games, Inc.
          </div>
        </div>
        <div className="social-container">icon</div>
      </div>
    </StyledFooterContainer>
  );
};

export default Footer;
