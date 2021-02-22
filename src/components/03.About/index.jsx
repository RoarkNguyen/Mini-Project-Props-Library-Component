import {
  Box,
  Flex,
  Heading,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import "./style.scss";

About.propTypes = {};

function About(props) {
  function DataTabs({ data }) {
    return (
      <Tabs marginTop="60px">
        <TabList>
          {data.map((tab, index) => (
            <Tab key={index}>{tab.label}</Tab>
          ))}
        </TabList>
        <TabPanels>
          {data.map((tab, index) => (
            <TabPanel marginTop="30px" p={4} key={index}>
              <Heading fontSize="4xl">{tab.title1}</Heading>
              <Heading marginTop="10px" fontSize="xl">
                {tab.content1}
              </Heading>
              <Heading marginTop="30px" fontSize="4xl">
                {tab.title2}
              </Heading>
              <Heading marginTop="10px" fontSize="xl">
                {tab.content2}
              </Heading>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    );
  }

  const tabData = [
    {
      label: "Main skills",
      title1: "Autocad 2D, 3D",
      content1: "Drawing clear, easy reading",
      title2: "HTML, CSS & Javascript",
      content2: "SKill basic of basic of basic.",
    },
    {
      label: "Experience",
      title1: "Design Mechanical Engineer",
      content1: "2018 - 2020.",
      title2: "I go to code for a walk",
      content2: "2020 - Present.",
    },
    {
      label: "Education & Certification",
      title1:
        "Good Degree in Manufacturing - Da Nang University of Technology (DUT)",
      content1: "2014 - 2019.",
      title2:
        "Band score of 455 in TOEIC Certification - Educational Testing Service (ETS)",
      content2: "2019.",
    },
  ];
  return (
    <Flex
      id="link_to_about"
      className="about"
      bg="linear-gradient(to right, #434343 30%, black 50%)"
      justifyContent="space-around"
      height="700px"
      color="white"
      width="100%"
    >
      <Box
        className="about_img"
        margin="40px auto"
        p="10%"
        w="30%"
        bgPosition="center"
        bgSize="cover"
        bgRepeat="no-repeat"
        bgImage="url('https://scontent.fdad3-1.fna.fbcdn.net/v/t1.0-9/121035973_3310968042354333_194626302712166541_o.jpg?_nc_cat=102&ccb=2&_nc_sid=8bfeb9&_nc_ohc=B4SQsMMUp1AAX8RRarB&_nc_ht=scontent.fdad3-1.fna&oh=6cbf0601dbf86ab8ec5b61b57ae9e012&oe=6037CCC6')"
      ></Box>
      <Box paddingTop="5rem" w="60%">
        <Heading paddingBottom="2rem">About me</Heading>
        <Box>
          I am a mechanical design engineer. After working for more than a year
          I decided to move into a new industry. That is why this website was
          written. Has now started for half a month in a team startup.
          <DataTabs data={tabData} />
        </Box>
      </Box>
    </Flex>
  );
}

export default About;
