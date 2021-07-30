import styled from "styled-components/macro";

export const Container = styled.div`
  background: white;
  height: ${({ height }) => height};
  width: ${({ width }) => width};
  border-radius: 20px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.5);
`;

export const Inner = styled.div`
  height: 100%;
`;

export const Image = styled.img`
  height: 68%;
`;

export const Body = styled.div`
  height: 30%;
  border-top: solid 3px #343434;
  border-radius: 0 0 20px 20px;
  padding-left: 5%;
  line-height: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Icon = styled.img`
  width: 8%;
  padding-right: 3%;
`;

export const Text = styled.p`
  font-size: 1.25em;
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1%;
  flex-wrap: wrap;
`;
