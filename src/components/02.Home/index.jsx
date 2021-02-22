import { Box, color, Heading } from "@chakra-ui/react";
import React from "react";
import Particles from "react-particles-js";
import Typical from "react-typical";
import "./style.scss";
import Typewriter from "typewriter-effect";
Home.propTypes = {};

function Home(props) {
  return (
    <Box id="link_to_home" className="home_me">
      <Box height="100vh" className="particles-bg">
        <Particles
          params={{
            particles: {
              number: {
                value: 12,
                density: {
                  enable: true,
                  value_area: 600,
                },
              },
              line_linked: {
                enable: false,
              },
              move: {
                speed: 4,
                out_mode: "out",
              },
              shape: {
                type: ["image"],
                image: [
                  {
                    src:
                      "data:image/png;base64,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",
                    height: 20,
                    width: 23,
                  },
                  {
                    src:
                      "https://cloud.netlifyusercontent.com/assets/344dbf88-fdf9-42bb-adb4-46f01eedd629/e476b570-dabe-4d53-af4f-f448efcd65fe/css3.jpg",
                    width: 23,
                  },
                  {
                    src:
                      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/480px-JavaScript-logo.png",
                    height: 20,
                    width: 20,
                  },
                  {
                    src:
                      "data:image/png;base64,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",
                    height: 20,
                    width: 20,
                  },
                ],
              },
              color: {
                value: "#fff",
              },
              size: {
                value: 30,
                random: false,
                anim: {
                  enable: true,
                  speed: 20,
                  size_min: 10,
                  sync: false,
                },
              },
            },
            retina_detect: false,
          }}
        ></Particles>
      </Box>
      <Box className="home">
        <Heading size="xs" style={{ color: "white" }}>
          WELCOME TO MY WORLD
        </Heading>
        <Heading paddingTop="20px" size="3xl" style={{ color: "green" }}>
          I'm a Heading
        </Heading>
        <Heading
          paddingTop="20px"
          paddingBottom="20px"
          size="2xl"
          style={{ color: "red" }}
        >
          <Typical
            steps={[
              "JS DEVELOPER",
              2500,
              "UI/UX DESIGNER",
              2500,
              "PRODUCT DESIGNER",
              2500,
            ]}
            loop={Infinity}
            wrapper="p"
            color="red"
          />
        </Heading>
        <Heading size="md" style={{ color: "white" }}>
          based in Viet Nam
        </Heading>
      </Box>
    </Box>
  );
}

export default Home;
