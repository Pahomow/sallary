// import Table from "../../components/Tables/Table"
// import { columns } from "../../utils/consts"
// import { bonuses } from "../../mocks"


// const SmBonuses = () => {
// return (
//     <>  
//     <Table columns={columns.bonuses} rows= {bonuses}/>
//     </>
// )
// }

// export default SmBonuses


import Table from "../../components/Tables/Table"
import { bonuses, managers  } from "../../mocks"
import {Grid, Box} from '@material-ui/core';
import  TypographyComponent  from '../../components/Typography';
import DataSelector from "../../components/YearMounthsSelector";
import { columns , dateSelector} from "../../utils/consts"
const SmBonuses = () => {
    const initialValues = {
        year: "2020",
        mounth:"may",
      }
    return (
        <Grid>
             <Box>
                <DataSelector label="Выберите месяц отображения" selector={dateSelector} initialValues={initialValues} />
            </Box>
           {managers.sm.map(item => {
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
    
    export default SmBonuses