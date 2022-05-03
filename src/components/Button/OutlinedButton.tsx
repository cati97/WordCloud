import { Button } from '@mui/material';

interface Props {
  text: string;
  onClick: () => void;
  disabled?: boolean;
}
const OutlinedButton = ({ text, onClick, disabled }: Props) => {
  return (
    <Button
      variant='outlined'
      color='secondary'
      onClick={onClick}
      disabled={disabled}
    >
      {text}
    </Button>
  );
};

export default OutlinedButton;
