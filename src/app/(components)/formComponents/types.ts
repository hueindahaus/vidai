export type IFieldValues = { [name: string]: unknown };
export type IFormPureProps<T> = Omit<
  T,
	| "value"
	| "onChange"
	| "checked"
	| "defaultValue"
	| "errorMessage"
>;

export type IFormFieldProps<T> = {
  name: string,
} & IFormPureProps<T>;


export type IValidationState = "valid" | "invalid";
