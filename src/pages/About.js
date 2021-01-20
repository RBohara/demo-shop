import styled from "styled-components";

const About = () => {
  return (
    <>
      <AboutSectionStyle>
        <AboutSectionHeader>
          <h1>About Us</h1>
          <CirclesStyle>
            <RedCircleStyle></RedCircleStyle>
            <GreenCircleStyle></GreenCircleStyle>
            <YellowCircleStyle></YellowCircleStyle>
          </CirclesStyle>
        </AboutSectionHeader>
        <AboutDescriptionStyle>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </AboutDescriptionStyle>
      </AboutSectionStyle>
    </>
  );
};

const AboutSectionStyle = styled.div`
  background-color: #383d45;
  color: white;
  margin-top: 2rem;
  font-family: "Roboto", sans-serif;
  border-bottom-left-radius: 50px;
`;

const AboutSectionHeader = styled.div`
  background-color: #232932;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem;
`;

const CirclesStyle = styled.div`
  display: flex;
`;

const RedCircleStyle = styled.div`
  background: red;
  height: 15px;
  width: 15px;
  border-radius: 50%;
`;
const GreenCircleStyle = styled.div`
  background: green;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-left: 10px;
`;
const YellowCircleStyle = styled.div`
  background: yellow;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  margin-left: 10px;
`;

const AboutDescriptionStyle = styled.p`
  padding: 1.5rem;
  line-height: 1.5rem;
`;

export default About;
