import { Box } from "@material-ui/core"
import Table from "../../components/Tables/Table"
import DataSelector from "../../components/YearMounthsSelector";
import { columns , dateSelector} from "../../utils/consts"
import { projectsType } from "../../mocks"

const TotalTable = () => {
    const initialValues = {
        year: "2020",
        mounth:"may",
      }
    return (
        <Box>
             <Box>
                <DataSelector label="Выберите месяц отображения" selector={dateSelector} initialValues={initialValues} />
            </Box>
            <Box>
                <Table rows= {projectsType} columns={columns.total}/>
            </Box>
        </Box>
    )
    }
    
    export default TotalTable   