import { useFormContext } from "react-hook-form";

import { Button, IButtonElementProps, IButtonProps, IButtonSize } from "../Button";
import { invariant } from "../../../utils/invariant";
// import { Loader } from "./Loader";

type ISubmitButtonProps = { disableWhenFormInvalid?: boolean, isDisabledOnSubmitSuccesful?: boolean } & IButtonProps<IButtonElementProps>;

export function SubmitButton({
  isDisabled = false,
  disableWhenFormInvalid = false,
  isDisabledOnSubmitSuccesful: isDisabledOnSubmisSuccesful = false,
  ...buttonProps
}: ISubmitButtonProps) {
  const form = useFormContext();

  // formState is wrapped with a Proxy to improve render performance
  // and skip extra logic if specific state is not subscribed to.
  // Therefore make sure you invoke or read it before a render in order to enable the state update.
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  form.formState.isValid;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  form.formState.isSubmitSuccessful;
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  form.formState.isSubmitting;

  if (process.env.NODE_ENV === "development") {
    if (("root" in form.formState.errors)) {
      if (form.formState.errors.root?.message) console.error(form.formState.errors);
    } else if (Object.keys(form.formState.errors).length > 0) { console.error(form.formState.errors); }
  }


  invariant(buttonProps.variant !== "normalized", "Can't set variant=normalized on a submit button");

  return (
    <Button
      type="submit"
      isDisabled={isDisabled || form.formState.isSubmitting || (disableWhenFormInvalid && !form.formState.isValid) || (isDisabledOnSubmisSuccesful && form.formState.isSubmitSuccessful)}
      onClick={() => null}
      {...buttonProps}
    />
  );
}


export function Submit({
  children,
  size,
  isDisabled,
}: {
  children: string,
  isDisabled?: boolean,
  size?: IButtonSize,
}) {
  const form = useFormContext();

  // const actionWrapper = css`
  //       display: flex;
  //       align-items: center;
  //   `;
  //
  // const statusWrapper = css`
  //       margin-left: 1rem;
  //   `;

  return (
    <div>
      <span className={"actionWrapper"}>
        <SubmitButton
          isDisabled={isDisabled}
          size={size}
          variant="primary"
        >
          {children}
        </SubmitButton>
        {form.formState.isSubmitting && (
          <div className={"statusWrapper"}>
            loading
          </div>
        )}
      </span>
    </div>
  );
}
