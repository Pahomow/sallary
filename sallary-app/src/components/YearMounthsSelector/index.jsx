import {dateSelector} from '../../utils/consts'
import SelectorForm from '../../components/Selector'
import {Box} from '@material-ui/core'
import TypographyComponent from "../Typography";
import { Formik, Form,} from "formik";
import ButtonComponent from '../Button';

const DataSelector = ({label ,selector, initialValues}) => {
    return(
        <Formik
        validateOnChange={true}
        initialValues={initialValues}
        // validationSchema={validationSchema}
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
                {label? <TypographyComponent title={label} /> : null}
                    <Box>
                        <SelectorForm selector={selector.mounths} name="mounths" initialState={values.mounth} />
                        <SelectorForm selector={selector.years} name="years"initialState={values.years} />
                        <ButtonComponent title="submit"/>
                    </Box>

            </Box>
            </Form>
              )}
        </Formik>
    )
}

export default DataSelector