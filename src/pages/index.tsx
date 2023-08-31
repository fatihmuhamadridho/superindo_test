import Default from "@/components/templates/Default/Default";
import { withAuth } from "@/hooks/auth/auth";
import React from "react";

const HomePage = () => {
  return <Default title="Homepage">HomePage</Default>;
};

export default withAuth(HomePage);
