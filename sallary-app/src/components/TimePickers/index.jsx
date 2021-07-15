import React from 'react';
import {
    Field 
  } from "formik";
import DatePicker from "react-datepicker";  
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

export default FormDatePicker
