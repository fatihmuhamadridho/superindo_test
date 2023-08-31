import DefaultAdmin from "@/components/templates/DefaultAdmin/DefaultAdmin";
import { withAuth } from "@/hooks/auth/auth";
import React from "react";

const HomePage = () => {
  return <DefaultAdmin title="Dashboard">HomePage</DefaultAdmin>;
};

export default withAuth(HomePage);
