import { Field, FieldArray} from "formik";
import { Select, MenuItem, Box} from "@material-ui/core";
import TypographyComponent from "../Typography";
const SelectorForm = ({ selector , label, name }) => {
    return (
        <Box>
        {label? <TypographyComponent title={label} /> : null}
        <FieldArray name={name}>
        {arrayHelpers => (
        <Box>
                <Field
                
                    key={name}
                    name={name} 
                    as={Select}
                >
                    {selector.map(item => <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)}
                </Field>
       </Box>
        )}
       </FieldArray>
    </Box>
    )
}

export default SelectorForm
