import { Box, Flex } from "@chakra-ui/react";
import Header from "./components/01.Header";
import Home from "./components/02.Home";
import About from "./components/03.About";
import Service from "./components/04.Service";
import Portfolio from "./components/05.Portfolio";
import Contact from "./components/06.Contact";
import Footer from "./components/07.Footer";
import "./App.css";
import { Container } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 992 });
  return isDesktop ? children : null;
};
const Tablet = ({ children }) => {
  const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 991 });
  return isTablet ? children : null;
};
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 });
  return isMobile ? children : null;
};
const Default = ({ children }) => {
  const isNotMobile = useMediaQuery({ minWidth: 768 });
  return isNotMobile ? children : null;
};
function App() {
  return (
    <Box className="App">
      <Header></Header>
      <Home></Home>
      <About></About>
      <Service></Service>
      <Portfolio></Portfolio>
      <Contact></Contact>
      <Footer></Footer>

      {/* <div>
        <Desktop>Desktop or laptop</Desktop>
        <Tablet>Tablet</Tablet>
        <Mobile>Mobile</Mobile>
        <Default>Not mobile (desktop or laptop or tablet)</Default>
      </div> */}
    </Box>
  );
}

export default App;
