import React, { useState } from "react";
import { Formik, Form,} from "formik";
import * as yup from "yup";
import {MyTextField} from '../MyTextField'
import {Box, Button } from '@material-ui/core';
import { Field, FieldArray} from "formik";
import TypographyComponent from "../Typography";
import SelectorForm from "../Selector";

const InputBox = ({initialValues ,name ,typographyComponentName,numberOfEmployees, label , value , rename}) => {
  // console.log(initialValues.hasOwnProperty(`${name}`));
  
  const inputGenerator = (value) => {
    console.log(value);
   return Array(value).fill(null).map(item => (
      <Box>
        {/* <MyTextField key={item} placeholder="sdsad" label= "dsdsad"/> */}
        <Box>
        In developing
        </Box>
      </Box>
   ))}
  const [data , setData] = useState([{id:1},{id:2}])
  return ( 
        <Box>
            <TypographyComponent key={typographyComponentName} title={typographyComponentName}/>
            <SelectorForm  name={name} initialState={initialValues} selector={numberOfEmployees}/>
            {initialValues.hasOwnProperty(`${name}`) && inputGenerator(2)}
        </Box> 
        )
};

export default InputBox;