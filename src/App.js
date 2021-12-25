import { ThemeProvider } from "styled-components";
// Comps:
import Header from "components/Header";
import Card from "components/Card";
import Footer from "components/Footer";
// Styled Comps:
import { Container } from "components/styles/Container.styled";
import GlobalStyles from "components/styles/Global";
// Static:
import content from "static/content";
import theme from "static/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Header />
        <Container>
          {content.map((item, index) => (
            <Card key={index} item={item} />
          ))}
        </Container>
        <Footer />
      </>
    </ThemeProvider>
  );
}

export default App;
