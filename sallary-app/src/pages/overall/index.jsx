import OverallInfoForm from "../../components/Forms/OverallInfoForm"
import { Box } from "@material-ui/core"
import {selectorInput,columns} from '../../utils/consts'
import {overall} from '../../mocks'
import Table from "../../components/Tables/Table"
const OverAllPage = () => {
    const initialValues = {
        name: "project3",
        number: "1",
        typeOfSale: "ba",
        typeOfProject: "ba",
        pmId: "ba",
        smId: "ba",
        technologies: ["js","java","PHP"],
        freelancers: [
            {_id:"", hours: ""},
        ],
        developers: [
            {_id:"", rate: ""},
            {_id:"", rate: ""},
        ],
        QA: [
            {_id:"", rate: ""},
            {_id:"", rate: ""},
        ],
        designers: [
            {_id:"", rate: ""},
        ],
        businessAnalysts: [
            {_id:"", rate: ""},
        ],
        select: "ba",
        nameProject:"qa",
       
        // customers: null,
        // ba: null,
        // qa: null,
        // designer: null
    }
    return(
        <Box>
            <Box>
                <OverallInfoForm initialValues={initialValues} selector ={selectorInput} />
            </Box>
            <Box>
                <Table rows={overall} columns={columns.overall}/>
            </Box>
        </Box>
    )
    }
    
export default OverAllPage
    