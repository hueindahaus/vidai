import { Route } from "next";
import Link from "next/link";
import { CSSProperties, ForwardedRef, MouseEventHandler, ReactNode, Ref, forwardRef, useMemo } from "react";

import { theme } from "theme";
import { assertUnreachable } from "../../utils/assertUnreachable";


type IIconProps = {
  iconElement: ReactNode,
  marginRight?: number,
  marginLeft?: number,
};

export type IButtonVariant = "primary" | "default" | "flat-default" | "outlined-default" | "link" | "danger" | "success";
export type IButtonSize = "sm" | "md" | "lg";


export type IButtonBaseProps = {
  children?: ReactNode,
  isDisabled?: boolean,
  style?: CSSProperties,
};

export type IButtonElementProps = {
  type?: "button" | "submit" | "reset",
  onClick?: MouseEventHandler<HTMLButtonElement>,
  href?: undefined,
  target?: undefined,
  draggable?: undefined,
  scroll?: undefined,
};

export type IAnchorElementProps = {
  type?: undefined,
  onClick?: MouseEventHandler<HTMLAnchorElement>,
  href: string,
  target?: string,
  draggable?: boolean,
  scroll?: boolean,
};


export type IButtonProps<T extends (IButtonElementProps | IAnchorElementProps) = IButtonElementProps | IAnchorElementProps> = T & (
	{
	  leftIconProps?: IIconProps,
	  rightIconProps?: IIconProps,
	  variant: IButtonVariant,
	  size?: IButtonSize,
	} | {
	  leftIconProps?: undefined,
	  rightIconProps?: undefined,
	  variant: "normalized",
	  size?: undefined,
	}
) & IButtonBaseProps;

export const Button = forwardRef(function Button({
  variant = "primary", size = "md", type = "button", style, ...props
}: IButtonProps, forwardedRef: ForwardedRef<Element>) {
  // const normalizedSizeStyle = css`
  // padding: 0;
  // `;
  //
  // const smStyle = css`
  // padding: 4px 8px;
  // `;
  //
  // const mdStyle = css`
  // padding: 8px 16px;
  // `;
  //
  // const lgStyle = css`
  // padding: 12px 18px;
  // `;

  // const sizeStyle = useMemo(() => (
  //   variant === "normalized" ? normalizedSizeStyle
  //     : size === "sm" ? smStyle
  //       : size === "md" ? mdStyle
  //         : size === "lg" ? lgStyle
  //           : assertUnreachable(size, "unknown button size"))
  // , [lgStyle, mdStyle, normalizedSizeStyle, size, smStyle, variant]);

  // 
  // const normalizeStyle = css`
  // border: none;
  // background-color: transparent;
  // text-align: unset;
  // color: unset;
  // width: auto;
  // vertical-align: middle;
  // /*white-space: nowrap;*/
  // 
  // transition-duration: 0.3s;
  // transition-timing-function: ${theme.timingFunctions.default};
  // transition-property: background-color, color, border-color;
  // 
  // &:focus:not(:focus-visible) {
  // 	outline: none;
  // }
  // 
  // &:focus-visible {
  // 	outline: auto;
  // }
  // 
  // &.disabled {
  // 	cursor: no-drop;
  // }
  // `;
  //

  // const className = useMemo(() => (
  //   variant === "primary" ? primaryButtonStyle
  //     : variant === "default" ? defaultButtonStyle
  //       : variant === "flat-default" ? flatDefaultButtonStyle
  //         : variant === "outlined-default" ? outlinedDefaultButtonStyle
  //           : variant === "link" ? linkStyle
  //             : variant === "danger" ? dangerButtonStyle
  //               : variant === "success" ? successButtonStyle
  //                 : variant === "normalized" ? undefined
  //                   : assertUnreachable(variant, "Uknown button variant"))
  // , [variant]);



  const innerElement = useMemo(() => (variant === "normalized" ? <>{props.children}</> : (
    <span className={undefined}>
      {props.leftIconProps && (
        <span className={"innerIconElementStyle"} style={{ marginRight: props.leftIconProps.marginRight, marginLeft: props.leftIconProps.marginLeft }}>{props.leftIconProps.iconElement}</span>
      )}
      {props.children}
      {props.rightIconProps && (
        <span className={"innerIconElementStyle"} style={{ marginRight: props.rightIconProps.marginRight, marginLeft: props.rightIconProps.marginLeft }}>{props.rightIconProps.iconElement}</span>
      )}
    </span>
  )), [props, variant]);

  return props.href !== undefined ? (
    <Link
      ref={forwardedRef as Ref<HTMLAnchorElement>}
      href={props.href as Route}
      className={"classNames(normalizeStyle, className, sizeStyle, { disabled: props.isDisabled })"}
      style={style}
      draggable={props.draggable}
      onClick={props.onClick}
      scroll={props.scroll}
    >
      {innerElement}
    </Link>
  ) : (
    <button
      ref={forwardedRef as Ref<HTMLButtonElement>}
       
      type={type}
      className={"classNames(normalizeStyle, className, sizeStyle, { disabled: props.isDisabled })"}
      onClick={props.onClick}
      style={style}
      disabled={props.isDisabled}
    >
      {innerElement}
    </button>
  );
});



