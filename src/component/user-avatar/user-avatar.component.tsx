import React from "react";
import { UserAvatarBlock } from "./user-avatar.styles";
import { Svg } from "./../../assets/svg";

export const UserAvatar = ({ details }: any) => {
  const { greeting, image, username } = details;
  return (
    <UserAvatarBlock>
      <div className="discourse">
        <small className="greeting">{greeting}</small>
        <div className="username">{username}</div>
      </div>
      <div className="image">
        <img src={image} alt="" />
      </div>
    </UserAvatarBlock>
  );
};

export const UserAvatarData = {
  greeting: "Hello",
  image: Svg.avatar,
  username: "Oluwaleke Ojo",
};
