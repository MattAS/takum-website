import React from "react";
import {
  Container,
  Inner,
  Image,
  Text,
  Icon,
  Body,
  List
} from "./styles/lawyerCard";

export default function LawyerCard({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

LawyerCard.Container = function LawyerCardContainer({
  children,
  width = "28%",
  height = "75%",
  ...restProps
}) {
  return (
    <Container width={width} height={height} {...restProps}>
      {children}
    </Container>
  );
};

LawyerCard.Image = function LawyerCardImage({ ...restProps }) {
  return <Image {...restProps} />;
};

LawyerCard.Text = function LawyerCardText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

LawyerCard.Icon = function LawyerCardIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

LawyerCard.Body = function LawyerCardBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

LawyerCard.List = function LawyerCardList({ children, ...restProps }) {
  return <List {...restProps}>{children}</List>;
};
