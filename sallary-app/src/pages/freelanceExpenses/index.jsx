import Table from '../../components/Tables/Table'
import { freelanceExpenses } from "../../mocks"
import { Box } from '@material-ui/core'
import DataSelector from '../../components/YearMounthsSelector'
import { columns , dateSelector} from "../../utils/consts"

const FreelanceExpenses = () => {
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
                <Table columns={columns.freelanceExpenses} rows= {freelanceExpenses }/>
            </Box>
        </Box>
    )
}

export default FreelanceExpenses