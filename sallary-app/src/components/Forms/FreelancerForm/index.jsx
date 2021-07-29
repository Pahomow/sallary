import React from "react";
import {Formik,Field,Form,FieldArray} from "formik";
// import useStyles from './style'
import * as yup from "yup";
import FormDatePicker from "../../TimePickers"
import {MyTextField} from "../../MyTextField"
import ButtonComponent from '../../Button'
import MyRadio from '../../RadioBox'
import { radio , knowledgeStack} from '../../../utils/consts'
import Box from '@material-ui/core/Box';
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
            {console.log(values)} 
            <Box>
              <MyTextField label="Freelancer" placeholder="Фамилия Имя Отчество" name="freelancerName" />
            </Box>
            <Box>
              <CheckboxComponent arrayFromSelect={knowledgeStack}/>
            </Box>
            <Box>
              {radio.freelancers.map(item =>  <MyRadio name="freelancers" type="radio" value={item.value} label={item.label} key={item.key} />)}
            </Box>
            {values.freelancers === "rate" ? (
                        <Box>
                          <MyTextField label="Рейт" placeholder="Рейт" name="rateScope" />   
                        </Box>
            ):          <Box>
                          <MyTextField label="Фиксированная ставка" placeholder="Фиксированная ставка" name="FixedScope" />   
                        </Box>}
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
