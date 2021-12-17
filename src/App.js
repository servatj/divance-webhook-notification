import "./App.css";
import styled from "styled-components";
import Navigation from "./components/Navigation";
import WebhookForm from "./components/Form";


const Container = styled.div`
  display: grid;
  height: 100vh;
  grid-template-rows: 0.2fr 1fr 0.5fr 0.5fr;
  grid-template-areas:
    "nav nav nav nav"
    "main main main main"
    "footer footer footer footer";
  text-align: center;
  grid-gap: 0.25rem;
  transition: all 0.25s ease-in-out;
  @media (max-width: 550px) {
    grid-template-columns: 1fr;
    grid-template-rows: 0.4fr 0.4fr 2.2fr 1.2fr 1fr;
    grid-template-areas:
      "nav"
      "main"
      "footer";
  }
  color: white;
`;

const Main = styled.main`
  background: #1f2128;
  color: white;
  grid-area: main;
  padding: 0.25rem;
  height: 100vh;
`;

const Footer = styled.footer`
  background: #ff9637;
  grid-area: footer;
  padding: 0.25rem;
`;

function App() {
  return (
    <Container>
      <Navigation />
      <Main>
      <WebhookForm />
      </Main>
      <Footer>Footer</Footer>
    </Container>
  );
}

export default App;
