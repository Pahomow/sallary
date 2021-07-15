// import TeamTable from '../../components/Tables/TeamTable'
import {team} from '../../mocks'
import {Grid, Box} from '@material-ui/core';
import AddEmployersForm from '../../components/Forms/TeamForm';
import useStyles from './style'
import Table from '../../components/Tables/Table'
import  TypographyComponent  from '../../components/Typography';

const TeamPage = () => {
    const classes = useStyles();
    const initialValues = {
        name: "",
        data: "",
        employers: '',
        select:'junior+',
      }
    return(
        <Box className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                  {team.map( item => { return (
                   <Box key={item.id}> 
                  <TypographyComponent key={item.Role} title={item.Label}/>
                   <Table key={item.id} columns={item.Columns} rows={item.Rows}/>
                  </Box>
                  )})} 
                </Grid>
                <Grid item xs={5}>
                 <AddEmployersForm initialValues={initialValues}/>
                </Grid>
            </Grid>
        </Box>
    )
    }
    
export default TeamPage
