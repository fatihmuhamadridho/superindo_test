import React from "react";
import { Flex, Footer as FooterCore, Text } from "@mantine/core";

const Footer = () => {
  return (
    <FooterCore py={8} px={16} height={"auto"} bg={"#9A1916"}>
      <Flex maw={1208} mx={"auto"} w={"100%"} h={"100%"} align={"center"} justify={"center"}>
        <Text fz={12} color="white">
          @copyright by Fatih Muhamad Ridho
        </Text>
      </Flex>
    </FooterCore>
  );
};

export default Footer;
