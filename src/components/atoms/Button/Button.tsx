import { CSS } from "@stitches/react";
import { ComponentProps, ElementRef, forwardRef } from "react";
import { styled } from "stitches.config";

const DEFAULT_TAG = "button";

const StyledButton = styled(DEFAULT_TAG, {
  padding: "0.5rem 1rem",
  fontWeight: "bold",
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
});
type StyledButtonProps = ComponentProps<typeof StyledButton> & {
  css?: CSS;
};

const Button = forwardRef<ElementRef<typeof DEFAULT_TAG>, StyledButtonProps>(
  (props, ref) => <StyledButton ref={ref} {...props} />
);

export default Button;
