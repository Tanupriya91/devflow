import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

import AssignmentIcon from '@mui/icons-material/Assignment';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

function StatsCard({ title, value, description, icon, color }) {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 3,
        border: '1px solid',
        borderColor: 'divider',
        borderRadius: 3,
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="center">
        <Box>
          <Typography color="text.secondary" variant="body2">
            {title}
          </Typography>

          <Typography variant="h4" fontWeight="bold" sx={{ mt: 1 }}>
            {value}
          </Typography>
        </Box>

        <Box
          sx={{
            p: 1.5,
            borderRadius: 2,
            bgcolor: `${color}.light`,
            color: `${color}.main`,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </Box>
      </Stack>

      <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
        {description}
      </Typography>
    </Paper>
  );
}

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

      <Box sx={{ mt: 5 }}>
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Overview
        </Typography>

        <Grid container spacing={3}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard
              title="Total Tasks"
              value="24"
              description="All tasks in your workspace"
              icon={<AssignmentIcon />}
              color="primary"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard
              title="Completed"
              value="12"
              description="Tasks completed successfully"
              icon={<CheckCircleIcon />}
              color="success"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard
              title="Pending"
              value="8"
              description="Tasks waiting to be completed"
              icon={<PendingActionsIcon />}
              color="warning"
            />
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <StatsCard
              title="Overdue"
              value="4"
              description="Tasks requiring attention"
              icon={<WarningAmberIcon />}
              color="error"
            />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

export default App;