import Default from "@/components/templates/Default/Default";
import { Button, Select, Stack, TextInput, Title } from "@mantine/core";
import { Form, Formik } from "formik";
import React from "react";
import { productCategoryModelProps } from "../../../server/models/productCategory.model";

export interface postProductCategory {
  name: string;
  active: boolean;
}

const TambahProductCategoryPage = () => {
  return (
    <Default title="Tambah Product Category">
      <Stack>
        <Title>Tambah Product Category</Title>
        <Formik
          initialValues={{ name: "", active: false }}
          onSubmit={(values: postProductCategory) => console.log(values)}
        >
          {({ handleSubmit, values, setFieldValue }) => (
            <Form onSubmit={handleSubmit}>
              <Stack w={"100%"}>
                <TextInput label="Name" />
                <Select
                  label="Active"
                  data={[
                    { label: "True", value: "true" },
                    { label: "False", value: "false" },
                  ]}
                />
                <Button variant="default">Submit</Button>
              </Stack>
            </Form>
          )}
        </Formik>
      </Stack>
    </Default>
  );
};

export default TambahProductCategoryPage;
