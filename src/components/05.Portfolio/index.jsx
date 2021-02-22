import React from "react";
import ServiceList from "./components/ServiceList";
import { Box, Heading } from "@chakra-ui/react";
import "./style.scss";
import { serviceList } from "./services";
import "./style.scss";

Portfolio.propTypes = {};
function Portfolio(props) {
  const colorList = ["red", "green", "blue"];
  const todoList = [
    {
      id: 1,
      title: "Eat",
    },
    {
      id: 2,
      title: "Sleep",
    },
    {
      id: 3,
      title: "Code",
    },
  ];

  return (
    <Box
      id="link_to_portfolio"
      className="portfolio2"
      height="1000px"
      width="100%"
      bg="linear-gradient(to left bottom, #141314, #393436, #635958, #8d817b, #b5aea0, #b5aea0, #b5aea0, #b5aea0, #8d817b, #635958, #393436, #141314)"
    >
      <Box paddingTop="10px" textAlign="center">
        <Heading className="text1" paddingBottom="1rem" padding="1rem">
          THIS IS NOT A SEX WEBSITE
        </Heading>
        <Box color="white" paddingBottom="2rem" className="text2">
          There are many ways of seeing the world. If we open our eyes.
        </Box>
      </Box>
      <ServiceList serviceProps={serviceList} />
    </Box>
  );
}

export default Portfolio;
