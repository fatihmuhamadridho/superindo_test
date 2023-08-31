import Navbar from "@/components/organisms/Navbar/Navbar";
import Sidebar from "@/components/organisms/Sidebar/Sidebar";
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
        <Flex>
          <Sidebar />
          <Box w={"100%"} p={16}>
            {children}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default Default;
