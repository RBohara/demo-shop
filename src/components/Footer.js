import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <p>Designed & developed by Rahul Bohara &copy; Copyright 2021.</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  margin-top: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export default Footer;
