import { Box } from "@mui/system";
import React from "react";
import { useLocation } from "react-router-dom";
import { Navigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";

const AdminRoute = ({ children }) => {
  const location = useLocation();
  const { isLoading, users } = useAuth();
  // Loading Default Time
  if (isLoading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          zIndex: "99999",
          backgroundColor: "#a6e8fc",
          overflow: "hidden",
        }}
      >
        <img
          width="40%"
          style={{
            filter:
              "drop-shadow(1px 1px 0 #fff) drop-shadow(-1px 1px 0 #ffffff) drop-shadow(1px -1px 0 #fff) drop-shadow(-1px -1px 0 #fff)",
          }}
          src="https://i.ibb.co/M5BKvzB/unnamed.gif"
          alt=""
        />
      </Box>
    );
  }

  // Admin Panel Dashboard Admin Checker
  return users?.userRole === "Admin" || users?.userRole === "Moderator" ? (
    children
  ) : (
    <Navigate to="/adminLogin" state={{ from: location.pathname }} />
  );
};

export default AdminRoute;
