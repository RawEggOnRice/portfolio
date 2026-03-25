import { Button, ButtonProps } from '@mui/material';

const TestButton = (props: ButtonProps) => {
  const { children, ...rest } = props;
  return <Button {...rest}>{children}</Button>;
};
export default TestButton;
