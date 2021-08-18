import { Grid } from "@material-ui/core"
import ProjectManagerForm from "../../components/Forms/ProjectManagerForm"
import Table from "../../components/Tables/Table"
import { projectMangers,pmManager  } from "../../mocks"
import { columns } from "../../utils/consts"
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {deletePm, getPm, postPm} from "../../reduxToolkit/pmSlice";
import {getCurrentPmProjects} from "../../reduxToolkit/projectSlice";
import Preloader from "../../components/Preloader";


const ProjectManagerPage = () => {
    const pmName = useSelector(state => state.pm)
    const currentPmProjects = useSelector(state => state.projectType)
    const [dataFromRender, setDataFromRender] = useState(pmName)
    const [loader, setLoader] = useState(false)
    const [finalLoader , setFinalLoader] = useState(false)
    const dispatch = useDispatch()
    // console.log(pmName)
    // console.log(loader)
    // console.log(currentPmProjects)
    // console.log(pmName.list[0])

    useEffect(()=>{
        getPmAsyncSelector()
        // dispatch(getPm({}))
        pmName.status === 'success' ? setLoader(!loader): setLoader(!loader)
        setFinalLoader(true)
    },[])

    const getPmAsyncSelector = async () => {
        try {
            await dispatch(getPm({}))
        } catch (e){
            console.log("Error on getPmAsyncSelector")
        }
    }

    const getCurrentPmProjectsAsyncList = async ({id}) => {
      try {
          //todo: need something like that pmName.list[0]
         await dispatch(getCurrentPmProjects(`${pmName.list._id}`))
      } catch (e) {
          console.log("Error on getCurrentPmProjects")
      }
    }

    const removePmButtonAsync = async ({id}) => {
      try {
          await dispatch(deletePm(id))
      } catch (e) {
          console.log("Error on removePmFunc")
      }
    }

    const addPmButtonAsync = async ({data}) => {
        try {
            await dispatch(postPm({data}))
        } catch (e) {
            console.log("Error on removePmFunc")
        }
    }
// todo: remove projects
const initialValues = {
        name: {...pmName},
        select: {...currentPmProjects},
        remove: "senior",
        projects: [
            {
              name: 'alex',
              email: 'sdasda',
            },
            {
              name: 'Oleg',
              email: 'sdasda',
            },
            {
              name: 'Ira',
              email: 'sdasda',
            },
            {
              name: 'al',
              email: 'sdasda',
            },
            {
                name: 'alex',
                email: 'sdasda',
              },
              {
                name: 'Oleg',
                email: 'sdasda',
              },
              {
                name: 'Ira',
                email: 'sdasda',
              },
              {
                name: 'al',
                email: 'sdasda',
              },
              {
                name: 'alex',
                email: 'sdasda',
              },
              {
                name: 'Oleg',
                email: 'sdasda',
              },
              {
                name: 'Ira',
                email: 'sdasda',
              },
              {
                name: 'al',
                email: 'sdasda',
              }, 
          ],
}
    console.log(initialValues)
    return(
        <Grid container spacing={1}>
            {finalLoader ?(
                <>
                    <Grid item xs={7}>
                        <ProjectManagerForm getPmAsyncSelector={getPmAsyncSelector}
                                            getCurrentPmProjectsAsyncList={getCurrentPmProjectsAsyncList}
                                            removePmButtonAsync={removePmButtonAsync}
                                            addPmButtonAsync={addPmButtonAsync}
                                            initialValues={initialValues}
                                            // projectManagers = {projectMangers}
                                           />
                    </Grid>
                <Grid item  xs={5}>
                    <Table columns={columns.pmManager} rows= {pmManager }/>
                </Grid>
                </>
            ): <Preloader/>}
        </Grid>
    )
    }
    
    export default ProjectManagerPage
    