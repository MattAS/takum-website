import styled from "styled-components/macro";

export const Container = styled.div`
  padding: 3% 8%;
  padding-right: 15%;
`;

export const Inner = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${direction => direction};
`;

export const Image = styled.img`
  width: 12%;
  height: 12%;
`;

export const Links = styled.div`
  display: flex;
  flex-direction: row;
  width: 60%;
  padding-left: 10%;
  justify-content: space-between;
  align-items: center;
  flex-grow: 1;
`;

export const Text = styled.a`
  font-size: 1.25em;
  color: #343434;
`;
