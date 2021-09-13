import styled from "styled-components/macro";

export const Container = styled.div`
  background: white;
  height: 80%;
  width: 30%;
  border-radius: 20px;
  box-shadow: 0px 0px 24px rgba(0, 0, 0, 0.18);
  padding-bottom: 3%;
`;

export const Inner = styled.div`
  height: 100%;
`;

export const Image = styled.div`
  height: 70%;
  background: url(${props => props.src}) no-repeat center;
  background-size: cover;
  border-radius: 20px 20px 0 0;
`;

export const Body = styled.div`
  height: 28%;
  padding-top: 3%;
  border-top: solid 3px #343434;
  border-radius: 0 0 20px 20px;
  padding-left: 5%;
  line-height: 2%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Inter;
`;

export const Icon = styled.img`
  width: 8%;
  padding-right: 3%;
`;

export const Text = styled.p`
  font-size: 1.25em;
  font-weight: ${({ weight }) => weight};

  @media only screen and (max-width: 1024px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

export const List = styled.div`
  display: flex;
  flex-direction: row;
  line-height: 1%;
  flex-wrap: wrap;
`;
