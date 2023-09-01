import { useRouter } from "next/router";
import React, { useEffect } from "react";

const AdminPage = () => {
  const router = useRouter();

  useEffect(() => {
    router.push("/login");
  }, [router]);

  return undefined;
};

export default AdminPage;
