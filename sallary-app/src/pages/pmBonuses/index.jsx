import Table from "../../components/Tables/Table"
import { columns , dateSelector} from "../../utils/consts"
import { bonuses, managers  } from "../../mocks"
import {Grid, Box} from '@material-ui/core';
import  TypographyComponent  from '../../components/Typography';
import DataSelector from "../../components/YearMounthsSelector";
const PmBonuses = () => {
    const initialValues = {
        years: "2020",
        mounths:"May",
      }
    return (
        <Grid>
             <Box>
                <DataSelector label="Выберите месяц отображения" selector={dateSelector} initialValues={initialValues} />
            </Box>
           {managers.pm.map(item => {
               return (
                <Box>
                   <Box>
                       <TypographyComponent key={item.id} title={item.name}/>
                       <Table label="sdafd" columns={columns.bonuses} rows= {bonuses}/>
                   </Box>
                </Box>
               )
               })} 
        </Grid>
    )
    }
    
    export default PmBonuses