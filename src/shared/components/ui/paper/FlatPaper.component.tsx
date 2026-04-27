import { Paper, PaperProps, styled } from '@mui/material';

type FlatPaperStyleProps = {
  height?: string | number;
  width?: string | number;
  isDefaultBackground?: boolean;
};

const FlatPaperStyle = styled(Paper, {
  shouldForwardProp: (prop) => {
    return prop !== 'height' && prop !== 'width' && prop !== 'isDefaultBackground';
  },
})<FlatPaperStyleProps>(({ theme, isDefaultBackground, height, width }) => ({
  flex: 1,
  padding: theme.spacing(2),
  backgroundColor: isDefaultBackground
    ? theme.palette.background.default
    : theme.palette.background.paper,
  height: height,
  width: width,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

type FlatPaperProps = FlatPaperStyleProps & PaperProps;

const FlatPaper = (props: FlatPaperProps) => {
  return (
    <FlatPaperStyle elevation={0} {...props}>
      {props.children}
    </FlatPaperStyle>
  );
};
export default FlatPaper;
