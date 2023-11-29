import React from "react";
import { Routes, Route } from "react-router-dom";
import UserHeader from "./UserHeader";
import Feed from "../Feed/Feed";
import UserPhotoPost from "./UserPhotoPost";
import UserStatistics from "./Userstatistics";

const User = () => {
  return (
    <section className="container">
      <UserHeader></UserHeader>
      <Routes>
        <Route path="/" element={<Feed />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="estatisticas" element={<UserStatistics />} />
      </Routes>
    </section>
  );
};

export default User;
