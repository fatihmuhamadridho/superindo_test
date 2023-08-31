import DataTable, { DataTableHeaderProps } from "@/components/atoms/DataTable";
import DefaultAdmin from "@/components/templates/DefaultAdmin/DefaultAdmin";
import { Badge, Stack, Title } from "@mantine/core";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "@/hooks/auth/auth";
import { getAllTransaction } from "@/redux/features/transactionSlice/transaction.action";
import { transactionState } from "@/redux/features/transactionSlice/transaction.slice";
import { transactionModelProps } from "../../../../server/models/transaction.model";

const TransactionPage = () => {
  const dispatch: any = useDispatch();
  const transactionData: transactionState = useSelector((state: any) => state.transaction);

  console.log({ transactionData });

  useEffect(() => {
    dispatch(getAllTransaction());
  }, [dispatch]);

  const renderActive = (values: transactionModelProps) => (
    <Badge>{values.active ? "True" : "False"}</Badge>
  );

  const tableHeader: DataTableHeaderProps[] = [
    {
      label: "No",
      key: "index",
    },
    {
      label: "Name",
      key: "name",
    },
    {
      label: "Active",
      key: renderActive,
    },
  ];

  return (
    <DefaultAdmin title="Transaction">
      <Stack>
        <Title>Transaction Data</Title>
        <DataTable header={tableHeader} data={transactionData?.data} />
      </Stack>
    </DefaultAdmin>
  );
};

export default withAuth(TransactionPage);
