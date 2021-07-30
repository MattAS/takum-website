import React from "react";
import {
  Container,
  Inner,
  Header,
  Text,
  Top,
  CardContainer
} from "./styles/lawyers";

export default function Lawyers({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Lawyers.Container = function LawyersContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Lawyers.Header = function LawyersHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Lawyers.Text = function LawyersText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

Lawyers.Top = function LawyersTop({ children, ...restProps }) {
  return <Top {...restProps}>{children}</Top>;
};

Lawyers.CardContainer = function LawyersCardContainer({
  children,
  ...restProps
}) {
  return <CardContainer {...restProps}>{children}</CardContainer>;
};
