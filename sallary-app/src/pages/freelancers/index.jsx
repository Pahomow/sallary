import FreelancerForm from "../../components/Forms/FreelancerForm"
import Table from "../../components/Tables/Table"
import { columns } from "../../utils/consts"
import { freelancers } from "../../mocks"
import Box from '@material-ui/core/Box';
const FreelancePage = () => {
    const initialValues = {
        freelancerName: "",
        // rateScope: "",
        project: [
          {type: 'Project'},
        ],
        knowledgeStack: [],
        freelancers:{},
        // multiSelect:{},
        startDate:""  
    }
    return(
        <Box>
            <FreelancerForm initialValues={initialValues}/>
            <Table columns={columns.freelancers} rows= {freelancers}/>            
        </Box>
    )
    }
    
    export default FreelancePage
    