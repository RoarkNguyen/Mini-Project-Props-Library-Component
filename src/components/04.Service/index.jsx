import {
  PhoneIcon,
  SettingsIcon,
  StarIcon,
  SunIcon,
  TimeIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import ServiceList from "./components/ServiceList";
import "./style.scss";

Service.propTypes = {};
function Service(props) {
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
  const serviceList = [
    {
      id: 1,
      thumbnailUrl:
        "https://64.media.tumblr.com/67158b5507905c2313cdfd95f5bec4b1/5f67fbcf4de0b3a5-24/s1280x1920/b2a40dcc45a2c5da40992bad95d1f40f16bb540b.jpg",
      Icon: <StarIcon w={16} h={16} />,
      text1: "Business Strategy",
      text2: "Design a complete product from your amazing idea.",
    },
    {
      id: 2,
      thumbnailUrl:
        "https://64.media.tumblr.com/f578e09c437c690b9f98f23c5366e867/c9abf13c2df6f8c8-ab/s1280x1920/b0c7c53fead927c94b4e4b97ec67ad25dd18b794.jpg",
      Icon: <PhoneIcon w={16} h={16} />,
      text1: "Website Development",
      text2: "Build highly-engaging websites with perfect UI/UX",
    },
    {
      id: 3,
      thumbnailUrl:
        "https://64.media.tumblr.com/d974c4699963d5a37678647daf11533a/199a8002a3510625-0f/s1280x1920/30f5be99dfcdd7206082435ebc60ef0139c26eef.jpg",
      Icon: <TimeIcon w={16} h={16} />,
      text1: "Marketing",
      text2: "Promote your product to worldwide community",
    },
    {
      id: 4,
      thumbnailUrl:
        "https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/139575472_1553151991544561_2053863250003921709_o.jpg?_nc_cat=103&ccb=2&_nc_sid=b9115d&_nc_ohc=s0WUINUqod8AX8nEBua&_nc_ht=scontent.fdad3-1.fna&oh=5c649abbd848553dabe7d8c92e175f7b&oe=602F5552",
      Icon: <SettingsIcon w={16} h={16} />,
      text1: "Mobile Development",
      text2: "Build awesome Android/iOS applications.",
    },
    {
      id: 5,
      thumbnailUrl:
        "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/138804391_3560394734078328_4420379296442601494_o.jpg?_nc_cat=100&ccb=2&_nc_sid=825194&_nc_ohc=smnqx3U6jg8AX9YQdW8&_nc_ht=scontent.fdad3-3.fna&oh=429f64b2b7b30c97296ec01ba39d34ac&oe=6030012F",
      Icon: <ViewIcon w={16} h={16} />,
      text1: "Enhance your product",
      text2: "Fix & improve your current product.",
    },
    {
      id: 6,
      thumbnailUrl:
        "https://scontent.fdad3-3.fna.fbcdn.net/v/t1.0-9/137317746_1552039108322516_9148057227115882564_n.jpg?_nc_cat=108&ccb=2&_nc_sid=825194&_nc_ohc=ePHxJEfPdpMAX9sZ07q&_nc_ht=scontent.fdad3-3.fna&oh=cbc7f4301b4caf416de433d9871357d9&oe=603089A6",
      Icon: <SunIcon w={16} h={16} />,
      text1: "SEO",
      text2: "Best practices in Search Eng",
    },
  ];
  return (
    <Box
      id="link_to_service"
      className="service1"
      height="1000px"
      width="100%"
      bg="linear-gradient(to right top, #e17fb8, #ad699c, #7d537c, #523c5a, #2e2637, #2c2b3b, #2b2f3d, #2b333f, #3b596c, #458397, #4fb0bc, #68ded7)"
    >
      <Box textAlign="center">
        <Heading className="text1" paddingBottom="1rem">
          My Awesome Services
        </Heading>
        <Box color="white" paddingBottom="2rem" className="text2">
          If you have an interesting start-up web project or you want to improve
          your existing web app then I'm ready to help you!
        </Box>
      </Box>
      <ServiceList serviceProps={serviceList} />
    </Box>
  );
}

export default Service;
