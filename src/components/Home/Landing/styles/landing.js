import styled from "styled-components/macro";

export const Container = styled.div`
  max-width: 100%;
  padding: 2rem 0rem;
  display: flex;
  flex-direction: column;
  justify-contents: center;
  align-items: center;
`;

export const Inner = styled.div`
  width: min(90%, 80.5rem);
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 50em) {
    flex-direction: row;
  }
`;

export const Image = styled.img`
  display: block;
  max-width: 80%;
  flex-basis: 100%;
  margin-top: 1.5em;

  @media (min-width: 40em) {
    margin-top: 0;
    max-width: 57%;
  }
`;

export const Header = styled.p`
  font-size: clamp(1rem, 5.6vw, 3rem);
  font-family: Inter;
  font-weight: bold;
`;

export const Body = styled.div`
  width: 100%;
  flex-basis: 100%;
`;
