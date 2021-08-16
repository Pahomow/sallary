import { salesType } from "../../mocks"
import { columns } from "../../utils/consts"
import { Box } from "@material-ui/core"
import Table from "../../components/Tables/Table"
import ToolKit from "../../components/ToolKit";
const SalesTypePage = () => {
    return(
        <Box>
            <ToolKit/>
            <Table rows={salesType} columns={columns.salesType}/>
        </Box>
    )
    }
    
    export default SalesTypePage