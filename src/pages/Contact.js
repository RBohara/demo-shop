import { useState } from "react";
import styled from "styled-components";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  return (
    <>
      <ContactTextStyle>Contact Us</ContactTextStyle>
      <ContactSectionStyle>
        <FormLeftStyle>
          <h2>Have any questions?</h2>
          <h3>Shoot us a message</h3>
          <span>👉</span>
        </FormLeftStyle>
        <FormDivStyle>
          <FormStyle>
            <InputStyle
              type="text"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <InputStyle
              type="text"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextAreaStyle
              placeholder="Enter your message"
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button>Send</button>
          </FormStyle>
        </FormDivStyle>
      </ContactSectionStyle>
    </>
  );
};

const ContactSectionStyle = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 5rem;
  font-family: "Roboto", sans-serif;
`;

const ContactTextStyle = styled.h1`
  text-align: center;
  margin-top: 3rem;
  margin-bottom: 3rem;
  position: relative;
  &:after {
    content: "";
    background-color: #fc8621;
    height: 5px;
    width: 100px;
    position: absolute;
    top: 40px;
    left: 560px;
  }
`;

const FormLeftStyle = styled.div`
  margin: auto;
  text-align: center;
  font-weight: bold;
  span {
    font-size: 40px;
  }
`;

const FormDivStyle = styled.div`
  background-color: #373c45;
  flex-grow: 1;
  padding: 2rem;
  border-radius: 10px;
  border-top-left-radius: 50px;
`;

const FormStyle = styled.form`
  button {
    display: block;
    margin-left: 10px;
    padding: 10px 30px;
    background-color: #fc8621;
    color: #fff;
    border: 0;
    border-radius: 5px;
    cursor: pointer;
    &:focus {
      outline: none;
    }
  }
`;

const InputStyle = styled.input`
  display: block;
  height: 30px;
  width: 75%;
  margin: 0.4rem;
  border-radius: 5px;
  outline: none;
  &:focus {
    outline: none;
  }
`;

const TextAreaStyle = styled.textarea`
  display: block;
  width: 75%;
  height: 150px;
  margin: 0.4rem;
  border-radius: 5px;
  &:focus {
    outline: none;
  }
`;

export default Contact;
