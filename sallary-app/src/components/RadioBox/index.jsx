import { Radio, FormControlLabel } from "@material-ui/core";
import { useField } from "formik";

const MyRadio = ({ label,key, ...props  }) => {
    const [field] = useField(props);
    return <FormControlLabel key={key} {...field} control={<Radio key={key}/>} label={label} />;
  };
export default MyRadio  