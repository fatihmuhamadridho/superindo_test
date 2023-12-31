import DataTable, { DataTableHeaderProps } from "@/components/atoms/DataTable";
import DefaultAdmin from "@/components/templates/DefaultAdmin/DefaultAdmin";
import { getAllProductCategory } from "@/redux/features/productCategorySlice/productCategory.action";
import { productCategoryState } from "@/redux/features/productCategorySlice/productCategory.slice";
import { Badge, Button, Flex, Group, Stack, Text, Title } from "@mantine/core";
import { IconPencil, IconTrash } from "@tabler/icons-react";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { withAuth } from "@/hooks/auth/auth";
import { productCategoryModelProps } from "../../../../server/models/productCategory.model";

const ProductCategoryPage = () => {
  const router = useRouter();
  const dispatch: any = useDispatch();
  const productCategoryData: productCategoryState = useSelector(
    (state: any) => state.productCategory
  );

  console.log({ productCategoryData });

  useEffect(() => {
    dispatch(getAllProductCategory());
  }, [dispatch]);

  const renderActive = (values: productCategoryModelProps) => (
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
      label: "Name",
      key: "name",
    },
    {
      label: "Active",
      key: renderActive,
    },
    {
      label: "Actions",
      key: renderActions,
    },
  ];

  return (
    <DefaultAdmin title="Product Category">
      <Stack>
        <Title>Product Category Data</Title>
        <Flex>
          <Button
            variant="default"
            onClick={() => router.push("/admin/product-category/tambah-product-category")}
          >
            Tambah Product Category
          </Button>
        </Flex>
        <DataTable header={tableHeader} data={productCategoryData?.data} />
      </Stack>
    </DefaultAdmin>
  );
};

export default withAuth(ProductCategoryPage);
