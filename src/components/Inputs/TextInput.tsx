import { TextField } from '@mui/material';
import {
  Control,
  Controller,
  DeepMap,
  FieldError,
  FieldValues,
} from 'react-hook-form';
import * as S from './Inputs.css';

type FieldErrors<TFieldValues extends FieldValues = FieldValues> = DeepMap<
  TFieldValues,
  FieldError
>;

interface Props {
  name: string;
  label?: string;
  control: Control<any>;
  errors: FieldErrors;
  disabled?: boolean;
  placeholder?: string;
  fullWidth?: boolean;
  isRequired?: boolean;
  minCharLength?: number;
}

const TextInput = ({
  name,
  label,
  control,
  errors,
  disabled,
  placeholder,
  fullWidth,
  isRequired,
  minCharLength,
}: Props) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        render={({ field: { name, onChange, value, onBlur } }) => (
          <TextField
            name={name}
            label={label}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            disabled={disabled}
            placeholder={placeholder}
            fullWidth={fullWidth}
          />
        )}
        rules={{
          required: isRequired ? 'This field is required' : undefined,
          ...(minCharLength && {
            minLength: {
              value: minCharLength,
              message: `Text should have minimum ${minCharLength} characters`,
            },
          }),
        }}
      />
      {errors?.hasOwnProperty(name) && (
        <S.ErrorMessage>{errors[name]?.message}</S.ErrorMessage>
      )}
    </>
  );
};

export default TextInput;
