import * as React from 'react';
// import {render} from 'react-dom';
import Button from '@material-ui/core/Button';
import {Formik, Field, Form} from 'formik';
import {MenuItem} from '@material-ui/core';
import {TextField, Select} from 'formik-material-ui';
import DateFnsUtils from '@date-io/date-fns'; // choose your lib
import {DatePicker, MuiPickersUtilsProvider} from 'material-ui-pickers';
// import FormControl from '@material-ui/core/FormControl';
// import FormHelperText from '@material-ui/core/FormHelperText';


const ranges = [
  {
    value: 'none',
    label: 'None',
  },
  {
    value: '0-20',
    label: '0 to 20',
  },
  {
    value: '21-50',
    label: '21 to 50',
  },
  {
    value: '51-100',
    label: '51 to 100',
  },
];

// const Container = () => <App age="0-20" data="20"/>;
// const today = new Date();
const age = "0-20"
const data = "20"
export const SelectorForm = ({age, data}) => (
  <Formik
    initialValues={{
      firstName: '',
      lastName: '',
      select: age,
      selectSecond: data,
      multiSelect: [],
      joinedAt: null,
    }}
    onSubmit={(values, {setSubmitting}) => {
      setTimeout(() => {
        setSubmitting(false);
        alert(JSON.stringify(values, null, 2));
      }, 500);
    }}
    render={({
      submitForm,
      isValid,
      isSubmitting,
      values,
      setFieldValue,
      errors,
    }) => (
      <Form>
        <Field
          name="firstName"
          label="First name *"
          component={TextField}
          fullWidth
        />

        <Field
          type="text"
          name="select"
          label="Age"
          select
          helperText="Please choose 21-50"
          margin="normal"
          component={TextField}
          fullWidth
        >
          {ranges.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <Field
          type="text"
          name="selectSecond"
          label="Data"
          select
          helperText="Please choose 21-50"
          margin="normal"
          component={TextField}
          fullWidth
        >
          {ranges.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        {/* <FormControl fullWidth error={!!errors.joinedAt}>
          <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <DatePicker
              name="joinedAt"
              value={values['joinedAt']}
              onChange={(e) => setFieldValue('joinedAt', e)}
              fullWidth
              minDate={today}
              clearable
              error={!!errors.joinedAt}
            />
          </MuiPickersUtilsProvider>
          <FormHelperText component="div">
            {!!errors.joinedAt && <div>{errors.joinedAt}</div>}
          </FormHelperText>
        </FormControl> */}
        <Field
          type="text"
          name="multiSelect"
          label="Multiple Select"
          select
          multiple
          helperText="Choose 2 options"
          component={Select}
          fullWidth
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </Field>
        <br />
        <Button
          variant="raised"
          color="primary"
          disabled={!isValid}
          onClick={submitForm}
        >
          Submit
        </Button>
      </Form>
    )}
  />
);

// render(<Container />, document.getElementById('root'));
