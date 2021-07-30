import React from "react";
import { Container, Inner, Image, Header, Body } from "./styles/landing";

export default function Landing({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Landing.Container = function LandingContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Landing.Image = function LandingImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Landing.Header = function LandingHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Landing.Body = function LandingBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};
