import { Grid, Box } from "@material-ui/core"
import SalesManagerForm from "../../components/Forms/SalesManagerForm"
import Table from '../../components/Tables/Table'
import { customers  } from "../../mocks"
import { columns } from "../../utils/consts"
const SalesManagerPage = () => {
    const initialValues = {
        name: "",
        data: "",
        employers: '',
        select:'junior+',
      }
    return(
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <SalesManagerForm/>
                </Grid>

                <Grid item xs={5}>
                <Table columns={columns.customers} rows= {customers }/>
                </Grid>
            </Grid>
        </Box>
    )
    }
    
    export default SalesManagerPage