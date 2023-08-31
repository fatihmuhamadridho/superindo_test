import NavbarAdmin from "@/components/organisms/NavbarAdmin/NavbarAdmin";
import SidebarAdmin from "@/components/organisms/SidebarAdmin/SidebarAdmin";
import { Box, Container, Flex, Paper } from "@mantine/core";
import Head from "next/head";
import React from "react";

interface DefaultProps {
  title: string;
  children: React.ReactNode;
}

const DefaultAdmin = ({ title, children }: DefaultProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Container fluid p={0} mx={0}>
        <NavbarAdmin />
        <Flex>
          <SidebarAdmin />
          <Box w={"100%"} p={16}>
            {children}
          </Box>
        </Flex>
      </Container>
    </>
  );
};

export default DefaultAdmin;
