import TestButton from '@/shared/components/ui/button/TestButton.component';
import { Stack, Typography } from '@mui/material';

const Home = () => {
  return (
    <Stack>
      <Typography variant="h4" component={'h1'} p={4}>
        準備完了！
      </Typography>
      <TestButton>test</TestButton>
    </Stack>
  );
};
export default Home;
