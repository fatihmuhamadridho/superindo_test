import Navbar from "@/components/organisms/Navbar/Navbar";
import { Box, Container, Flex } from "@mantine/core";
import Head from "next/head";
import React from "react";

interface DefaultProps {
  title: string;
  children: React.ReactNode;
}

const Default = ({ title, children }: DefaultProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container fluid p={0} mx={0}>
        <Navbar />
        <Box w={"100%"} p={16}>
          {children}
        </Box>
      </Container>
    </>
  );
};

export default Default;
