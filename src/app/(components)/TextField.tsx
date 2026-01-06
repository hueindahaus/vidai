import { FocusEvent } from "react";



export type ITextFieldProps = {
  id?: string,
  label?: string,
  name?: string,
  description?: string,
  errorMessage?: string,
  value?: string,
  onChange?: (value: string) => void,
  onBlur?: (value: FocusEvent<Element, Element>) => void,
  type?: "text" | "search" | "url" | "tel" | "email" | "password",
  isRequired?: boolean,
  isDisabled?: boolean,
  validationState?: "valid" | "invalid",
  variant?: "default" | "flat",
  fontSize?: number,
  maxlength?: number,
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void,
} & ({
  isMultiline?: true,
  rows?: number,
} | {
  isMultiline?: undefined,
  rows?: undefined,
});


export function TextField({ isMultiline = undefined, ...props }: ITextFieldProps) {
  return isMultiline ? <TextAreaField {...props} /> : <TextInputField {...props} />;
}


export function TextAreaField(props: ITextFieldProps) {
  return (
    <div className={undefined}>
      <label className={undefined}>{props.label}</label>
      <textarea
        id={props.id}
        disabled={props.isDisabled}
        value={props.value}
        name={props.name}
        style={{ fontSize: props.fontSize }}
        className={undefined}
        rows={props.rows}
        onChange={x => props.onChange?.(x.target.value)}
      />
      {props.description && (
        <div className={undefined}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div className={undefined}>
          {props.errorMessage}
        </div>
      )}
      {props.maxlength && (
        <div className={undefined}>
          {props.value?.length ?? 0}
          /
          {props.maxlength}
          {" "}
          characters
        </div>
      )}
    </div>
  );
}

export function TextInputField(props: ITextFieldProps) {
  return (
    <div className={undefined}>
      <label className={undefined}>
        <input
          id={props.id}
          disabled={props.isDisabled}
          value={props.value}
          name={props.name}
          onBlur={props.onBlur}
          onChange={x => props.onChange?.(x.target.value)}
          style={{ fontSize: props.fontSize }}
          className={undefined}
          placeholder="&nbsp;"
          maxLength={props.maxlength}
          onKeyDown={e => props.onKeyDown?.(e)}
        />
        <span className={undefined}>{props.label}</span>
      </label>
      {props.maxlength && (
        <div className={undefined}>
          {props.value?.length ?? 0}
          /
          {props.maxlength}
          {" "}
          characters
        </div>
      )}
      {props.description && (
        <div className={undefined}>
          {props.description}
        </div>
      )}
      {props.errorMessage && (
        <div className={undefined}>
          {props.errorMessage}
        </div>
      )}
    </div>
  );
}



