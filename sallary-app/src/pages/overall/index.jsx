import OverallInfoForm from "../../components/Forms/OverallInfoForm"
import { Box } from "@material-ui/core"
// import MultipleSelectorForm from "../../components/TechnologyCheckboxUpper"
// import Table from "../../components/Tables/Table"
// import ButtonComponent from "../../components/Button"
const OverAllPage = () => {
    const initialValues = {
        name: "project3",
        number: "1",
        typeOfSale: "Outband",
        typeOfProject: "Outsource",
        pmId: "",
        smId: "",
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
    }
    return(
        <Box>
            <OverallInfoForm initialValues={initialValues}/>
            {/* <MultipleSelectorForm/>
            <ButtonComponent/>
            <Table/> */}
        </Box>
    )
    }
    
export default OverAllPage
    