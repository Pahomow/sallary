import React from "react";
import {Formik,Field,Form,FieldArray} from "formik";
import {Button,Select,MenuItem} from "@material-ui/core";
// import useStyles from './style'
import * as yup from "yup";
import FormDatePicker from "../../TimePickers"
import {MyTextField} from "../../MyTextField"
import ButtonComponent from '../../Button'
import MyRadio from '../../RadioBox'
import { radio ,selector} from '../../../utils/consts'
import Box from '@material-ui/core/Box';
import TechnologyCheckbox from "../../Usefull/TechnologyCheckboxUpper";
import CheckboxComponent from "../../Checkbox";


const validationSchema = yup.object({
  freelancerName: yup
    .string()
    .required()
    .max(10),
});

const FreelancerForm = ({initialValues}) => {

  return (
    <Box>
      <Formik
        validateOnChange={true}
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(data, { setSubmitting }) => {
          setSubmitting(true);
          console.log("submit: ", data);
          setSubmitting(false);
        }}
      >
        {({ values, errors, isSubmitting }) => (
          <Form>
            <Box>
              <MyTextField label="Freelancer" placeholder="Фамилия Имя Отчество" name="freelancerName" />
            </Box>
            <Box>
              <TechnologyCheckbox state={initialValues} name="multiSelect"/>
            </Box>
            <Box>
              <CheckboxComponent state={initialValues}/>
            </Box>
            <Box>
              {radio.freelancers.map(item =>  <MyRadio name="freelancers" type="radio" value={item.value} label={item.label} key={item.key} />)}
            </Box>
            <Box>
            <FieldArray name="project">
              {arrayHelpers => (
                <Box>
                  {values.project.map((project, index) => {
                    console.log(values)
                    return (
                      <Box key={project.id}>
                        <Field
                          key={project.id}
                          name={`project.${index}.type`}
                          select="value"
                          // select={`project.${index}.type`}
                          type="select"
                          as={Select}
                        >
                        {selector.freelancers.map(item => <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)}
                        </Field>
                        <Button onClick={() => arrayHelpers.remove(index)}>
                          x
                        </Button>
                      </Box>
                    );
                  })}
                  <Button
                   variant="outlined"
                    onClick={() =>
                      arrayHelpers.push({
                        type: "Project",
                        id: "" + Math.random()
                      })
                    }
                  >
                    Добавить проект
                  </Button>
                </Box>
              )}
            </FieldArray>
            </Box>
            
            <Box>
              <MyTextField label="Rate" placeholder="Рейт" name="rateScope" />   
            </Box>
            <Box> 
              <FormDatePicker />        
            </Box>
            <Box>
              <ButtonComponent disabled={isSubmitting} title="Отправить"/>     
            </Box>

            <pre>{JSON.stringify(values, null, 2)}</pre>
            <pre>{JSON.stringify(errors, null, 2)}</pre>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default FreelancerForm;
