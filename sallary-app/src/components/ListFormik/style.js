import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    overflow: 'auto',
    overflowX: 'hidden',
    maxHeight: 300,
},
}));
export default useStyles;