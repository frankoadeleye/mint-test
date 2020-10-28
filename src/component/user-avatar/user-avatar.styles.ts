import styled from "styled-components";
import useColor from "../../constants/color";
import fontSize from "./../../constants/font-size";

export const UserAvatarBlock = styled.div`
  display: flex;
  width: auto;
  height: auto;
  justify-content: center;
  align-items: center;
  color: ${useColor.text};

  .discourse {
    display: flex;
    flex-direction: column;
    margin: auto 0.5rem;
  }

  .greeting {
    font-size: ${fontSize.smallText};
  }

  .username {
    font-size: ${fontSize.text};
  }

  .image {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    img {
      border-radius: inherit;
    }
  }
`;
