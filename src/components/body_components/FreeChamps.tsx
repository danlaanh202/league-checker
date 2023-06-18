import { styled } from "styled-components";
import FreeChampsList from "./home_page_components/FreeChampsList";

const StyledFreeChamps = styled.div`
  padding: 32px 0;
  height: 100%;
  width: 100%;
  max-width: 1200px;
  margin: auto;
  .section-title {
    font-size: 28px;
  }
`;
const FreeChamps = () => {
  return (
    <StyledFreeChamps>
      <h3 className="section-title">Current free champion rotation</h3>
      <FreeChampsList />
    </StyledFreeChamps>
  );
};

export default FreeChamps;
