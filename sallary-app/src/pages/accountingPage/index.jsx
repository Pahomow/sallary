import TableEditable from "../../components/Tables/Ex"
import TableUpper from "../../components/Tables/TableV"
import { columns } from "../../utils/consts"
import {  customers  } from "../../mocks"
const AccoutingPage = () => {
return(
    <div>
        <TableUpper />
        {/* <TableEditable rows={customers} column={columns.customers}/> */}
        AccoutingPage
    </div>
)
}

export default AccoutingPage
