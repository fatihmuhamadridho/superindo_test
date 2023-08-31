import { authState, onLogout } from "@/redux/features/authSlice/auth.slice";
import { Avatar, Flex, Group, Header, Menu, Text } from "@mantine/core";
import { IconLogout } from "@tabler/icons-react";
import Link from "next/link";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Navbar = () => {
  const dispatch: any = useDispatch();
  const authData: authState = useSelector((state: any) => state.auth);

  const handleLogout = () => {
    dispatch(onLogout());
  };

  return (
    <Header height={60}>
      <Flex px={16} mx={"auto"} h={"100%"} align={"center"} justify={"space-between"}>
        <Link href={"/"}>
          <Group spacing={2}>
            <Avatar size={40} />
            <Text>Superindo CMS</Text>
          </Group>
        </Link>
        <Menu>
          <Menu.Target>
            <Text className="cursor-pointer">{authData.data?.username}</Text>
          </Menu.Target>
          <Menu.Dropdown>
            <Menu.Item w={150} onClick={handleLogout}>
              <Group spacing={4}>
                <IconLogout />
                <Text>Logout</Text>
              </Group>
            </Menu.Item>
          </Menu.Dropdown>
        </Menu>
      </Flex>
    </Header>
  );
};

export default Navbar;
