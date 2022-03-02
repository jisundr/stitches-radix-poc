import { CSS } from "@stitches/react";
import { ComponentProps, ElementRef, forwardRef } from "react";
import { styled } from "stitches.config";

export const BUTTON_TAG = "button";

export enum ButtonSizes {
  small = "small",
  large = "large",
}

const StyledButton = styled(BUTTON_TAG, {
  padding: "0.5rem 1rem",
  fontWeight: "bold",
  fontSize: "0.825rem",
  borderRadius: "0.25rem",
  border: "solid $gray300 1px",
  backgroundColor: "white",
  "&:hover": {
    backgroundColor: "$gray100",
  },
  "&:active": {
    backgroundColor: "$gray200",
  },
  "&:disabled": {
    backgroundColor: "$gray300",
    color: "$gray400",
  },

  variants: {
    size: {
      [ButtonSizes.small as string]: {
        padding: "0.25rem 0.75rem",
        fontSize: "0.75rem",
      },
      [ButtonSizes.large as string]: {
        padding: "0.75rem 1.25rem",
        fontSize: "1rem",
      },
    },
  },
});

export type StyledButtonProps = ComponentProps<typeof StyledButton> & {
  css?: CSS;
  size?: string;
};

/**
 * A basic UI component that allows users to perform action.
 *
 */
const Button = forwardRef<ElementRef<typeof BUTTON_TAG>, StyledButtonProps>(
  (props, ref) => <StyledButton {...props} ref={ref} />
);

export default Button;
