import { UseFormReturn, useForm as useReactHookForm, UseFormProps } from "react-hook-form";

import { IFieldValues } from "./types";


type IFormOnSubmit<TFieldValues extends IFieldValues> =
	| ((values: TFieldValues) => void)
	| ((values: TFieldValues) => Promise<void>);

export type IUseFormReturn<TFieldValues extends IFieldValues, TContext> =
	& UseFormReturn<TFieldValues, TContext>
	& { onSubmit?: () => Promise<void> };

type IUseFormProps<TFieldValues extends IFieldValues, TContext> =
	& UseFormProps<TFieldValues, TContext>
	& { onSubmit?: IFormOnSubmit<TFieldValues> };

export function useForm<
  TFieldValues extends IFieldValues,
  TContext = unknown,
>(
  props: IUseFormProps<TFieldValues, TContext>
): IUseFormReturn<TFieldValues, TContext> {
  const { mode = "all" } = props;
  const hook = useReactHookForm({ ...props, mode });
  const onSubmit = hook.handleSubmit(values => props.onSubmit?.(values));
  return { ...hook, onSubmit };
}

export function useFormWithRecaptcha<TFieldValues extends IFieldValues, TContext = unknown>(
  props: IUseFormProps<TFieldValues & { recaptchaToken?: string }, TContext>
): IUseFormReturn<TFieldValues, TContext> {
  const { mode = "all" } = props;
  const hook = useReactHookForm({ ...props, mode });
  const onSubmit = hook.handleSubmit(values => props.onSubmit?.( values ))
  return { ...hook, onSubmit };
}
