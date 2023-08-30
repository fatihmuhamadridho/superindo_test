import { withAuth } from "@/hooks/auth/auth";
import React from "react";

const HomePage = () => {
  return <div>HomePage</div>;
};

export default withAuth(HomePage);
