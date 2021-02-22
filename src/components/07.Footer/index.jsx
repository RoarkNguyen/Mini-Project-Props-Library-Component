import { CalendarIcon, EditIcon, EmailIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Link } from "@chakra-ui/react";
import React from "react";
import "./style.scss";

Footer.propTypes = {};

function Footer(props) {
  return (
    <Flex
      bg="#14101C"
      height="100px"
      width="100%"
      justifyContent="space-between"
      alignItems="center"
      paddingLeft="3rem"
      paddingRight="3rem"
    >
      <Box className="footer_left" p="4">
        <Link className="icon">
          <CalendarIcon w={8} h={8} color="white" />
        </Link>
        <Link className="icon" href="https://www.facebook.com/" target="_blank">
          <EmailIcon w={8} h={8} color="white" />
        </Link>
        <Link className="icon" href="https://www.facebook.com/" target="_blank">
          <EditIcon w={8} h={8} color="white" />
        </Link>
        <Link className="icon" href="https://www.facebook.com/" target="_blank">
          <SunIcon w={8} h={8} color="white" />
        </Link>
      </Box>
      <Box p="4" color="white" className="footer_left">
        Copyright © 2020 Roark. All Rights Reserved.
      </Box>
    </Flex>
  );
}
export default Footer;
