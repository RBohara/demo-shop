import { Link } from "react-router-dom";
import styled from "styled-components";

const ContactLink = () => {
  return (
    <ContactLinkContainerStyle>
      <h1>Wanna get in touch with us?</h1>
      <Link to="/contact">
        <ContactLinkButtonStyle>Contact Us</ContactLinkButtonStyle>
      </Link>
    </ContactLinkContainerStyle>
  );
};

const ContactLinkContainerStyle = styled.div`
  margin-top: 2rem;
  text-align: center;
  font-family: "Roboto", sans-serif;
  a {
    text-decoration: none;
  }
`;

const ContactLinkButtonStyle = styled.button`
  background-color: #fc8621;
  color: white;
  display: block;
  margin: 1.5rem auto;
  padding: 1.2rem;
  border: 0;
  font-size: 30px;
  border-radius: 10px;
  border-top-left-radius: 40px;
  &:hover {
    transform: scale(1.2);
  }
`;

export default ContactLink;
