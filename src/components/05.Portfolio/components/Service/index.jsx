import React from "react";
import PropTypes from "prop-types";
import Service from "../..";
import { Box, Button, Grid, GridItem, Heading, Link } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { render } from "@testing-library/react";
import "./style.scss";

Service1.propTypes = {};

function Service1({ service }) {
  console.log(service.Icon);
  // console.log(`url(${service.thumbnailUrl})`);
  return (
    <Box
      className="service_me2"
      height="22rem"
      width="18rem"
      bgImage={`url(${service.thumbnailUrl})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="top"
      borderRadius="30px"
    >
      <Box
        className="service_text"
        alignItems="start"
        paddingTop="15rem"
        alignItems="center"
      >
        <Box
          className="text11"
          color="black.500"
          fontWeight="bold"
          paddingBottom="2rem"
        >
          {service.text1}
        </Box>
        <a
          className="link1"
          textDecoration="none"
          target="_blank"
          href={service.image}
        >
          <Button
            textDecoration="none"
            colorScheme="blue"
            className="service_button"
          >
            Click here
          </Button>
        </a>
      </Box>
    </Box>
  );
}

export default Service1;
