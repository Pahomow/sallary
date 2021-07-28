import React from "react";
import {ListFormik} from "../../ListFormik";
import MyRadio from '../../RadioBox'
import {MyTextField} from '../../MyTextField'
import SelectorForm from '../../Selector'
import ButtonComponent from "../../Button";
import TypographyComponent from "../../Typography";
import * as yup from "yup";
import { Formik, Form,} from "formik";
import {Box} from '@material-ui/core';
import {radio , selector} from '../../../utils/consts'

const validationSchema = yup.object({
  firstName: yup
    .string()
    .required()
    .max(10),
  data: yup
  .number()
});
//
const CustomerForm = ({initialValues}) => {

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
                <SelectorForm label="Клиент" name="select" initialState={values.client} selector={selector.team}/>                         
            </Box>
            <Box>
                <ListFormik removeButton="true" name="projects" initialValues={values.projects}/>            
            </Box>
            <Box>
              <MyTextField label="Добавить новый проект" placeholder="Введите ФИО нового сотрудника" name="name" />
            </Box>
            <Box>
              <ButtonComponent title="Добавить"/>
            </Box>  
            <Box>
              <Box>
                <MyTextField label="Добавить нового Клиента " placeholder="Добавить нового Клиента" name="client " />
              </Box>
              <Box>
                <TypographyComponent title="Сотрудничает с юридическим лицом:"/>   
                {radio.countries.map(item =>  <MyRadio name="countries" type="radio" value={item.value} label={item.label} key={item.key} />)}              
              </Box>
            </Box>
            <Box>
                <ButtonComponent title="Добавить"/>
            </Box>
            <Box>
                <SelectorForm label="Удалить клиента" name="remove" initialState={values.removeClient} selector={selector.team}/>                         
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

export default CustomerForm;