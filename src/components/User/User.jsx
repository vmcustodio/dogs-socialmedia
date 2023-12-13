import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStatistics from "./Userstatistics";
import { UserContext } from "../../UserContext";
import NotFound from "../NotFound";

const User = () => {
  const { data } = useContext(UserContext);
  return (
    <section className="container">
      <UserHeader></UserHeader>
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatistics />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
