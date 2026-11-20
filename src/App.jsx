import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function App(){
  return(
    <Box sx={{ p : 4 }}>
      <Typography varient="h4" fontweight="bold">
        DevFlow
      </Typography>
      <Typography varient="body1" color="text.secondary">
        Manage your development task
      </Typography>
      <Button varient="contained" sx={{mt:3}}>
        Create Task
      </Button>
    </Box>
  );

}
export default App;