import React from "react";
import { Container, Inner, Input, Button } from "./styles/form";

export default function Form({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Form.Container = function FormContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Form.Input = function FormInput({
  disabled,
  onChangeText,
  margin,
  width,
  ...restProps
}) {
  return (
    <Input
      disabled={disabled}
      onChangeText={onChangeText}
      maring={margin}
      width={width}
      {...restProps}
    />
  );
};

Form.Button = function FormButton({ onClick, children, ...restProps }) {
  return (
    <Button onClick={onClick} {...restProps}>
      {children}
    </Button>
  );
};
