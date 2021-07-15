import React from "react";
import { Formik, Form,} from "formik";
import * as yup from "yup";
import MyRadio from '../../RadioBox'
import {MyTextField} from '../../MyTextField'
import {radio , selector} from '../../../utils/consts'
// import ButtonComponent from "../../Button";
import SelectorForm from '../../SelectorForm'
import {Box, Button} from '@material-ui/core';

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  data: yup
  .number()
});
//
const OverallInfoForm = ({initialValues}) => {
  return (
      <Box>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          console.log("submit: ", data);
          setSubmitting(true);
          // make async call
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Box>
              <MyTextField label="Добавить нового сотрудника" placeholder="Введите ФИО нового сотрудника" name="name" />
            </Box>  
            <Box>
            {radio.team.map(item =>  <MyRadio name="employers" type="radio" value={item.value} label={item.label} key={item.key} />)}              
            </Box>
            <Box>
            <SelectorForm name="select" initialState={values.select} selector={selector.team}/>                         
            </Box>
            <Box>
            <MyTextField label="Данные о ЗП" placeholder="Введите данные о зарплате" name="data" />
            </Box>             
            <Box>
              {/* <ButtonComponent disabled={isSubmitting}  title= 'Добавить' /> */}
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

export default OverallInfoForm;