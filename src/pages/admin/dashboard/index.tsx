import DefaultAdmin from "@/components/templates/DefaultAdmin/DefaultAdmin";
import { withAuth } from "@/hooks/auth/auth";
import { Paper, Text } from "@mantine/core";
import React from "react";

const HomePage = () => {
  return (
    <DefaultAdmin title="Dashboard">
      <Paper bg={"dark"} py={12} px={24} radius={8}>
        <Text fz={24} fw={500} color="white">
          Selamat Datang!
        </Text>
        <Text fz={16} fw={400} color="white">
          Ini adalah aplikasi untuk memanajemen database
        </Text>
      </Paper>
    </DefaultAdmin>
  );
};

export default withAuth(HomePage);
