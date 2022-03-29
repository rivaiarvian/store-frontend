import Cookies from "js-cookie";
import jwtDecode from "jwt-decode";
import Image from "next/image";
import { useEffect, useState } from "react";
import { JWTPayloadTypes, UserTypes } from "../../../../services/data-types";
export default function Profile() {
  const [user, setUser] = useState({
    name: "",
    email: "",
    avatar: "/img/avatar-1.png",
  });

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      const jwtToken = atob(token);
      const payload: JWTPayloadTypes = jwtDecode(jwtToken);
      const userFromPayload: UserTypes = payload.player;
      const IMG = process.env.NEXT_PUBLIC_IMAGE;
      userFromPayload.avatar = `${IMG}/${userFromPayload.avatar}`;
      setUser(userFromPayload);
    }
  }, []);
  return (
    <div className="user text-center pb-50 pe-30">
      <img
        src={user.avatar}
        width={80}
        height={80}
        className="mb-20"
        alt="profile"
        style={{ borderRadius: "100%" }}
      />
      <h2 className="fw-bold text-xl color-palette-1 m-0">{user.username}</h2>
      <p className="color-palette-2 m-0">{user.email}</p>
    </div>
  );
}
