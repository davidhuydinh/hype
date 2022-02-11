import Image from "next/image";
import styled from "styled-components";

import synthetixLogo from "../../assets/synthetix.svg";

const BottomBar: React.FC = () => {
  return (
    <BottomBarContainer>
      <PoweredBySynthetix>
        <p>Powered By</p>
        <Image alt="Synthetix" src={synthetixLogo} />
      </PoweredBySynthetix>
      <OneOfSix>One of Six</OneOfSix>
    </BottomBarContainer>
  );
};

const BottomBarContainer = styled.div`
  width: 100%;
  display: flex;
  position: absolute;
  bottom: 0;
  padding: 0 40px 40px;
  justify-content: space-between;
  align-items: center;

  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const PoweredBySynthetix = styled.div`
  display: flex;
  flex-direction: column;

  p {
    margin: 0;
    margin-bottom: 2px;
    font-size: 10px;
    text-transform: uppercase;
    color: #ece8e3;
    letter-spacing: 0.64px;
    opacity: 0.5;
  }
`;

const OneOfSix = styled.div`
  font-size: 15.5px;
  letter-spacing: 4px;
  font-family: "AkkuratLLWeb-Bold";
  color: #787878;
  text-transform: uppercase;
`;

export default BottomBar;