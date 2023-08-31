import { Divider, Navbar, Stack, Tooltip } from "@mantine/core";
import React from "react";
import { IconCategory, IconCreditCard, IconHome, IconPackage } from "@tabler/icons-react";
import Link from "next/link";

const SidebarAdmin = () => {
  return (
    <Navbar width={{ base: "auto" }}>
      <Stack py={16} px={24} spacing={18}>
        <Link href="/admin/dashboard">
          <Tooltip label="Home" position="right">
            <IconHome />
          </Tooltip>
        </Link>
        <Divider />
        <Link href="/admin/product-category">
          <Tooltip label="Product Category" position="right">
            <IconCategory />
          </Tooltip>
        </Link>
        <Link href="/admin/product">
          <Tooltip label="Product" position="right">
            <IconPackage />
          </Tooltip>
        </Link>
        <Link href="/admin/transaction">
          <Tooltip label="Transaction" position="right">
            <IconCreditCard />
          </Tooltip>
        </Link>
      </Stack>
    </Navbar>
  );
};

export default SidebarAdmin;
