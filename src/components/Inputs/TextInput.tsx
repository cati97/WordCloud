import { TextField } from '@mui/material';
import { Control, Controller } from 'react-hook-form';

interface Props {
  name?: string;
  label?: string;
  control: Control;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
}

const TextInput = ({
  name,
  label,
  control,
  disabled,
  placeholder,
  fullWidth,
}: Props) => {
  return (
    <Controller
      name={name ?? ''}
      control={control}
      render={({ field: { name, onChange, value } }) => (
        <TextField
          name={name}
          value={value}
          onChange={onChange}
          label={label}
          disabled={disabled}
          placeholder={placeholder}
          fullWidth={fullWidth}
        />
      )}
    />
  );
};

export default TextInput;
