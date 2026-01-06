import { useController, useFormContext } from "react-hook-form";

import { TextField as TextFieldComponent, ITextFieldProps } from "../TextField";

import { IFormFieldProps } from "./types";


export function TextField(props: IFormFieldProps<ITextFieldProps>) {
  const {
    name,
    isDisabled = false,
    ...rest
  } = props;

  const { control, formState: { isSubmitting } } = useFormContext();

  const {
    field: {
      // Legacy
       
      onChange, onBlur, name: fieldName, value,
    },
    fieldState: { error },
  } = useController({
    name, control, shouldUnregister: false,
  });

  return (
    <TextFieldComponent
      {...rest}
      name={fieldName}
      // Legacy
       
      value={value ?? ""}
      isDisabled={isDisabled || isSubmitting}
      errorMessage={error?.message}
      onBlur={onBlur}
      validationState={error ? "invalid" : "valid"}
      onChange={v => {
        onChange(v);
      }}
    />
  );
}
