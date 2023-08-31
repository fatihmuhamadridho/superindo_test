import Default from "@/components/templates/Default/Default";
import { Box, Image, Paper, SimpleGrid, Stack, Text } from "@mantine/core";
import { useRouter } from "next/router";
import React from "react";

const Homepage = () => {
  const router = useRouter();

  return (
    <Default title="Superindo | Lebih Segar, Lebih Hemat, Lebih Dekat">
      <Stack spacing={24}>
        <Box className="rounded-[16px] overflow-hidden">
          <Image src={"./images/banner-JSM35.jpeg"} alt="banner-superindo" />
        </Box>
        <SimpleGrid cols={6}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item, index) => (
            <Stack
              className="max-w-[200px] h-full rounded-[8px] cursor-pointer overflow-hidden shadow-[0_0.0625rem_0.125rem_0_rgba(0,0,0,.1)]"
              key={index}
              spacing={0}
              bg={"white"}
              onClick={() => router.push("/1")}
            >
              <Image
                src={"https://picsum.photos/200"}
                alt="random-image"
                width={"100%"}
                height={200}
              />
              <Paper p={8}>
                <Text fw={500}>Ini nama product nya</Text>
                <Text color="#DC251F">RP 10.599</Text>
              </Paper>
            </Stack>
          ))}
        </SimpleGrid>
      </Stack>
    </Default>
  );
};

export default Homepage;
