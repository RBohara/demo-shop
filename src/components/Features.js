import { Link } from "react-router-dom";

import styled from "styled-components";
import watch1 from "../img/watch-1.jpeg";
import watch2 from "../img/watch-2.jpeg";
import watch3 from "../img/watch-3.jpeg";

const Features = () => {
  return (
    <FeaturesSectionStyle>
      <FeaturesTextStyle>Features</FeaturesTextStyle>
      <FeatureDivStyle>
        <FeatureSectionStyle>
          <img src={watch1} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
        </FeatureSectionStyle>
        <FeatureSectionStyle>
          <img src={watch2} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries,
          </p>
        </FeatureSectionStyle>
        <FeatureSectionStyle>
          <img src={watch3} />
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s
          </p>
        </FeatureSectionStyle>
      </FeatureDivStyle>
      <SeeMoreFeaturesStyle>
        <Link to="/watches">See More</Link>
      </SeeMoreFeaturesStyle>
    </FeaturesSectionStyle>
  );
};

const FeaturesSectionStyle = styled.section`
  margin-top: 1.5rem;
  overflow: hidden;
  padding: 0.5rem;
`;

const FeaturesTextStyle = styled.h1`
  text-align: center;
  color: #2f343d;
  margin-top: 1rem;
  margin-bottom: 1rem;
  font-size: 2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    top: 40px;
    right: 545px;
    background-color: #fc8621;
    height: 4px;
    width: 80px;
  }
`;

const FeatureDivStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
`;

const FeatureSectionStyle = styled.div`
  background-color: #2e343c;
  color: white;
  display: grid;
  grid-template-columns: repeat(3, fr);
  gap: 1rem;
  /* display: flex;
  flex-direction: column;
  justify-content: center; */
  align-items: center;
  padding: 0.5rem;
  margin-top: 1.2rem;
  position: relative;
  &::before {
    content: "";
    position: absolute;
    background-color: #fc8621;
    width: 50px;
    height: 50px;
    top: -5px;
    left: -5px;
    z-index: -1;
  }
  img {
    width: 200px;
    height: 200px;
    object-fit: cover;
    border-radius: 50%;
    margin: auto;
  }
`;

const SeeMoreFeaturesStyle = styled.button`
  background-color: #2e343c;
  display: block;
  margin: 1rem auto;
  padding: 1rem 1.5rem;
  border: none;
  outline: none;
  font-size: 25px;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out;
  :hover {
    transform: scale(1.2);
  }
  a {
    text-decoration: none;
    color: #fff;
  }
`;

export default Features;
