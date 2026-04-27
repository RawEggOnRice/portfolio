'use client';

import FlatPaper from '@/shared/components/ui/paper/FlatPaper.component';
import { Stack, Typography } from '@mui/material';

const HomeLayout = () => {
  return (
    <Stack direction={'row'} gap={2} height={'100%'} className="test">
      <FlatPaper>
        <Typography variant="h4">HomeLayout</Typography>
      </FlatPaper>
      <FlatPaper>
        <Typography>HomeLayout</Typography>
      </FlatPaper>
    </Stack>
  );
};
export default HomeLayout;
