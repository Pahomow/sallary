import SimpleTable from "../../components/Tables/SimpleTable"
import { salesType } from "../../mocks"
import { columns } from "../../utils/consts"
import { Box } from "@material-ui/core"
import Table from "../../components/Tables/Table"
const SalesTypePage = () => {
    return(
        <Box>   
            <Table rows={salesType} columns={columns.salesType}/>
            {/* <SimpleTable rows={salesType} columns={columns.salesType}/> */}
        </Box>
    )
    }
    
    export default SalesTypePage