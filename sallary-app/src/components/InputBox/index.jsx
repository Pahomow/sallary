import React, { useState } from "react";
import { Formik, Form,} from "formik";
import * as yup from "yup";
// import MyRadio from '../../RadioBox'
import {MyTextField} from '../MyTextField'
// import {radio , selector} from '../../../utils/consts'
// import SelectorForm from '../../Selector'
import {Box, Button } from '@material-ui/core';
import { Field, FieldArray} from "formik";
import TypographyComponent from "../Typography";
import SelectorForm from "../Selector";

const InputBox = ({initialValues , title}) => {
// const positions = ["Разработчики","QA","Дизайнеры","Бизнес аналитики"]  
   const [data , setData] = useState(null)
   const countInput = (number) => {
    {initialValues.developers.map(item => console.log(item))}
   }
  return (

     <FieldArray>
      <Box>
        <Box>
            {/* <TypographyComponent title="Разработчик"/>
            <SelectorForm title="Разработчик" name="select" initialState={values.select} selector={selector.team}/> */}
        </Box>  
      </Box> 
     </FieldArray> 
  );
};

export default InputBox;