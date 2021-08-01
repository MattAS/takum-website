import React from "react";
import {
  Container,
  Inner,
  Image,
  Body,
  TextContainer,
  Text,
  BigTextContainer,
  BottomContainer,
  MediaContainer,
  IconContainer
} from "./styles/footer";

export default function Footer({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Footer.Image = function FooterImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Footer.Body = function FooterBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Footer.TextContainer = function FooterTextContainer({
  children,
  direction,
  ...restProps
}) {
  return (
    <TextContainer direction={direction} {...restProps}>
      {children}
    </TextContainer>
  );
};

Footer.Text = function FooterText({ weight, children, ...restProps }) {
  return (
    <Text weight={weight} {...restProps}>
      {children}
    </Text>
  );
};

Footer.BottomContainer = function FooterBottomContainer({
  children,
  ...restProps
}) {
  return <BottomContainer {...restProps}>{children}</BottomContainer>;
};

Footer.MediaContainer = function FooterMediaContainer({
  children,
  ...restProps
}) {
  return <MediaContainer {...restProps}>{children}</MediaContainer>;
};

Footer.BigTextContainer = function FooterBigTextContainer({
  children,
  ...restProps
}) {
  return <BigTextContainer {...restProps}>{children}</BigTextContainer>;
};

Footer.IconContainer = function FooterIconContainer({
  children,
  width,
  ...restProps
}) {
  return (
    <IconContainer width={width} {...restProps}>
      {children}
    </IconContainer>
  );
};
