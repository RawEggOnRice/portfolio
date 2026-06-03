'use client';

import CardList, { CardListItem } from '@/shared/components/card/CardList.component';
import FlatPaper from '@/shared/components/paper/FlatPaper.component';
import SectionTitle from '@/shared/components/typography/SectionTitle.component';
import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { LABELS } from '@/shared/constants/labels.constant';
import { PATH } from '@/shared/constants/path.constant';
import { Button, Divider, Stack } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useMemo } from 'react';
import HomeSampleForm from '../components/HomeSampleForm.component';

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
        description: LABELS.HOME.CARD.STORYBOOK_CONTENT,
        actions: (
          <Button variant="outlined" onClick={() => router.push(`${PATH.STORYBOOK}`)}>
            {LABELS.HOME.CARD.ACTION}
          </Button>
        ),
      },
      {
        id: 'dummy1',
        isDescriptionText: true,
        description: 'dummy1',
        actions: <Button variant="outlined">{LABELS.HOME.CARD.ACTION}</Button>,
      },
      {
        id: 'dummy2',
        isDescriptionText: true,
        description: 'dummy2',
        actions: <Button variant="outlined">{LABELS.HOME.CARD.ACTION}</Button>,
      },
      {
        id: 'dummy3',
        isDescriptionText: true,
        description: 'dummy3',
        actions: <Button variant="outlined">{LABELS.HOME.CARD.ACTION}</Button>,
      },
    ],
    [router],
  );

  return (
    <Stack direction={{ xs: 'column', md: 'row' }} gap={2}>
      {/* 左カラム カードリスト */}
      <FlatPaper sx={{ flex: 1 }}>
        <Stack gap={2}>
          <SectionTitle>{LABELS.HOME.PAPER_CARD_LIST}</SectionTitle>
          <Divider />
          <CardList items={cardItems} />
        </Stack>
      </FlatPaper>

      {/* 右カラム サンプルフォーム */}
      <FlatPaper sx={{ flex: 1 }}>
        <Stack gap={2}>
          <SectionTitle>{LABELS.HOME.PAPER_FORM_SAMPLE}</SectionTitle>
          <Divider />
          <HomeSampleForm />
        </Stack>
      </FlatPaper>
    </Stack>
  );
};
export default HomeLayout;
