import React from 'react';
import {
    Field 
  } from "formik";
import DatePicker from "react-datepicker";  
import "react-datepicker/dist/react-datepicker.css";
import TypographyComponent from "../Typography";


const FormDatePicker = ({label}) => {
  return (
    <Field name="startDate">
      {({ field, form: { setFieldValue } }) => {
        return (
          <>
              {label && <TypographyComponent title={label}/>}
              <DatePicker
                  {...field}
                  selected={field.value || null}
                  onChange={(val) => {
                      setFieldValue(field.name, val);
                  }}
              />
          </>

        );
      }}
    </Field>
  );
};

export default FormDatePicker
