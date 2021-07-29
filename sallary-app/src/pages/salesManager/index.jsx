import { Grid, Box } from "@material-ui/core"
import SalesManagerForm from "../../components/Forms/SalesManagerForm"
import Table from '../../components/Tables/Table'
import { salesManager  } from "../../mocks"
import { columns } from "../../utils/consts"
const SalesManagerPage = () => {
    const initialValues = {
        name: "",
        data: "",
        employers: '',
        select:'junior+',
        sm: [
          {type: 'Юля'}
      ],
      projects: [
        {
          name: 'alex',
          email: 'sdasda',
        },
        {
          name: 'Oleg',
          email: 'sdasda',
        },
        {
          name: 'Ira',
          email: 'sdasda',
        },
        {
          name: 'al',
          email: 'sdasda',
        },
        {
            name: 'alex',
            email: 'sdasda',
          },
          {
            name: 'Oleg',
            email: 'sdasda',
          },
          {
            name: 'Ira',
            email: 'sdasda',
          },
          {
            name: 'al',
            email: 'sdasda',
          },
          {
            name: 'alex',
            email: 'sdasda',
          },
          {
            name: 'Oleg',
            email: 'sdasda',
          },
          {
            name: 'Ira',
            email: 'sdasda',
          },
          {
            name: 'al',
            email: 'sdasda',
          }, 
      ],
      }
    return(
        <Box>
            <Grid container spacing={1}>
                <Grid item xs={7}>
                    <SalesManagerForm initialValues={initialValues}/>
                </Grid>

                <Grid item xs={5}>
                <Table columns={columns.salesManager} rows= {salesManager }/>
                </Grid>
            </Grid>
        </Box>
    )
    }
    
    export default SalesManagerPage