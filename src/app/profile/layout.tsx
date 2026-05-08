import type { Metadata } from 'next';
import { PropsWithChildren } from 'react';

export const metadata: Metadata = {
  title: 'プロフィール',
};

const ProfileLayout = (props: Readonly<PropsWithChildren>) => {
  const { children } = props;

  return children;
};
export default ProfileLayout;
