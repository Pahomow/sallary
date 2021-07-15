import SimpleTable from "../../components/Tables/SimpleTable"
import { columns } from "../../utils/consts"
import { projectsType } from "../../mocks"

const ProjectTypePage = () => {
    return(
        <div>      
            <SimpleTable rows= {projectsType} columns={columns.projectType}/>
        </div>
    )
    }
    
    export default ProjectTypePage