import React from "react";
import {
  useField,
} from "formik";
import {
  TextField,
} from "@material-ui/core";
import TypographyComponent from "../Typography";
export const MyTextField = ({
    placeholder,
    label,
    // name,
    ...props
  }) => {
    const [field, meta] = useField(props);
    const errorText = meta.error && meta.touched ? meta.error : "";
    return (
      <>
      <TypographyComponent title={label}/>
      <TextField
        placeholder={placeholder}
        name={props.name}
        // variant="outlined"
        // label={label}
        {...field}
        helperText={errorText}
        error={!!errorText}
      />
      </>
    );
  };