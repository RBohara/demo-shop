import styled from "styled-components";

const Footer = () => {
  return (
    <FooterStyle>
      <div>
        <ul>
          <li>Contact</li>
        </ul>
      </div>
      <p>&copy; Copyright 2021.</p>
    </FooterStyle>
  );
};

const FooterStyle = styled.footer`
  margin-top: 1rem;
`;

export default Footer;
