'use client';

import CardList, { CardListItem } from '@/shared/components/card/CardList.component';
import FlatPaper from '@/shared/components/paper/FlatPaper.component';
import SectionTitle from '@/shared/components/typography/SectionTitle.component';
import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { LABELS } from '@/shared/constants/labels.constant';
import { PATH } from '@/shared/constants/path.constant';
import { Button, Divider, Stack } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

/**
 * ホーム画面のメインコンテンツを構成するダッシュボードレイアウト。
 * - 画面サイズに応じたレスポンシブな2カラム構成（モバイル: 縦積み、PC: 横並び）
 * * @returns ホーム画面のレイアウト構造
 */
const HomeLayout = () => {
  const router = useRouter();

  const cardItems = useMemo(
    (): CardListItem[] => [
      {
        id: 'Storybook',
        isDescriptionText: true,
        image: `${PATH.BASE_PATH}${IMAGE_PATH.STORYBOOK}`,
        description: LABELS.CARD.STORYBOOK_CONTENT,
        actions: (
          <Button variant="outlined" onClick={() => router.push(`${PATH.STORYBOOK}`)}>
            {LABELS.CARD.ACTION}
          </Button>
        ),
      },
      {
        id: 'dummy1',
        isDescriptionText: true,
        description: 'dummy1',
        actions: <Button variant="outlined">{LABELS.CARD.ACTION}</Button>,
      },
      {
        id: 'dummy2',
        isDescriptionText: true,
        description: 'dummy2',
        actions: <Button variant="outlined">{LABELS.CARD.ACTION}</Button>,
      },
      {
        id: 'dummy3',
        isDescriptionText: true,
        description: 'dummy3',
        actions: <Button variant="outlined">{LABELS.CARD.ACTION}</Button>,
      },
    ],
    [router],
  );

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
      {/* 左カラム */}
      <FlatPaper sx={{ flex: 1 }}>
        <Stack gap={2}>
          <SectionTitle>{LABELS.HOME.PAPER_CARD_LIST}</SectionTitle>
          <Divider />
          <CardList items={cardItems} />
        </Stack>
      </FlatPaper>

      {/* 右カラム */}
      <FlatPaper sx={{ flex: 1 }}>
        <Stack gap={2}>
          <SectionTitle>{LABELS.HOME.PAPER_DATAGRID}</SectionTitle>
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
    </Stack>
  );
};
export default HomeLayout;
