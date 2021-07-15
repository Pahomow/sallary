import { Button } from "@material-ui/core";
const ButtonComponent = ({title, handleClick , disabled}) => {
    return (
        <Button type="submit" disabled={disabled} onClick={handleClick}> {title} </Button>
    )
} 
export default ButtonComponent