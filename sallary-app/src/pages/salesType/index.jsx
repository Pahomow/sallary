import SimpleTable from "../../components/Tables/SimpleTable"
import { salesType } from "../../mocks"
import { columns } from "../../utils/consts"
import { Box } from "@material-ui/core"
const SalesTypePage = () => {
    return(
        <Box>   
            <SimpleTable rows={salesType} columns={columns.salesType}/>
        </Box>
    )
    }
    
    export default SalesTypePage