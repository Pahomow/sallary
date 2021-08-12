import { Grid } from "@material-ui/core"
import ProjectManagerForm from "../../components/Forms/ProjectManagerForm"
import Table from "../../components/Tables/Table"
import { projectMangers,pmManager  } from "../../mocks"
import { columns } from "../../utils/consts"
const ProjectManagerPage = () => {
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
        <Grid container spacing={1}>
            <Grid item xs={7}>
                <ProjectManagerForm initialValues={initialValues} projectManagers = {projectMangers}/>
            </Grid>
            <Grid item  xs={5}>
                <Table columns={columns.pmManager} rows= {pmManager }/>
            </Grid>
        </Grid>
    )
    }
    
    export default ProjectManagerPage
    