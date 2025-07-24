import React, { useEffect, useState } from "react";
import Sidebar from "../components/Profile/Sidebar";
import { Outlet } from "react-router-dom"; // 👈 import Outlet
import axios from "axios";
import Loader from "../components/Loader/Loader";

const Profile = () => {
  const [profileData, setProfileData] = useState(null);

  const headers = {
    id: localStorage.getItem("id"),
    authorization: `Bearer ${localStorage.getItem("token")}`,
  };

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          "https://book-store-website-tq7n.onrender.com/api/v1/get-user-information",
          { headers }
        );
        setProfileData(response.data);
      } catch (error) {
        console.error("Error fetching profile:", error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="flex flex-col md:flex-row min-h-screen gap-4 bg-zinc-900 px-2 md:px-12 py-8 text-white">
      {!profileData ? (
        <div className="w-full h-full flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          <div className="md:flex-[1] w-full">
            <Sidebar data={profileData} />
          </div>
          <div className="md:flex-[3] w-full">
            <Outlet /> {/* 👈 This renders the matched nested route */}
          </div>
        </>
      )}
    </div>
  );
};

export default Profile;
