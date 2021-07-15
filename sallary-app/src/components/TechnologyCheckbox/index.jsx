// import * as React from 'react';
// // import {render} from 'react-dom';
// import Button from '@material-ui/core/Button';
// import {Formik, Field, Form} from 'formik';
// import {MenuItem , Select} from '@material-ui/core';

// // import FormControl from '@material-ui/core/FormControl';
// // import FormHelperText from '@material-ui/core/FormHelperText';


// const ranges = [
//   {
//     value: 'none',
//     label: 'None',
//   },
//   {
//     value: '0-20',
//     label: '0 to 20',
//   },
//   {
//     value: '21-50',
//     label: '21 to 50',
//   },
//   {
//     value: '51-100',
//     label: '51 to 100',
//   },
// ];

// // const Container = () => <App age="0-20" data="20"/>;
// // const today = new Date();
// const age = "0-20"
// const data = "20"
// export const SelectorForm = ({age, data}) => (
//   <Formik
//     initialValues={{
//       firstName: '',
//       lastName: '',
//       select: age,
//       selectSecond: data,
//       multiSelect: [],
//       joinedAt: null,
//     }}
//     onSubmit={(values, {setSubmitting}) => {
//       setTimeout(() => {
//         setSubmitting(false);
//         alert(JSON.stringify(values, null, 2));
//       }, 500);
//     }}
//     render={({
//       submitForm,
//       isValid,
//       isSubmitting,
//       values,
//       setFieldValue,
//       errors,
//     }) => (
//       <Form>
//         <Field
//           type="text"
//           name="multiSelect"
//           label="Multiple Select"
//           select
//           multiple
//           helperText="Choose 2 options"
//           component={Select}
//           fullWidth
//         >
//           {ranges.map(option => (
//             <MenuItem key={option.value} value={option.value}>
//               {option.label}
//             </MenuItem>
//           ))}
//         </Field>
//         <br />
//         <Button
//           variant="raised"
//           color="primary"
//           disabled={!isValid}
//           onClick={submitForm}
//         >
//           Submit
//         </Button>
//       </Form>
//     )}
//   />
// );

// // render(<Container />, document.getElementById('root'));
