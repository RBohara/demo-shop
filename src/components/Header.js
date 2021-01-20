import styled from "styled-components";
import watch from "../img/watch.jpeg";

const Header = () => {
  return (
    <HeaderSectionStyle>
      <div>
        <HeaderTextStyle>
          Genuine Leather Swiss Hand Made Watches
        </HeaderTextStyle>
        <CallToActionStyle>Buy Now</CallToActionStyle>
      </div>
      <img src={watch} />
    </HeaderSectionStyle>
  );
};

const HeaderSectionStyle = styled.section`
  background-image: linear-gradient(to right, #222831, #393e46);
  background-blend-mode: overlay;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  margin-top: 1.5rem;
  border-radius: 5px;
  div {
    text-align: center;
    margin: auto;
    color: white;
  }
  img {
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }
`;

const HeaderTextStyle = styled.h1`
  font-size: 44px;
  font-weight: bold;
`;

const CallToActionStyle = styled.button`
  background-color: #fc8621;
  border: none;
  padding: 1rem 2rem;
  color: white;
  font-size: 30px;
  margin-top: 4rem;
  border-radius: 10px;
  transition: transform 0.5s ease;
  box-shadow: 1px 1px 1px 2px #fc8621;
  transform: scale(1.2);
  cursor: pointer;
  :hover {
    transform: scale(1.3);
  }
`;

export default Header;
