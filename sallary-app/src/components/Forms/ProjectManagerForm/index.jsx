// const ProjectManagerForm = ({initialValues, projectManagers}) => {
//     return (
//      <>
//      1
//      </>   
//     )
// }
// export default ProjectManagerForm

import React from "react";
import { Formik, Form,} from "formik";
import * as yup from "yup";
import MyRadio from '../../RadioBox'
import {MyTextField} from '../../MyTextField'
import {radio , selector} from '../../../utils/consts'
import SelectorForm from '../../SelectorForm'
import {Box} from '@material-ui/core';
import ListComponent from "../../List";
import ButtonComponent from "../../Button";
import TypographyComponent from "../../Typography";

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  data: yup
  .number()
});
//
const ProjectManagerForm = ({initialValues, projectManagers}) => {

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
                <SelectorForm label="Project manager" name="select" initialState={values.client} selector={selector.team}/>                         
            </Box>
            <Box>
                <ListComponent/>
            </Box>
            <Box>
                <SelectorForm label="Добавить новый проект  " name="select" initialState={values.client} selector={selector.team}/>                         
                <ButtonComponent disabled={isSubmitting}  title= 'Добавить' />
            </Box>
            <Box>
              <MyTextField label="Добавить нового PM" placeholder="Введите ФИО нового сотрудника" name="name" />
            </Box>
            <Box>
                <ButtonComponent title="Добавить"/>
            </Box>  
            {/* <Box>
             <TypographyComponent title="Сотрудничает с юридическим лицом:"/>   
            {radio.countries.map(item =>  <MyRadio name="countries" type="radio" value={item.value} label={item.label} key={item.key} />)}              
            </Box> */}
            {/* <Box>
                <ButtonComponent title="Добавить"/>
            </Box> */}
            <Box>
                <SelectorForm label="Удалить PM" name="remove" initialState={values.removeClient} selector={selector.team}/>                         
            </Box>              
            <Box>
              <ButtonComponent disabled={isSubmitting}  title= 'Удалить' />
            </Box>
            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
      </Box> 
  );
};

export default ProjectManagerForm