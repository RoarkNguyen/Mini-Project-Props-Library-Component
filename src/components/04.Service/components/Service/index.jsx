import React from "react";
import PropTypes from "prop-types";
import Service from "../..";
import { Box, Grid, GridItem, Heading } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { render } from "@testing-library/react";
import "./style.scss";

Service1.propTypes = {};

function Service1({ service }) {
  console.log(service.Icon);
  // console.log(`url(${service.thumbnailUrl})`);
  return (
    <div className="service_me1">
      <Box
        className="service_text1"
        alignItems="start"
        paddingLeft="20px"
        color="white"
        paddingTop="100px"
        bgImage={`url(${service.thumbnailUrl})`}
        height="300px"
        width="300px"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgPosition="top"
        borderRadius="30px"
        color="pink.600"
      >
        <Box className="box">
          <Box>{service.Icon}</Box>
          <Heading paddingBottom="1rem" paddingTop="1rem" size="md">
            {service.text1}
          </Heading>
          <Box size="sm">{service.text2}</Box>
        </Box>
      </Box>
    </div>
  );
}

export default Service1;
