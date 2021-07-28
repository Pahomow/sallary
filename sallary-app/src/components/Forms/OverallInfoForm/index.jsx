import React from "react";
import { Formik, Form,} from "formik";
import * as yup from "yup";
import {MyTextField} from '../../MyTextField'
import SelectorForm from '../../Selector'
import {Box, Button,Grid} from '@material-ui/core';
import InputBox from "../../InputBox";
import FormDatePicker from '../../TimePickers'
import CheckboxComponent from "../../Checkbox";
import {knowledgeStack} from '../../../utils/consts'
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
const OverallInfoForm = ({initialValues,selector}) => {
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
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <Box>
                  <MyTextField label="Номер проекта" placeholder="Введите порядковый номер" name="name" />
                </Box>   
                <Box>
                  <SelectorForm label="Клиент" name="select" initialValues={values.select} selector={selector.team}/>                         
                </Box> 
                <Box>
                  <SelectorForm label="Название проекта" name="nameProject" initialValues={values.select} selector={selector.team}/>                         
                </Box>
                <Box>
                  <TypographyComponent title="Дата старта проекта"/>
                  <FormDatePicker/>
                </Box>
                <Box>
                  <SelectorForm label="Тип продажи" name="typeOfSale" initialValues={values.typeOfSale} selector={selector.team}/>                         
                </Box> 
                <Box>
                  <SelectorForm label="Тип проекта" name="typeOfProject" initialValues={values.typeOfProject} selector={selector.team}/>                         
                </Box> 
                <Box>
                  <SelectorForm label="Sales manager" name="smId" initialValues={values.smId} selector={selector.team}/>                         
                </Box> 
                <Box>
                  <SelectorForm label="Project manager" name="pmId" initialValues={values.pmId} selector={selector.team}/>                         
                </Box> 
              </Grid>

              <Grid item xs={6}>
                <CheckboxComponent arrayFromSelect={knowledgeStack}/>
                {selector.team.map((item) => (
                <InputBox initialValues={values} 
                          key={item.id}
                          label={item.label}
                          name={item.name} 
                          typographyComponentName={item.label} 
                          value={item.value} 
                          numberOfEmployees={selector.values}/>
                  ))}
              </Grid>
            </Grid>
            <Box>
              <Button disabled={isSubmitting} type="submit">
                submit
              </Button>
            </Box>
            {/* <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>   */}
          </Form>
        )}
      </Formik>
      </Box> 
  );
};

export default OverallInfoForm;



