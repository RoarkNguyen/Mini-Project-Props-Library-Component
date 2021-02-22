import { Box, Button, Flex, Heading, Img } from "@chakra-ui/react";
import React from "react";
import "./style.scss";
Contact.propTypes = {};
function Contact(props) {
  return (
    <Flex
      id="link_to_contact"
      bg="linear-gradient(to right, #160d12, #191217, #1b171c, #1e1b21, #201f25, #222429, #24282d, #272d30, #2c3333, #333936, #3b3e3a, #44433f)"
      justifyContent="space-around"
      height="700px"
      width="100%"
      className="contact"
      color="white"
    >
      <Box w="50%" p="4" paddingLeft="16rem" paddingTop="5rem">
        <Heading>HIRE ME</Heading>
        <Box>I am available for freelance work. Connect with me via</Box>
        <Box>Telegram: Roark123 or email: hoangnguyen220396@gmail.com</Box>
        <Box>
          <Flex marginTop="6rem" alignItems="center">
            <Img
              borderRadius="full"
              boxSize="100px"
              src="https://scontent-sin6-1.xx.fbcdn.net/v/t1.0-1/c60.0.240.240a/p240x240/134434564_3520384868079315_770426941945100546_o.jpg?_nc_cat=109&ccb=2&_nc_sid=7206a8&_nc_ohc=rLbTpeBnzCUAX8Rh1ig&_nc_ht=scontent-sin6-1.xx&tp=27&oh=2a426dba1470ddf21482ff00038ceee2&oe=602D7376"
            ></Img>
            <Box paddingLeft="2rem">
              <Heading paddingBottom="1rem">Nguyen Minh Hoang</Heading>
              <p>Da nang city is so beautiful</p>
            </Box>
          </Flex>
          <Flex paddingTop="3rem" alignItems="center">
            <Img
              borderRadius="full"
              boxSize="100px"
              src="https://media-exp1.licdn.com/dms/image/C560BAQEBBou0ykp_sQ/company-logo_200_200/0/1591255221962?e=2159024400&amp;v=beta&amp;t=u03DQPKx4gR24oH_ybG95d_EpQQSgfmDMhyQnRZzll4"
            ></Img>
            <Heading paddingLeft="2rem">Up work to here</Heading>
          </Flex>
          <Button
            size="md"
            height="60px"
            width="25rem"
            border="2px"
            bg="red.400"
            color="black"
            marginLeft="3rem"
            marginTop="3rem"
          >
            VIEW DETAILS
          </Button>
        </Box>
      </Box>
      <Box
        className="about_img"
        margin="40px auto"
        p="10%"
        w="30%"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgImage="url('https://scontent-sin6-3.xx.fbcdn.net/v/t1.0-9/75233871_1122305598119682_9015392747173435162_n.jpg?_nc_cat=106&ccb=2&_nc_sid=09cbfe&_nc_ohc=eiDz91MD6oEAX9pah7-&_nc_ht=scontent-sin6-3.xx&oh=f72b3ea490c65b83af14ecf7d691215f&oe=602DE3C8')"
      ></Box>
    </Flex>
  );
}

export default Contact;
