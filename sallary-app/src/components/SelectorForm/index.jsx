import { Field, FieldArray} from "formik";
import { Select, MenuItem, Box} from "@material-ui/core";
import TypographyComponent from "../Typography";
const SelectorForm = ({initialState , selector , label, upgraded , name }) => {

    return (
        <>
        {label? <TypographyComponent title={label} /> : null}
        {console.log(name)}
        <FieldArray name={name}>
        {arrayHelpers => (
        <Box>
                <Field
                    key={name}
                    name={name}
                    type={name}
                    // select ="prog"
                    // value="middle"
                    as={Select}
                >
                    {selector.map(item => <MenuItem key={item.id} value={item.value}>{item.label}</MenuItem>)}
                </Field>
       </Box>
        )}
       </FieldArray>
    </>
    )
}

export default SelectorForm

{/* { upgraded ? <ButtonComponent title="x" onClick={() => arrayHelpers.remove(index)}/> : null }      
{ upgraded ? <ButtonComponent title="Добавить проект"  onClick={() => arrayHelpers.push({type: "Project 1", id: "" + Math.random() })}/>: null}
{console.log(arrayHelpers)} */}