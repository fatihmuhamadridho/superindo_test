import DataTable, { DataTableHeaderProps } from "@/components/atoms/DataTable";
import DefaultAdmin from "@/components/templates/DefaultAdmin/DefaultAdmin";
import { Badge, Button, Flex, Group, Stack, Title } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "@/hooks/auth/auth";
import { getAllProduct } from "@/redux/features/productSlice/product.action";
import { productState } from "@/redux/features/productSlice/product.slice";
import { productModelProps } from "../../../../server/models/product.model";

const ProductPage = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const productData: productState = useSelector((state: any) => state.product);

  console.log({ productData });

  useEffect(() => {
    dispatch(getAllProduct());
  }, [dispatch]);

  const renderActive = (values: productModelProps) => (
    <Badge>{values.active ? "True" : "False"}</Badge>
  );

  const renderActions = (values: any) => (
    <Group spacing={4}>
      <IconPencil />
      <IconTrash />
    </Group>
  );

  const tableHeader: DataTableHeaderProps[] = [
    {
      label: "No",
      key: "index",
    },
    {
      label: "plu",
      key: "plu",
    },
    {
      label: "name",
      key: "name",
    },
    {
      label: "product_category_id",
      key: "product_category_id",
    },
    {
      label: "Active",
      key: renderActive,
    },
    {
      label: "created_user",
      key: "created_user",
    },
    {
      label: "updated_user",
      key: "updated_user",
    },
    {
      label: "created_date",
      key: "created_date",
    },
    {
      label: "updated_date",
      key: "updated_date",
    },
    {
      label: "Actions",
      key: renderActions,
    },
  ];

  return (
    <DefaultAdmin title="Product">
      <Stack>
        <Title>Product Data</Title>
        <Flex>
          <Button variant="default" onClick={() => router.push("/admin/product/tambah-product")}>
            Tambah Product
          </Button>
        </Flex>
        <DataTable header={tableHeader} data={productData?.data} />
      </Stack>
    </DefaultAdmin>
  );
};

export default withAuth(ProductPage);
