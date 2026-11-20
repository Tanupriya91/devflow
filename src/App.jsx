import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

function App() {
  return (
    <Box sx={{ p: 4 }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
      >
        <Box>
          <Typography variant="h4" fontWeight="bold">
            DevFlow
          </Typography>

          <Typography color="text.secondary">
            Manage your development tasks.
          </Typography>
        </Box>

        <Button variant="contained">
          Add Task
        </Button>
      </Stack>
    </Box>
  );
}

export default App;