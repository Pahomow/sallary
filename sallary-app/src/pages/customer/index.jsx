import { Box, Grid } from "@material-ui/core"
import CustomerForm from "../../components/Forms/CustomerForm"

import SimpleTable from "../../components/Tables/SimpleTable"
import Table from "../../components/Tables/Table"
import {  projects, customers  } from "../../mocks"
import { columns } from "../../utils/consts"
const CustomerPage = () => {

const initialValues = {
          name: "",
          countries: '',
          client: 'belarus',
          select: "junior+",
          remove: "senior",
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
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <CustomerForm initialValues={initialValues} projects = {projects}/>
                </Grid>
                
                <Grid  item xs={5}>
                    <Table columns={columns.customers} rows= {customers }/>
                    {/* <SimpleTable rows={salesType} columns={columns.salesType}/> */}
                </Grid>
            </Grid>
        </Box>
    )
    }
    
    export default CustomerPage
    