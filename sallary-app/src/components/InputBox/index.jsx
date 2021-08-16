import React from "react";
import { Box } from '@material-ui/core';
import TypographyComponent from "../Typography";
import SelectorForm from "../Selector";

const InputBox = ({initialValues ,name ,typographyComponentName,numberOfEmployees, label , value , rename}) => {
  
  const inputGenerator = (value) => {
   return Array(value).fill(null).map(item => (
        <Box>
         In developing
        </Box>
   ))}
  
  return ( 
        <Box>
            <TypographyComponent key={typographyComponentName} title={typographyComponentName}/>
            <SelectorForm  name={name} initialState={initialValues} selector={numberOfEmployees}/>
            {initialValues.hasOwnProperty(`${name}`) && inputGenerator(2)}
        </Box> 
        )
};

export default InputBox;