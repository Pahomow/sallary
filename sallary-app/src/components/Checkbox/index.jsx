import { Box } from '@material-ui/core';
import { Field, FieldArray} from "formik";
import { knowledgeStack } from '../../utils/consts';

const CheckboxComponent= ({state}) => (
    <FieldArray >  
      {arrayHelpers => (
        <Box>
          <Box role="group" aria-labelledby="checkbox-group">
            {knowledgeStack.map( item => (
            <label>
              <Field type="checkbox" name="knowledgeStack" value={item} />
              {item}
            </label>
            ))}         
          </Box>
          <button type="submit">Submit</button>
        </Box>
      )}
      </FieldArray>
);

export default CheckboxComponent