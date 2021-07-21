import Table from '../../components/Tables/Table'
import { columns } from "../../utils/consts"
import { freelanceExpenses } from "../../mocks"

const FreelanceExpenses = () => {
    return (
        <>
        <Table columns={columns.freelanceExpenses} rows= {freelanceExpenses }/>
        </>
    )
}

export default FreelanceExpenses