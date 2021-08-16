import { Typography } from "@material-ui/core";

  const TypographyComponent = ({title}) => {
    return (      
        <Typography style={{marginTop: 40}} key={title} variant="h5" gutterBottom>
        {title}
        </Typography>
    )}
  

  export default TypographyComponent