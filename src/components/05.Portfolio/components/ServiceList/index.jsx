import { Grid, GridItem } from "@chakra-ui/react";
import React from "react";
import Service1 from "../Service";

ServiceList.propTypes = {};

function ServiceList(props) {
  const { color } = props;
  const { todoList1 } = props;
  const { serviceProps } = props;

  return (
    <Grid
      alignItems="center"
      justifyItems="center"
      h="800px"
      templateRows="repeat(2, 1fr)"
      templateColumns="repeat(3, 1fr)"
      gap={10}
    >
      {serviceProps.map((service) => (
        <GridItem
          rowSpan={1}
          colSpan={1}
          height="20rem"
          width="20rem"
          key={service.id}
        >
          <Service1 service={service} />
        </GridItem>
      ))}
    </Grid>
  );
}

export default ServiceList;
