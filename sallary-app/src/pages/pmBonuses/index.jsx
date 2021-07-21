import Table from "../../components/Tables/Table"
import { columns } from "../../utils/consts"
import { bonuses, managers  } from "../../mocks"
import {Grid, Box} from '@material-ui/core';
import  TypographyComponent  from '../../components/Typography';
const PmBonuses = () => {
    return (
        <Grid>
           {managers.pm.map(item => {
               return (
                   <Box>
                        <TypographyComponent key={item.id} title={item.name}/>
                       <Table label="sdafd" columns={columns.bonuses} rows= {bonuses}/>
                   </Box>
               )
               })} 
        </Grid>
    )
    }
    
    export default PmBonuses