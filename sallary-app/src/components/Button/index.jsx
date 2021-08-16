import { Button } from "@material-ui/core";
const ButtonComponent = ({title,variant, onClick , disabled, color}) => {
    return (
        <Button type="submit" variant={variant} color={color} disabled={disabled} onClick={onClick}> {title} </Button>
    )
} 
export default ButtonComponent