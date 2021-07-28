import SimpleTable from "../../components/Tables/SimpleTable"
import { columns } from "../../utils/consts"
import { projectsType } from "../../mocks"
import Table from "../../components/Tables/Table"
import { Box } from "@material-ui/core"

const ProjectTypePage = () => {
    return(
        <Box>   
            <Table rows= {projectsType} columns={columns.projectType}/>   
            {/* <SimpleTable rows= {projectsType} columns={columns.projectType}/> */}
        </Box>
    )
    }
    
    export default ProjectTypePage