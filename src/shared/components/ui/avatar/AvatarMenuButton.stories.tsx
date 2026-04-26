import { IMAGE_PATH } from '@/shared/constants/imagePath.constant';
import { PATH } from '@/shared/constants/path.constant';
import { Meta, StoryObj } from '@storybook/nextjs-vite';
import AvatarMenuButton from './AvatarMenuButton.component';

const meta = {
  title: 'Component/UI/Avatar/AvatarMenuButton',
  component: AvatarMenuButton,
  tags: ['autodocs'],
  args: {
    items: [],
  },
} satisfies Meta<typeof AvatarMenuButton>;
export default meta;

type Story = StoryObj<typeof meta>;

const LOCALHOST_NAME = 'localhost';

const hostname = typeof window !== 'undefined' ? window.location.hostname : LOCALHOST_NAME;

const src =
  hostname === LOCALHOST_NAME
    ? IMAGE_PATH.DUMMY_AVATAR
    : `${PATH.BASE_PATH_STORYBOOK}${IMAGE_PATH.DUMMY_AVATAR}`;

export const ImageAvatar: Story = {
  args: {
    items: [{ label: 'メニュー1' }, { label: 'メニュー2' }, { label: 'メニュー3' }],
    src: src,
  },
};

export const NoImageAvatar: Story = {
  args: {
    items: [{ label: 'メニュー1' }, { label: 'メニュー2' }, { label: 'メニュー3' }],
  },
};
