'use client';

import FlatPaper from '@/shared/components/paper/FlatPaper.component';
import SectionTitle from '@/shared/components/typography/SectionTitle.component';
import { LABELS } from '@/shared/constants/labels.constant';
import { Divider, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';

const EggLayout = () => {
  return (
    <FlatPaper>
      <Stack gap={2}>
        <SectionTitle>{LABELS.EGG.PAPER_DATAGRID}</SectionTitle>
        <Divider />
        <DataGrid
          rows={[
            { id: 1, name: 'dummy1', memo: 'メモ 1' },
            { id: 2, name: 'dummy2', memo: 'メモ 2' },
            { id: 3, name: 'dummy3', memo: 'メモ 3' },
          ]}
          columns={[
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'name', headerName: 'NAME', width: 150 },
            { field: 'memo', headerName: 'MEMO', flex: 1 },
          ]}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 2,
              },
            },
          }}
          pageSizeOptions={[25, 50, 100]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Stack>
    </FlatPaper>
  );
};
export default EggLayout;
