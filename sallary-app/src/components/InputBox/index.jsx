import React from "react";
import { Box } from '@material-ui/core';
import TypographyComponent from "../Typography";
import SelectorForm from "../Selector";

const InputBox = ({initialValues ,name ,typographyComponentName,numberOfEmployees, label , value , rename}) => {
  
  const inputGenerator = (value) => {
    console.log(value);
   return Array(value).fill(null).map(item => (
      <Box>
        <Box>
         In developing
        </Box>
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
// const obj = {
// 'prop1': 'foo',
// 'prop2': 'bar'
//}
//console.log(obj['prop'])
// initialValues['']
export default InputBox;