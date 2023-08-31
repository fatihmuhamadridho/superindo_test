import Default from "@/components/templates/Default/Default";
import { Box, Button, Flex, Group, Image, Paper, Stack, Text } from "@mantine/core";
import React from "react";

const ProductDetailPage = () => {
  return (
    <Default title="{{nama product}}">
      <Stack spacing={24}>
        <Flex align="start" justify={"space-between"} gap={24}>
          <Box className="rounded-[8px] overflow-hidden" maw={348} w={"100%"}>
            <Image src={"https://picsum.photos/200"} alt="random-image" width={348} height={348} />
          </Box>
          <Paper p={16} w={"100%"} h={348} radius={8}>
            <Text fz={24} fw={500}>{`{{ Nama Product }}`}</Text>
          </Paper>
          <Paper p={16} radius={8}>
            <Flex>
              <Text>Subtotal</Text>
              <Text>Rp 120010</Text>
            </Flex>
            <Button variant="default">+ Keranjang</Button>
          </Paper>
        </Flex>
      </Stack>
    </Default>
  );
};

export default ProductDetailPage;
