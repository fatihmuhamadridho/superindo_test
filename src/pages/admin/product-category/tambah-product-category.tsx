import DefaultAdmin from "@/components/templates/DefaultAdmin/DefaultAdmin";
import { Button, Select, Stack, TextInput, Title } from "@mantine/core";
import { Form, Formik } from "formik";
import React from "react";

export interface postProductCategory {
  name: string;
  active: boolean;
}

const TambahProductCategoryPage = () => {
  return (
    <DefaultAdmin title="Tambah Product Category">
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
    </DefaultAdmin>
  );
};

export default TambahProductCategoryPage;
