import React from "react";
import {
  Formik,
  Form,
} from "formik";
import {
  Button,
  Box,
} from "@material-ui/core";
import * as yup from "yup";
import { MyTextField } from "../../MyTextField";
import ButtonComponent from "../../Button";
import SelectorForm from "../../SelectorForm";
import { managers } from "../../../mocks";
import ListComponent from "../../List";
const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  pets: yup.array().of(
    yup.object({
      name: yup.string().required()
    })
  )
});

const SalesManagerForm = () => {
  return (
    <Box>
      <Formik
        validateOnChange={true}
        initialValues={{
          name: "",
          sm: [
            {type: 'Юля'}
        ]
        }}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <SelectorForm initialState={values.sm} selector={managers.sm} label="Sales manager"/>  
            <Box>
              <ListComponent/>  
            </Box>
            <Box>
              <SelectorForm initialState={values.sm} selector={managers.sm} label="Добавить новый проект"/> 
              <Button disabled={isSubmitting} type="submit">
                Добавить
              </Button>
            </Box>    
            <Box>
                <MyTextField label="Добавить нового Sales manager" placeholder="Введите имя нового Sales manager " name="name" />
                <ButtonComponent title='Добавить'/>
            </Box>

            <Box>
              <SelectorForm initialState={values.sm} selector={managers.sm} label="Удалить Sales manager"/> 
              <Button disabled={isSubmitting} type="submit">
                Удалить
              </Button>
            </Box> 
            
            <Box>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </Box>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Box>
  );
};


export default SalesManagerForm