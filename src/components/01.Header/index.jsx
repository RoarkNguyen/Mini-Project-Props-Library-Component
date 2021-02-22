import { CalendarIcon, EditIcon, EmailIcon, SunIcon } from "@chakra-ui/icons";
import { Button, Link } from "@chakra-ui/react";

import React from "react";
import "./style.scss";

Header.propTypes = {};
function Header(props) {
  function handleClick(e) {
    console.log("The link was clicked.");
  }

  // const [condition, setCondition] = useState(false);
  return (
    <div className="header">
      <div className="header_left">
        <ul>
          <li className="">
            <a href="#link_to_home" onClick={handleClick}>
              Home
            </a>
          </li>
          <li className="">
            <a href="#link_to_about" onClick={handleClick}>
              About
            </a>
          </li>
          <li className="">
            <a href="#link_to_service" onClick={handleClick}>
              Service
            </a>
          </li>
          <li className="">
            <a href="#link_to_portfolio" onClick={handleClick}>
              Portfolio
            </a>
          </li>
        </ul>
      </div>
      <div className="header_right">
        <div className="header_icon">
          <Link className="icon">
            <CalendarIcon w={8} h={8} color="white" />
          </Link>
          <Link
            className="icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <EmailIcon w={8} h={8} color="white" />
          </Link>
          <Link
            className="icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <EditIcon w={8} h={8} color="white" />
          </Link>
          <Link
            className="icon"
            href="https://www.facebook.com/"
            target="_blank"
          >
            <SunIcon w={8} h={8} color="white" />
          </Link>
        </div>
        <div className="header_btn">
          <Link href="#link_to_contact">
            <Button>Contact</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
