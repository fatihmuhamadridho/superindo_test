import { Avatar, Button, Divider, Flex, Group, Header, Menu, Text } from "@mantine/core";
import { IconLogout, IconShoppingCart } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <Header height={60} bg={"#DC251F"}>
      <Flex px={16} maw={1208} mx={"auto"} h={"100%"} align={"center"} justify={"space-between"}>
        <Link href={"/"}>
          <Group spacing={8}>
            <Avatar src={"favicon.ico"} size={40} />
            <Text fz={22} fw={700} color="white" transform={"uppercase"}>
              Superindo
            </Text>
          </Group>
        </Link>
        <Group>
          <IconShoppingCart className="cursor-pointer" color="white" />
          <Divider orientation="vertical" />
          <Group spacing={4}>
            <Button px={12} variant="white" bg={"none"}>
              <Text color="white">Masuk</Text>
            </Button>
            <Button className="border-none" px={12} variant="white" bg={"#9A1916"}>
              <Text color="white">Daftar</Text>
            </Button>
          </Group>
          {/* <Menu>
            <Menu.Target>
              <Text className="cursor-pointer" color="white">
                awdaa
              </Text>
            </Menu.Target>
            <Menu.Dropdown>
              <Menu.Item w={100}>
                <Group spacing={4}>
                  <IconLogout />
                  <Text>Logout</Text>
                </Group>
              </Menu.Item>
            </Menu.Dropdown>
          </Menu> */}
        </Group>
      </Flex>
    </Header>
  );
};

export default Navbar;
