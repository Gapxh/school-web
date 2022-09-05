import React from "react";
import styled from "styled-components";

// import Confetti from "../Confetti";
import Button from "../Button";
const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.body};
  position: relative;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  background-image: linear-gradient(135deg, #f6d242 10%, #ff52e5 100%);
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  -webkit-box-decoration-break: clone;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 1rem auto;
  border-bottom: 2px solid #f6416c;
  width: fit-content;
  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 85%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    justify-content: center;
  }
`;
const Item = styled.div`
  width: calc(20rem - 4vw);
  cursor: pointer;
  color: ${(props) => props.theme.body};
  margin: 2rem 1rem;
  position: relative;
  border: 2px solid black;
  border-radius: 20px;
  overflow: hidden;
  backdrop-filter: blur(4px);
  z-index: 5;

  @media (max-width: 30em) {
    width: 70vw;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  background-color: ${(props) => props.body};
  border-radius: 5px;
  margin-top: 15px;
  height: 130px;
  img {
    width: 100%;
    height: 100%;
  }
  border-top: 2px solid black;
  border-bottom: 2px solid black;
`;

const Name = styled.h2`
  font-size: ${(props) => props.theme.fontlg};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) => props.theme.text};
  margin-top: 1rem;
`;

const Subtitle = styled.h2`
  font-size: ${(props) => props.theme.fontmd};
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ff6a88;
  margin-top: 0.5rem;
  margin-bottom: 20px;
`;

const ButtonContainer = styled.div`
  width: 80%;
  margin: 1rem auto;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 64em) {
    width: 100%;
    button {
      margin: 0 auto;
    }
  }
`;

const ProjectComponent = ({ img, name = "", subtitle = "", link = "" }) => {
  return (
    <Item>
      <ImageContainer>
        <img src={img} alt={name} />
      </ImageContainer>
      <Name>{name}</Name>
      <Subtitle>{subtitle}</Subtitle>
      <ButtonContainer>
        <Button text="Github" link={link} />
      </ButtonContainer>
    </Item>
  );
};

const Projects = () => {
  return (
    <Section id="projects">
      {/* <Confetti /> */}
      <Title>Projects</Title>
      <Container>
        <ProjectComponent
          name="Portfolio Website"
          subtitle="React"
          link="https://github.com/H3X-T/supakorn.xyz"
        />
      </Container>
    </Section>
  );
};

export default Projects;