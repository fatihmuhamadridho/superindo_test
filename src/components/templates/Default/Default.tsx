import Footer from "@/components/organisms/Footer/Footer";
import Navbar from "@/components/organisms/Navbar/Navbar";
import { Container, Flex } from "@mantine/core";
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
      <Container fluid p={0} mx={0} bg={"#f5f5f5"}>
        <Navbar />
        <Flex
          className="overflow-hidden"
          direction={"column"}
          maw={1208}
          mih={"calc(100vh - 60px - 35px)"}
          mx={"auto"}
          w={"100%"}
          p={16}
        >
          {children}
        </Flex>
        <Footer />
      </Container>
    </>
  );
};

export default Default;
