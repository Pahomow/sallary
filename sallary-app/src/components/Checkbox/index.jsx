import { Box } from '@material-ui/core';
import { Field, FieldArray} from "formik";
import TypographyComponent from '../Typography';

const CheckboxComponent= ({arrayFromSelect}) => (
    <FieldArray >  
      {arrayHelpers => (
        <Box>
          <Box role="group" aria-labelledby="checkbox-group">
            <TypographyComponent title="Технологии"/>
            {arrayFromSelect.map( item => (
            <label>
              <Field type="checkbox" name="knowledgeStack" value={item} />
              {item}
            </label>
            ))}         
          </Box>
        </Box>
      )}
      </FieldArray>
);

export default CheckboxComponent