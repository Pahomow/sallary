import React from "react";
import { Formik, Form, Field } from "formik";
import DatePicker from "react-datepicker";
import * as Yup from "yup";

import "react-datepicker/dist/react-datepicker.css";

const FormDatePicker = (props) => {
  return (
    <Field name="startDate">
      {({ field, meta, form: { setFieldValue } }) => {
        return (
          <DatePicker
            {...field}
            selected={field.value || null}
            onChange={(val) => {
              setFieldValue(field.name, val);
            }}
          />
        );
      }}
    </Field>
  );
};

const App = () => {
  return (
    <Formik
      initialValues={{
        startDate: ""
      }}
      validationSchema={Yup.object().shape({
        startDate: Yup.date()
          .nullable()
          .required("Start Date is required")
          .min(new Date(), "Start Date must be later than today")
      })}
    >
      {(props) => {
        return (
          <Form>
            <pre>{JSON.stringify(props, null, 2)}</pre>
            <FormDatePicker />
          </Form>
        );
      }}
    </Formik>
  );
};

export default App;