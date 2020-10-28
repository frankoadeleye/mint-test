import styled from "styled-components";

export const NavbarItemsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 40%;
  height: auto;
  padding: 5px;
  padding: 0;
  margin: 0;
  list-style-type: none;
  text-decoration: 0;
  .is-active::after {
    content: "";
    display: block;
    width: 100%;
    height: 3px;
    background: #0066d6;
    transition: width 0.3s;
    position: relative;
    left: 0%;
  }

  @media (min-width: 1900px) {
    button {
      font-size: 1.4rem;
    }
  }
  @media (min-width: 2400px) {
    button {
      font-size: 1.5rem;
    }
  }
`;
