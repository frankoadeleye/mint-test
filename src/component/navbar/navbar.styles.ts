import styled from "styled-components";

export const NavBarContainer = styled.div`
  display: none;
  @media (min-width: 767px) {
    margin: 0;
    font-family: "Nunito Sans", sans-serif;
    min-height: 4rem;
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: normal;
    // background-color: grey;
  }
  @media (min-width: 1500px) {
    padding: 2rem 0rem;
  }
`;
