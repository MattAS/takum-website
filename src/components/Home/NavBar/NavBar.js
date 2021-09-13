import React from "react";
import { Container, Inner, Image, Links, Text } from "./styles/navbar";

export default function NavBar({ children, direction = "row", ...restProps }) {
  return <Inner direction={direction}>{children}</Inner>;
}

NavBar.Container = function NavBarContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

NavBar.Image = function NavBarImage({ ...restProps }) {
  return <Image {...restProps} />;
};

NavBar.Links = function NavBarLinks({ children, ...restProps }) {
  return <Links {...restProps}>{children}</Links>;
};

NavBar.Text = function NavBarText({ href, children, ...restProps }) {
  return (
    <Text href={href} {...restProps}>
      {children}
    </Text>
  );
};
