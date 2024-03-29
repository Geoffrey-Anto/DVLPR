import React from "react";
import { ThemeType } from "../../pages";
import { IsDarkMode } from "../../utils/IsDarkMode";

interface Props {
    data: {
      id: number;
      username: string;
      name: string;
    };
    theme: ThemeType;
}

const UserProfile = ({data, theme}: Props) => {
  return (
    <div>
      <img
        className="w-24 h-24 z-10 relative -top-12 rounded-full left-2"
        src="https://thumbs.dreamstime.com/b/default-avatar-profile-vector-user-profile-default-avatar-profile-vector-user-profile-profile-179376714.jpg"
      />
      <div className="w-full relative -top-6">
        <div className="bg- w-[110%] flex flex-col items-center justify-center">
          <p className={IsDarkMode(theme) ? "text-textWhiteH font-semibold text-lg" : "text-black font-semibold text-lg"}>
            {data?.name ? data?.name
              : ""}
          </p>
          <p className="text-accentGray font-semibold text-lg">
            @
            {data?.username ? data?.username
              : ""}
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
