

import Table from '../../components/Tables/Table'
import { freelanceExpenses } from "../../mocks"
import { Box } from '@material-ui/core'
import DataSelector from '../../components/YearMounthsSelector'
import { columns , dateSelector} from "../../utils/consts"
import TableEditable from "../../components/Tables/Ex"
import TableUpper from "../../components/Tables/TableV"
import {  customers  } from "../../mocks"

const AccoutingPage = () => {
    const initialValues = {
        years: "2020",
        mounths:"May",
      }
    return (
        <Box>
            <Box>
                <DataSelector label="Выберите месяц отображения" selector={dateSelector} initialValues={initialValues} />
            </Box>
            <Box>
                    <Table columns={columns.freelanceExpenses} rows= {freelanceExpenses }/>
            </Box>
                    {/* <TableUpper /> */}
        {/* <TableEditable rows={customers} column={columns.customers}/> */}
        </Box>
    )
}

export default AccoutingPage
