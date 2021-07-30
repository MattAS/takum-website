import React from "react";
import {
  Container,
  Inner,
  Image,
  Header,
  Body,
  Icon,
  ImageContainer,
  Text,
  List
} from "./styles/product";

export default function Product({ children, ...restProps }) {
  return <Inner {...restProps}>{children}</Inner>;
}

Product.Container = function ProductContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Product.Image = function ProductImage({ ...restProps }) {
  return <Image {...restProps} />;
};

Product.Header = function ProductHeader({ children, ...restProps }) {
  return <Header {...restProps}>{children}</Header>;
};

Product.Body = function ProductBody({ children, ...restProps }) {
  return <Body {...restProps}>{children}</Body>;
};

Product.Icon = function ProductIcon({ ...restProps }) {
  return <Icon {...restProps} />;
};

Product.ImageContainer = function ProductImageContainer({ children }) {
  return <ImageContainer>{children}</ImageContainer>;
};

Product.Text = function ProductText({ children }) {
  return <Text>{children}</Text>;
};

Product.List = function ProductList({ children }) {
  return <List>{children}</List>;
};
