import { Box, Grid } from "@material-ui/core"
import ProjectManagerForm from "../../components/Forms/ProjectManagerForm"
import Table from "../../components/Tables/Table"
import { projectMangers,customers  } from "../../mocks"
import { columns } from "../../utils/consts"
const ProjectManagerPage = () => {
const initialValues = {
        name: "",
        countries: '',
        client: 'belarus',
        select: "junior+",
        remove: "senior",
}   
    return(
        <Grid container spacing={1}>
            <Grid item xs={7}>
                <ProjectManagerForm initialValues={initialValues} projectManagers = {projectMangers}/>
            </Grid>
            <Grid item  xs={5}>
                <Table columns={columns.customers} rows= {customers }/>
            </Grid>
        </Grid>
    )
    }
    
    export default ProjectManagerPage
    